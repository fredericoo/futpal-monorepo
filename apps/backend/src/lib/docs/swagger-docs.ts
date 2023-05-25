import { ZodiosEndpointDefinitions } from "@zodios/core";
import { ZodiosApp } from "@zodios/express";
import { openApiBuilder } from "@zodios/openapi";
import { setup, serve as swagger } from "swagger-ui-express";
import { UnknownKeysParam, ZodObject, ZodTypeAny } from "zod";

export const withSwaggerDocs = <
  TApi extends ZodiosEndpointDefinitions,
  TContext extends ZodObject<
    any,
    UnknownKeysParam,
    ZodTypeAny,
    { [x: string]: any },
    { [x: string]: any }
  >
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
