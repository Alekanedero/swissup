"use server";

import { prisma } from "@/lib/prisma";
import { authAction } from "@/lib/safe-action";
import { DossierFormSchema } from "./dossier.schema";

export const createDossierAction = authAction
  .schema(DossierFormSchema)
  .action(async ({ parsedInput, ctx }) => {
    const dossier = await prisma.dossierClient.create({
      data: {
        nom: parsedInput.nom,
        prenom: parsedInput.prenom,
        raison: parsedInput.raison,
        typeJob: parsedInput.typeJob,
        userId: ctx.user.id, // Assurez-vous que l'utilisateur est authentifié
      },
    });
    return dossier;
  });

// parsedInput contient tout les champs nom, prenom, raison et typeJob, etc
// ctx contient l'utilisateur authentifié (ctx.user)

// Juste pour tester, on va juste retourner parsedInput
// .action(async ({ parsedInput, ctx }) => {
//   console.log(parsedInput);
//   console.log(ctx);
//   return parsedInput;
// });
