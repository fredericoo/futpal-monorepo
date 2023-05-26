import { ZodiosContext } from "@zodios/express";

export type ContextSchema<TCtx extends ZodiosContext<any>> =
  TCtx extends ZodiosContext<infer TSchema> ? TSchema : never;
