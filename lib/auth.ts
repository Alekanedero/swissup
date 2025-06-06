import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";
import { PrismaClient } from "@/app/generated/prisma";

const client = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(client, {
    provider: "postgresql",
  }),
  appName: "swissup",
  plugins: [],
  emailAndPassword: {
    enabled: true,
  },
});
