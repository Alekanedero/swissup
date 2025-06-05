import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";

const client = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(client, {
        provider: "postgresql",
    }),
    appName: "swissup",
    plugins: [],
});
