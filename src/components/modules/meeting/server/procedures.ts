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

export const meetingsRouter = createTRPCRouter({
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
          agent: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      if (!existingMeeting) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "meeting not found",
        });
      }
      return existingMeeting;
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
            ? (meeting.endedAt.getTime() - meeting.startedAt.getTime()) / 1000 // Convert to seconds
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

        return await prisma.meeting.create({
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
});
