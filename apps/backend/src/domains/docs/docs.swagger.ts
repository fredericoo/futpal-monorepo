import type { ZodiosEndpointDefinitions } from "@zodios/core";
import type { ZodiosApp } from "@zodios/express";
import { openApiBuilder } from "@zodios/openapi";
import { serve as swagger, setup } from "swagger-ui-express";
import type { AnyZodObject } from "zod";

export const autoGenSwaggerDocs = <
  TApi extends ZodiosEndpointDefinitions,
  TContext extends AnyZodObject
>(
  app: ZodiosApp<TApi, TContext>,
  api: TApi
) => {
  const document = openApiBuilder({
    title: "Futpal Backend",
    version: "1.0.0",
    description: "Interact with Futpal from anywhere.",
  })
    .addServer({ url: "/api/v1" })
    .addPublicApi(api)
    .build();

  app.use(`/docs/swagger.json`, (_, res) => res.json(document));
  app.use("/docs", swagger);
  app.use("/docs", setup(undefined, { swaggerUrl: "/docs/swagger.json" }));
};
