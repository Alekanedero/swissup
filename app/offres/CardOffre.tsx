import { Card, CardHeader } from "@/components/ui/card";

export type OffreProps = {
  name?: string;
};

export const CardOffre = (props: OffreProps) => {
  return (
    <Card>
      <CardHeader>Offre 1</CardHeader>
    </Card>
  );
};
