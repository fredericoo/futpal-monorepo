import type { ZodiosContext } from "@zodios/express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContextSchema<TCtx extends ZodiosContext<any>> =
  TCtx extends ZodiosContext<infer TSchema> ? TSchema : never;
