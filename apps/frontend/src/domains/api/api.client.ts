import { Zodios } from "@zodios/core";
import { api } from "api";

const apiClient = new Zodios("http://localhost:8080", api);

/** We rely on inference from the `api` package, so no need to expose these utils until needed. */
type NotExposedProperties =
  | "axios"
  | "post"
  | "delete"
  | "get"
  | "put"
  | "patch"
  | "api"
  | "eject"
  | "request"
  | "use"
  | "eject"
  | "options";

export const client = apiClient as Omit<typeof apiClient, NotExposedProperties>;
