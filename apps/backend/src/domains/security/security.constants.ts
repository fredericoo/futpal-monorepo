import type { Environment } from "~/domains/common/common.constants";

export const envAllowedOrigins: Record<Environment, string[]> = {
  development: ["https://futpal-monorepo.pages.dev"],
  staging: ["https://futpal-monorepo.pages.dev"],
  production: [],
};
