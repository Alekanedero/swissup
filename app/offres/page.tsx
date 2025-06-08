import {
  Layout,
  LayoutContent,
  LayoutHeader,
} from "@/components/layout/layout";
import { CardOffre } from "./CardOffre";

export default function Offre() {
  return (
    <Layout>
      <LayoutHeader>Nos offres</LayoutHeader>
      <LayoutContent>
        <CardOffre />
      </LayoutContent>
    </Layout>
  );
}
