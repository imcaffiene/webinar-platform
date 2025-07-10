import { agentsRouter } from "@/components/modules/agents/server/procedures";
import { createTRPCRouter } from "../init";
import { meetingsRouter } from "@/components/modules/meeting/server/procedures";
import { premiumRouter } from "@/components/modules/premium/server/procedure";

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingsRouter,
  premium: premiumRouter,
});

export type AppRouter = typeof appRouter;
