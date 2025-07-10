import { prisma } from "@/lib/prisma";
import {
  createTRPCRouter,
  premiumProceduce,
  protectedProcedure,
} from "@/trpc/init";
import { agentInsertSchema, agentUpdateSchema } from "../schema/schema";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  MIN_PAGE_SIZE,
} from "@/lib/constant";
import { Prisma } from "@prisma/client";

export const agentsRouter = createTRPCRouter({
  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const agent = await prisma.agent.findFirst({
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
        },
      });

      if (!agent) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Agent not found",
        });
      }
      return agent;
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
      })
    )
    .query(async ({ input, ctx }) => {
      const { page, pageSize, search } = input;

      const where = {
        userId: ctx.auth.user.id,
        name: search
          ? { contains: search, mode: Prisma.QueryMode.insensitive }
          : undefined,
      };

      const [items, total] = await Promise.all([
        prisma.agent.findMany({
          where,
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
          orderBy: [{ createdAt: "desc" }, { id: "desc" }],
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),
        prisma.agent.count({ where }),
      ]);

      return {
        items,
        total,
        totalPages: Math.ceil(total / pageSize),
      };
    }),

  create: premiumProceduce("agents")
    .input(agentInsertSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        return await prisma.agent.create({
          data: {
            name: input.name,
            instructions: input.instructions,
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
          },
        });
      } catch (error) {
        console.error("Agent creation failed:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create agent",
        });
      }
    }),

  update: protectedProcedure
    .input(agentUpdateSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        // Verify ownership first
        const existing = await prisma.agent.findFirst({
          where: {
            id: input.id,
            userId: ctx.auth.user.id,
          },
        });

        if (!existing) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Agent not found",
          });
        }

        return await prisma.agent.update({
          where: { id: input.id },
          data: input,
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        });
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === "P2025") {
            throw new TRPCError({
              code: "NOT_FOUND",
              message: "Agent not found",
            });
          }
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update agent",
        });
      }
    }),

  remove: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        // Get agent first to return data
        const agent = await prisma.agent.findFirst({
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
          },
        });

        if (!agent) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Agent not found",
          });
        }

        await prisma.agent.deleteMany({
          where: {
            id: input.id,
            userId: ctx.auth.user.id,
          },
        });

        return agent;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to delete agent",
        });
      }
    }),
});
