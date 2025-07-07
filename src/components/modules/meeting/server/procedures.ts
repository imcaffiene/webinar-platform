import { prisma } from "@/lib/prisma";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  MIN_PAGE_SIZE,
} from "@/lib/constant";
import { Prisma } from "@prisma/client";
import { meetingInsertSchema, meetingUpdateSchema } from "../schema/schema";
import { MeetingStatus } from "@/lib/types";
import { streamVideo } from "@/lib/stream-video";
import { GeneratedAvatarUri } from "@/lib/avatar";
import { inngest } from "@/inngest/client";

export const meetingsRouter = createTRPCRouter({
  generateToken: protectedProcedure.mutation(async ({ ctx }) => {
    const user = await prisma.user.findUnique({
      where: { id: ctx.auth.user.id },
      select: { id: true, name: true, email: true },
    });
    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    }

    await streamVideo.upsertUsers([
      {
        id: ctx.auth.user.id,
        name: ctx.auth.user.name,
        role: "admin",
        image:
          ctx.auth.user.image ??
          GeneratedAvatarUri({ seed: ctx.auth.user.name, variant: "initials" }),
      },
    ]);

    const expirationTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
    const issuedAt = Math.floor(Date.now() / 1000) - 60;

    const token = streamVideo.generateUserToken({
      user_id: ctx.auth.user.id,
      exp: expirationTime,
      validity_in_seconds: issuedAt,
    });
    return token;
  }),
  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const existingMeeting = await prisma.meeting.findFirst({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          agent: true,
        },
      });

      if (!existingMeeting) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "meeting not found",
        });
      }

      const duration =
        existingMeeting.endedAt && existingMeeting.startedAt
          ? (existingMeeting.endedAt.getTime() -
              existingMeeting.startedAt.getTime()) /
            1000
          : null;

      return {
        ...existingMeeting,
        duration,
        agent: existingMeeting.agent,
      };
    }),

  getMany: protectedProcedure
    .input(
      z.object({
        page: z.number().default(DEFAULT_PAGE),
        pageSize: z
          .number()
          .min(MIN_PAGE_SIZE)
          .max(MAX_PAGE_SIZE)
          .default(DEFAULT_PAGE_SIZE),
        search: z.string().nullish(),
        agentId: z.string().nullish(),
        status: z
          .enum([
            MeetingStatus.Upcoming,
            MeetingStatus.Active,
            MeetingStatus.Cancelled,
            MeetingStatus.Completed,
            MeetingStatus.Processing,
          ])
          .nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { page, pageSize, search, agentId, status } = input;

      const where: Prisma.MeetingWhereInput = {
        userId: ctx.auth.user.id,
        name: search ? { contains: search, mode: "insensitive" } : undefined,
        status: status ? status : undefined,
        agentId: agentId ? agentId : undefined,
      };

      const [items, total] = await Promise.all([
        prisma.meeting.findMany({
          where,
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            agent: {
              select: {
                id: true,
                name: true,
              },
            },
          },
          orderBy: [{ createdAt: "desc" }, { id: "desc" }],
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),
        prisma.meeting.count({
          where: {
            userId: ctx.auth.user.id,
            name: search
              ? { contains: search, mode: "insensitive" }
              : undefined,
            status: status ? status : undefined,
            agent: agentId ? { id: agentId } : undefined,
          },
        }),
      ]);

      // Calculate duration for each meeting
      const itemsWithDuration = items.map((meeting) => ({
        ...meeting,
        duration:
          meeting.endedAt && meeting.startedAt
            ? (meeting.endedAt.getTime() - meeting.startedAt.getTime()) / 1000
            : null,
      }));

      return {
        items: itemsWithDuration,
        total,
        totalPages: Math.ceil(total / pageSize),
      };
    }),

  create: protectedProcedure
    .input(meetingInsertSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        // Verify agent belongs to user
        const agent = await prisma.agent.findFirst({
          where: {
            id: input.agentId,
            userId: ctx.auth.user.id,
          },
        });

        if (!agent) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Agent not found or you don't have permission",
          });
        }

        // Upsert both user and agent to Stream Video
        await streamVideo.upsertUsers([
          {
            id: ctx.auth.user.id,
            name: ctx.auth.user.name || "User",
            role: "user",
            image:
              ctx.auth.user.image ||
              GeneratedAvatarUri({
                seed: ctx.auth.user.id,
                variant: "initials",
              }),
          },
          {
            id: agent.id,
            name: agent.name,
            role: "user",
            image: GeneratedAvatarUri({
              seed: agent.name,
              variant: "botttsNeutral",
            }),
          },
        ]);

        const createdMeeting = await prisma.meeting.create({
          data: {
            name: input.name,
            agentId: input.agentId,
            userId: ctx.auth.user.id,
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            agent: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        });

        // Create Stream Video call
        const call = streamVideo.video.call("default", createdMeeting.id);
        await call.create({
          data: {
            created_by_id: ctx.auth.user.id,
            members: [
              { user_id: ctx.auth.user.id, role: "admin" },
              { user_id: agent.id, role: "user" },
            ],
            custom: {
              meetingId: createdMeeting.id,
              meetingName: createdMeeting.name,
              agentId: agent.id,
            },
            settings_override: {
              transcription: {
                language: "en",
                mode: "auto-on",
                closed_caption_mode: "auto-on",
              },
              recording: {
                mode: "auto-on",
                quality: "1080p",
              },
            },
          },
        });

        return createdMeeting;
      } catch (error) {
        console.error("Meeting creation failed:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create meeting",
        });
      }
    }),

  update: protectedProcedure
    .input(meetingUpdateSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const existing = await prisma.meeting.findFirst({
          where: {
            id: input.id,
            userId: ctx.auth.user.id,
          },
        });

        if (!existing) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Meeting not found",
          });
        }

        return await prisma.meeting.update({
          where: { id: input.id },
          data: {
            ...input,
            userId: undefined,
            agentId: undefined,
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            agent: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        });
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === "P2025") {
            throw new TRPCError({
              code: "NOT_FOUND",
              message: "Meeting not found",
            });
          }
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update meeting",
        });
      }
    }),
  remove: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        const meetingToDelete = await prisma.meeting.findFirst({
          where: {
            id: input.id,
            userId: ctx.auth.user.id,
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            agent: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        });

        if (!meetingToDelete) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Meeting not found or you don't have permission",
          });
        }

        // Then delete it
        await prisma.meeting.deleteMany({
          where: {
            id: input.id,
            userId: ctx.auth.user.id, // Ensures ownership
          },
        });

        return meetingToDelete; // Return the deleted meeting data
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === "P2025") {
            throw new TRPCError({
              code: "NOT_FOUND",
              message: "Meeting not found",
            });
          }
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to delete meeting",
        });
      }
    }),
});
