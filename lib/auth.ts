import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";
import { PrismaClient } from "@/app/generated/prisma";
import { nextCookies } from "better-auth/next-js";

const client = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(client, {
    provider: "postgresql",
  }),
  appName: "swissup",
  plugins: [nextCookies()],
  emailAndPassword: {
    enabled: true,
  },
});
