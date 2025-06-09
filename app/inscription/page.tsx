import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getUser } from "@/lib/auth-session";
import { SignInWithGitHub2 } from "../auth/SignInWithGitHub2";
import { SignInWithGoogle2 } from "../auth/SignInWithGoogle2";
import { CreateDossierForm } from "./CreateDossierForm";

// import Link from "next/link";
// import { buttonVariants } from "@/components/ui/button";

export default async function InscriptionPage() {
  const user = await getUser();

  if (!user) {
    return (
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Inscription</LayoutTitle>
        </LayoutHeader>
        <LayoutContent>
          <Card>
            <CardHeader>
              <p>Veuillez vous connecter pour accéder à cette page.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-2 flex-col @sm:flex-row">
                <SignInWithGoogle2 />
                <SignInWithGitHub2 />
              </div>
            </CardContent>
          </Card>
        </LayoutContent>
      </Layout>
    );
  }
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Inscription</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        {/* <Link
          className={buttonVariants({
            variant: "outline",
            className: "mb-8 w-full",
          })}
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSdfk0EAvwcrEUGCgEv3Rl7ZGVsNYl6kOIG3jadc2VpBIzS7ZQ/viewform?usp=dialog"
          }
        >
          Formulaire
        </Link> */}
        <CreateDossierForm />
      </LayoutContent>
    </Layout>
  );
}
