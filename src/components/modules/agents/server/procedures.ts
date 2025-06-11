import { prisma } from "@/lib/prisma";
import { baseProcedure, protectedProcedure } from "@/trpc/init";
import { agentInsertSchema } from "../schema/schema";
import { TRPCError } from "@trpc/server";

export const agentsRouter = {
  getMany: baseProcedure.query(async () => {
    const data = await prisma.agent.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
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
