"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Layout } from "@/components/layout/layout";
import { SignInWithGitHub } from "../auth/SignInWithGitHub";

export default function SignUpPage() {
  return (
    <Layout>
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle>Connexion</CardTitle>
          <CardDescription>Connection developpeur</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 flex-col @sm:flex-row">
            <SignInWithGitHub />
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}
