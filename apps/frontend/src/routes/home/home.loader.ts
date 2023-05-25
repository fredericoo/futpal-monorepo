import { client } from "~/domains/api/api.client";
import { makeLoader } from "~/domains/routing/routing.utils";

export const homeLoader = makeLoader(async () => {
  const test = await client.getGames();

  return test;
});
