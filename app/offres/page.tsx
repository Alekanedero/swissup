import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { CardOffre } from "./CardOffre";

export default function Offre() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Nos offres</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <CardOffre />
      </LayoutContent>
    </Layout>
  );
}
