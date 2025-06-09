"use client";

import { Input } from "@/components/ui/input";
import { useAction } from "next-safe-action/hooks";
import { createDossierAction } from "./action";
import { useRouter } from "next/navigation";

export const FormInscription = () => {
  const router = useRouter();
  const { executeAsync, result } = useAction(createDossierAction, {
    onSuccess: () => {
      router.refresh();
    },
    onError: (error) => {
      console.error("Erreur lors de l'inscription :", error);
    },
  });

  console.log("result", result);

  return (
    <form
      action={async (formData) => {
        const nom = formData.get("nom") as string;
        const prenom = formData.get("prenom") as string;
        const raison = formData.get("raison") as string;
        const typeJob = formData.get("typeJob") as string;
        await executeAsync({
          nom: nom,
          prenom: prenom,
          raison: raison,
          typeJob: typeJob,
        });
      }}
      className="flex flex-col gap-4"
    >
      <div>
        <label
          htmlFor="prenom"
          className="block text-sm font-medium text-gray-700"
        >
          Prénom
        </label>
        <Input id="prenom" name="prenom" placeholder="Michel" required />
      </div>
      <div>
        <label
          htmlFor="nom"
          className="block text-sm font-medium text-gray-700"
        >
          Nom
        </label>
        <Input id="nom" name="nom" placeholder="Michel" required />
      </div>
      <div>
        <label
          htmlFor="raison"
          className="block text-sm font-medium text-gray-700"
        >
          raison
        </label>
        <Input id="raison" name="raison" placeholder="Michel" required />
      </div>
      <div>
        <label
          htmlFor="typeJob"
          className="block text-sm font-medium text-gray-700"
        >
          typeJob
        </label>
        <Input id="typeJob" name="typeJob" placeholder="Michel" required />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};
