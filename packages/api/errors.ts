import { makeErrors } from "@zodios/core";
import { z } from "zod";

export const errors = makeErrors([
  {
    status: 404,
    description: "Not found",
    schema: z.object({
      error: z.object({
        code: z.literal("not_found"),
        message: z.string(),
      }),
    }),
  },
  {
    status: "default",
    description: "Default error",
    schema: z.object({
      error: z.object({
        code: z.string(),
        message: z.string(),
      }),
    }),
  },
]);
