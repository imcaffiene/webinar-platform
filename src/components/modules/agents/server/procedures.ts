import { prisma } from "@/lib/prisma";
import { protectedProcedure } from "@/trpc/init";
import { agentInsertSchema } from "../schema/schema";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

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

  getMany: protectedProcedure.query(async () => {
    const data = await prisma.agent.findMany({
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
      orderBy: {
        createdAt: "desc",
      },
    });
    return data;
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
