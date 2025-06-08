import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { CardOffre } from "./CardOffre";
import { ButtonInscription } from "../inscription/ButtonInscription";

export default function Offre() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Nos offres</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <div className="flex flex-col items-center justify-center gap-4">
          <CardOffre />
          <ButtonInscription />
        </div>
      </LayoutContent>
    </Layout>
  );
}
