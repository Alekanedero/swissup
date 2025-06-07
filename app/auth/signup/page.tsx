"use client";

import { Layout } from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { SignInWithGoogle } from "../SignInWithGoogle";

export default function SignUpPage() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 justify-">
            <SignInWithGoogle />
          </div>

          <p className="text-muted-foreground text-center text-xs">
            Already have an account?{" "}
            <Link className="text-indigo-500" href="/auth/signin">
              Sing In.
            </Link>
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
