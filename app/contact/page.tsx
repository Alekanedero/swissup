import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { CopyEmailButton } from "../account/CopyEmailButton";

export default function PageContact() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Nous contacter</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card className="mt-8">
          <CardHeader>
            <CardDescription>
              Vous souhaiter nous contacter pour plus de renseignement
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <CopyEmailButton email="suissez.contact@gmail.com" />
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
