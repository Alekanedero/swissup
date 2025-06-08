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

export default function PageContact() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Nous contacter</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card>
          <CardHeader>
            <CardDescription>
              Vous souhaiter nous contacter pour plus de renseignement
            </CardDescription>
          </CardHeader>
          <CardContent>swissupcontact@gmail.com</CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
