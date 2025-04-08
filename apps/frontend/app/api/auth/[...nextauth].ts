import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "google_id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "google_secret",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "github_id",
      clientSecret: process.env.GITHUB_SECRET || "github_secret",
    }),
  ],
};

export default NextAuth(authOptions);
