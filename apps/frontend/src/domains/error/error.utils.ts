import { objHas } from "~/domains/common/common.utils";

/**
 * Gets first valid error message.
 * Enhance this function to handle more error types as needed.
 */
export const getErrorMessage = (error: unknown) => {
  if (
    error &&
    typeof error === "object" &&
    objHas(error, "message") &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return "Unknown error";
};
