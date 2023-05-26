import { invariant } from "~/domains/common/common.utils";

export const API_URL = import.meta.env.VITE_API_URL;

invariant(typeof API_URL === "string", "API_URL must be defined in .env");
