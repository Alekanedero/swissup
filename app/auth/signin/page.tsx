"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInWithGoogle } from "../SignInWithGoogle";
import { SignInWithGitHub } from "../SignInWithGitHub";
import { Layout } from "@/components/layout/layout";

export default function SignUpPage() {
  return (
    <Layout>
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle>Connexion</CardTitle>
          <CardDescription>
            Connectez-vous avec votre compte pour continuer
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 flex-col @sm:flex-row">
            <SignInWithGitHub />
            <SignInWithGoogle />
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}
