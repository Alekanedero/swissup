"use server";

import { prisma } from "@/lib/prisma";
import { authAction } from "@/lib/safe-action";
import { z } from "zod";

export const createDossierAction = authAction
  .schema(
    z.object({
      nom: z.string().min(3),
      prenom: z.string().min(3),
      raison: z.string(),
      typeJob: z.string(),
    })
  )
  .action(async ({ parsedInput, ctx }) => {
    const inscription = await prisma.dossierClient.create({
      data: {
        nom: parsedInput.nom,
        prenom: parsedInput.prenom,
        raison: parsedInput.raison,
        typeJob: parsedInput.typeJob,
        userId: ctx.user.id, // Assurez-vous que l'utilisateur est authentifié
      },
    });
    return inscription;
  });

// parsedInput contient tout les champs nom, prenom, raison et typeJob, etc
// ctx contient l'utilisateur authentifié (ctx.user)

// Juste pour tester, on va juste retourner parsedInput
// .action(async ({ parsedInput, ctx }) => {
//   console.log(parsedInput);
//   console.log(ctx);
//   return parsedInput;
// });
