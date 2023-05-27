import { match, P } from "ts-pattern";
import { ZodError } from "zod";

import { isInstanceOf } from "~/domains/common/common.utils";

/**
 * Gets first valid error message.
 * Enhance this function to handle more error types as needed.
 */
export const getErrorMessage = (error: unknown) => {
  return match(error)
    .when(isInstanceOf(ZodError), ({ errors }) => errors[0].message)
    .with({ message: P.string }, ({ message }) => message)
    .otherwise(() => "Unknown error");
};
