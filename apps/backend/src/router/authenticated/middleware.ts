import { z } from "zod";

import type { UserMiddleware } from "~/router/authenticated/router";

const bearerTokenSchema = z.string().regex(/^Bearer .+$/);

export const userMiddleware: UserMiddleware = (req, res, next) => {
  const authorisationHeader = req.headers.authorization;
  const bearerToken = bearerTokenSchema.safeParse(authorisationHeader);
  if (!bearerToken.success) {
    return res.status(401).send("Missing or invalid authorisation header");
  }

  req.user = {
    id: "1",
    name: "John Doe",
    role: "admin",
  };

  next();
};
