import type { ZodiosEndpointDefinitions } from "@zodios/core";
import type { ZodiosApp } from "@zodios/express";
import cors from "cors";
import type { AnyZodObject } from "zod";

import { environment } from "~/domains/common/common.constants";
import { envAllowedOrigins } from "~/domains/security/security.constants";

const options: cors.CorsOptions = {
  origin: envAllowedOrigins[environment],
};

export const addCorsRules = <
  TApi extends ZodiosEndpointDefinitions,
  TContext extends AnyZodObject
>(
  app: ZodiosApp<TApi, TContext>
) => {
  app.use(cors(options));
};
