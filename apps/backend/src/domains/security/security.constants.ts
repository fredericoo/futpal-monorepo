import type { CorsOptions } from "cors";

import type { Environment } from "~/domains/common/common.constants";

/** 
 * origin: Configures the Access-Control-Allow-Origin CORS header. Possible values:
 * Boolean - set origin to true to reflect the request origin, as defined by req.header('Origin'), or set it to false to disable CORS.
 * String - set origin to a specific origin. For example if you set it to "http://example.com" only requests from “http://example.com” will be allowed.
 * RegExp - set origin to a regular expression pattern which will be used to test the request origin. If it’s a match, the request origin will be reflected. For example the pattern /example\.com$/ will reflect any request that is coming from an origin ending with “example.com”.
 * Array - set origin to an array of valid origins. Each origin can be a String or a RegExp. For example ["http://example1.com", /\.example2\.com$/] will accept any request from “http://example1.com” or from a subdomain of “example2.com”.
 * Function - set origin to a function implementing some custom logic. The function takes the request origin as the first parameter and a callback (called as callback(err, origin), where origin is a non-function value of the origin option) as the second.
 */
export const envAllowedOrigins: Record<Environment, CorsOptions['origin']> = {
  development: true,
  staging: ["https://futpal-monorepo.pages.dev"],
  production: [],
};
