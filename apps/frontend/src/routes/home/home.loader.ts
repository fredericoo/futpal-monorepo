import { client } from "~/domains/api/api.client";
import { defer, makeLoader } from "~/domains/routing/routing.utils";

export const homeLoader = makeLoader(() => {
  const test = client.getGames();

  return defer({test});
});
