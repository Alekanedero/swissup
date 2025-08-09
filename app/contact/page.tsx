import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
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
            <CopyEmailButton email="suissez@gmail.com" />
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
