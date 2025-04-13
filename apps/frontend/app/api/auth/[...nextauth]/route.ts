import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "Ashish", email: "example@gmail.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
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
    signIn({ account, profile }) {
      console.log("this is from signin callback");
      console.log(account);
      console.log("///////");
      console.log(profile);
      console.log("///////////");
      if (account?.provider === "google") {
        console.log(profile);
        // return (
        //   profile?.email_verified && profile?.email?.endsWith("@gmail.com")
        // );
      }
      return true; // Do different verification for other providers that don't have `email_verified`
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
