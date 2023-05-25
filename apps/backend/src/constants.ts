import { F } from "ts-toolbelt";

const makeUserRoles = <TRoles extends string[]>(roles: F.Narrow<TRoles>) =>
  roles;

export const USER_ROLES = makeUserRoles(["admin", "organiser", "user"]);
