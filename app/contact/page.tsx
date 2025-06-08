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
          <CardContent className="flex flex-col items-center gap-4">
            <Link
              className={buttonVariants({ variant: "outline", size: "xl" })}
              href="mailto:swissupcontact@gmail.com"
            >
              swissupcontact@gmail.com
            </Link>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
