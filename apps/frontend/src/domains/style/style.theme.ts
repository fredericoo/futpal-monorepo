import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "~/domains/style/style.breakpoints";
import { colors } from "~/domains/style/style.colors";
import { semanticTokens } from "~/domains/style/style.semantic-tokens";

/** Adds more properties on top of the defaults */
export const extendedTheme = extendTheme({ colors, semanticTokens });

/** Rewrites properties */
export const theme = { ...extendedTheme, colors, breakpoints };
