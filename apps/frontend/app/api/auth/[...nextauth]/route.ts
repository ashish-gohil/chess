import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma, User } from "@repo/db";
import bcrypt from "bcryptjs";

async function checkUser(
  username: string,
  password: string
): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { username },
  });
  if (!user) {
    return null;
  } else {
    //compare password with the hashed password in the db
    const match = await bcrypt.compare(password, user.password || "");
    if (match) {
      return user;
    } else {
      return null;
    }
  }
}

export const authOptions: NextAuthOptions = {
  // pages: {  //this needs to be done if sign and sign out pages are created deifferently
  //   signIn: "/signin",
  //   signOut: "/",
  // },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your Username...",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        console.log(req);
        const user = await checkUser(
          credentials?.username || "",
          credentials?.password || ""
        );
        return user; // If no error and we have user data, return it
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "google_id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "google_secret",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "github_id",
      clientSecret: process.env.GITHUB_SECRET || "github_secret",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
  callbacks: {
    jwt({ token, user, account, profile, isNewUser }) {
      console.log("this is from jwt callback");
      console.log("token");
      console.log(token);
      console.log("user");
      console.log(user);
      console.log("account");
      console.log(account);
      console.log("profile");
      console.log(profile);
      console.log("isNewUser");
      console.log(isNewUser);
      token.id = "asdaasdasdasdasdasdasdasdasd"; // to send Id to the session and show in UI(client or server components)

      return token;
    },
    signIn: async ({ account, profile }) => {
      if (account?.provider === "google") {
        const email = profile?.email;

        if (!email) return false; // email is required to proceed

        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        if (existingUser) {
          // Update user with latest Google profile data
          await prisma.user.update({
            where: { email },
            data: {
              name: profile.name,

              username: `${profile?.given_name}_${profile?.family_name}`,
            },
          });
        } else {
          // Create new user
          await prisma.user.create({
            data: {
              email,
              name: profile.name || "",
              username: `${profile.given_name}_${profile.family_name}` || "",
              provider: "GOOGLE",
            },
          });
        }
      } else {
        console.log("this is from signIn callback is provider is not google");
        console.log(account);
        console.log("??????????????????");
        console.log(profile);
      }

      return true; // Allow sign in
    },
    session({ session, token, user }) {
      console.log("this is from session callback");
      console.log(token);
      console.log("///////");
      console.log(user);
      console.log("///////");
      return session; // The return type will match the one returned in `useSession()`
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
