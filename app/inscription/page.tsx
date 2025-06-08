import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getUser } from "@/lib/auth-session";
import { SignInWithGoogle } from "../auth/SignInWithGoogle";

export default async function InscriptionPage() {
  const user = await getUser();

  if (!user) {
    return (
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Se connecter</LayoutTitle>
        </LayoutHeader>
        <LayoutContent>
          <Card>
            <CardHeader>
              <p>Veuillez vous connecter pour accéder à cette page.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-2 flex-col @sm:flex-row">
                <SignInWithGoogle />
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
      <LayoutContent></LayoutContent>
    </Layout>
  );
}
