import { z } from "zod";

export const agentInsertSchema = z.object({
  name: z.string().min(1, "Name is required"),
  instructions: z.string().min(1, "Instruction is required"),
});

export const agentUpdateSchema = agentInsertSchema.extend({
  id: z.string().min(1, { message: "ID is required" }),
});
