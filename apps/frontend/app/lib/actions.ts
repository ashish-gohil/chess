"use server";

import { prisma } from "@repo/db";
import bcrypt from "bcryptjs";

export async function signupHandler(username: string, password: string) {
  console.log("Username: ", username);
  console.log("Password: ", password);
  console.log("Signup handler called");
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: {
      username: username,
      password: hashedPassword,
      provider: "EMAIL",
      email: `${username}@chess.com`,
    },
  });
}
