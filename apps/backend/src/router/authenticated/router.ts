import type { ZodiosRouterContextRequestHandler } from "@zodios/express";
import { zodiosContext } from "@zodios/express";
import { z } from "zod";

import type { ContextSchema } from "~/domains/common/common.utils";

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
