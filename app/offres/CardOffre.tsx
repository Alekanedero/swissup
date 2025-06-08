"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const CardOffre = () => {
  return (
    <Card>
      <CardHeader>Formule Premium – 600 CHF</CardHeader>
      <CardContent>
        <p>
          Un accompagnement professionnel complet pour réussir votre intégration
          en Suisse :
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Optimisation de votre CV et lettre de motivation selon les standards
            suisses
          </li>
          <li>
            Mise en relation avec des partenaires RH et agences de placement
            fiables
          </li>
          <li>
            {" "}
            Guide PDF détaillé : toutes les étapes pour s’installer en Suisse
            (démarches administratives, logement, assurance, etc.)
          </li>
          <li>
            Conseils personnalisés pour maximiser vos chances sur le marché de
            l’emploi suisse
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
