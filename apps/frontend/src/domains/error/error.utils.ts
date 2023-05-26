import { P, match } from "ts-pattern";
import { ZodError } from "zod";

/**
 * Gets first valid error message.
 * Enhance this function to handle more error types as needed.
 */
export const getErrorMessage = (error: unknown) => {
  match(error)
    .when(isInstanceOf(ZodError), ({ errors }) => errors[0].message)
    .with({ message: P.string }, ({ message }) => message)
    .otherwise(() => "Unknown error");
};

import { isInstanceOf } from "~/domains/common/common.utils";
