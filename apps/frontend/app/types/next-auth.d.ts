// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Profile } from "next-auth";

declare module "next-auth" {
  interface Profile {
    given_name?: string;
    family_name?: string;
  }
}
