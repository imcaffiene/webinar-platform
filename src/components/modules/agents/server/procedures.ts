import { prisma } from "@/lib/prisma";
import { baseProcedure } from "@/trpc/init";
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

    // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay

    // throw new TRPCError({
    //   code: "INTERNAL_SERVER_ERROR",
    //   message: "An error occurred while fetching agents.",
    // });

    return data;
  }),
};
