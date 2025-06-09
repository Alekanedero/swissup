import { z } from "zod";

export const DossierFormSchema = z.object({
  nom: z.string().min(3),
  prenom: z.string().min(3),
  raison: z.string(),
  typeJob: z.string(),
});

export type DossierFormSchemaType = z.infer<typeof DossierFormSchema>;
