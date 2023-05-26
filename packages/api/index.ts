import { makeApi } from "@zodios/core";
import z from "zod";

import { errors } from "./errors";

export const api = makeApi([
  {
    method: "get",
    path: "/games",
    alias: "getGames",
    parameters: [
      {
        type: "Query",
        name: "code",
        schema: z.string().optional(),
      },
    ],
    response: z.object({ name: z.string() }),
    errors,
  },
]);
