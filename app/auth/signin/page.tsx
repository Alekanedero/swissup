"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layout } from "@/components/layout/layout";
import { SignInWithGoogle } from "../SignInWithGoogle";

export default function SignUpPage() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            We just need a few details to get you started.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 justify-">
            <SignInWithGoogle />
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}
