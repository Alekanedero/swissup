import { Layout, LayoutHeader, LayoutTitle } from "@/components/layout/layout";

import { TestColor } from "@/components/custom/TestColor";

export default function Home() {
  return (
    <Layout>
      <LayoutHeader className="flex-col gap-8 justify-center items-center flex">
        <LayoutTitle>Welcome</LayoutTitle>
      </LayoutHeader>
      <TestColor />
    </Layout>
  );
}
