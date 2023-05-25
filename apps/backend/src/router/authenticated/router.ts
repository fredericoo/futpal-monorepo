import { ContextSchema } from "@/lib/type-utils";
import {
  zodiosContext,
  ZodiosRouterContextRequestHandler,
} from "@zodios/express";
import { z } from "zod";

export const ctx = zodiosContext(
  z.object({
    user: z.object({
      id: z.string(),
      name: z.string(),
      role: z.string(),
    }),
  })
);

export type UserMiddleware = ZodiosRouterContextRequestHandler<
  ContextSchema<typeof ctx>
>;
