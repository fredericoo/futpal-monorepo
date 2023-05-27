import { z } from "zod";

const environmentSchema = z
  .enum(["development", "staging", "production"])
  .default("development");
export type Environment = z.infer<typeof environmentSchema>;

export const environment = environmentSchema.parse(process.env.NODE_ENV);
