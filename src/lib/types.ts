import { AppRouter } from "@/trpc/routers/_app";
import { inferRouterOutputs } from "@trpc/server";

export type AgentGetOne = inferRouterOutputs<AppRouter>["agents"]["getOne"];

export type MeetingGetOne = inferRouterOutputs<AppRouter>["meetings"]["getOne"];
