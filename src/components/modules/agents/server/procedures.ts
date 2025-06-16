import { prisma } from "@/lib/prisma";
import { protectedProcedure } from "@/trpc/init";
import { agentInsertSchema } from "../schema/schema";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  MIN_PAGE_SIZE,
} from "@/lib/constant";

export const agentsRouter = {
  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const [existingAgent] = await prisma.agent.findMany({
        where: {
          id: input.id,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          // _count: {
          //   select: {
          //     meetings: true,
          //   },
          // },
        },
      });
      return existingAgent;
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

      const where: any = {
        userId: ctx.auth.user.id,
        name: search ? { contains: search, mode: "insensitive" } : undefined,
      };

      const [data, total] = await Promise.all([
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
            // _count: {
            //   select: {
            //     meetings: true,
            //   },
            // },
          },
          orderBy: [{ createdAt: "desc" }, { id: "desc" }],
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),
        prisma.agent.count({ where }),
      ]);

      const totalPages = Math.ceil(total / pageSize);

      return {
        items: data, // Changed from 'data' to 'items' to match Drizzle structure
        total, // Total count of records
        totalPages, // Total number of pages,
      };
    }),

  create: protectedProcedure
    .input(agentInsertSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const createdAgent = await prisma.agent.create({
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
        return createdAgent;
      } catch (error) {
        console.error("Agent creation failed:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create agent",
        });
      }
    }),
};
