// "use client";

// import { Input } from "@/components/ui/input";
// import { useAction } from "next-safe-action/hooks";
// import { createDossierAction } from "./action";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export const FormInscription = () => {
//   const router = useRouter();
//   const { executeAsync, result } = useAction(createDossierAction, {
//     onSuccess: () => {
//       toast.success("Inscription réussie !");
//       router.refresh();
//     },
//     onError: (error) => {
//       toast.error("Erreur lors de l'inscription. Veuillez réessayer.");
//       console.error("Erreur lors de l'inscription :", error);
//     },
//   });

//   console.log("result", result);

//   return (
//     <form
//       action={async (formData) => {
//         const nom = formData.get("nom") as string;
//         const prenom = formData.get("prenom") as string;
//         const raison = formData.get("raison") as string;
//         const typeJob = formData.get("typeJob") as string;
//         await executeAsync({
//           nom: nom,
//           prenom: prenom,
//           raison: raison,
//           typeJob: typeJob,
//         });
//       }}
//       className="flex flex-col gap-4"
//     >
//       <div>
//         <label
//           htmlFor="prenom"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Prénom
//         </label>
//         <Input id="prenom" name="prenom" placeholder="Michel" required />
//       </div>
//       <div>
//         <label
//           htmlFor="nom"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Nom
//         </label>
//         <Input id="nom" name="nom" placeholder="Michel" required />
//       </div>
//       <div>
//         <label
//           htmlFor="raison"
//           className="block text-sm font-medium text-gray-700"
//         >
//           raison
//         </label>
//         <Input id="raison" name="raison" placeholder="Michel" required />
//       </div>
//       <div>
//         <label
//           htmlFor="typeJob"
//           className="block text-sm font-medium text-gray-700"
//         >
//           typeJob
//         </label>
//         <Input id="typeJob" name="typeJob" placeholder="Michel" required />
//       </div>
//       <button
//         type="submit"
//         className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

"use client";

import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { createDossierAction } from "./dossier.action";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/form/LoadingButton";
import { useRouter } from "next/navigation";
import { DossierFormSchema, DossierFormSchemaType } from "./dossier.schema";

export const CreateDossierForm = () => {
  const router = useRouter();
  const form = useZodForm({
    schema: DossierFormSchema,
    defaultValues: {
      nom: "",
      prenom: "",
      raison: "",
      typeJob: "",
    },
  });

  const { execute, isPending } = useAction(createDossierAction, {
    onSuccess: () => {
      toast.success("Inscription réussie !");
      router.push("/inscription/success");
    },
    onError: (error) => {
      toast.error(error.error.serverError);
    },
  });

  const createDossier = (values: DossierFormSchemaType) => {
    execute({
      prenom: values.prenom,
      nom: values.nom,
      raison: values.raison,
      typeJob: values.typeJob,
    });
  };

  return (
    <Form
      form={form}
      onSubmit={async (values) => {
        createDossier(values);
      }}
      className="space-y-4"
    >
      <FormField
        control={form.control}
        name="prenom"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel htmlFor="prenom">Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Michel" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        control={form.control}
        name="nom"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel htmlFor="nom">Nom</FormLabel>
              <FormControl>
                <Input placeholder="Dupont" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        control={form.control}
        name="raison"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel htmlFor="raison">raison</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="La suisse me fait kiffer !"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        control={form.control}
        name="typeJob"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel htmlFor="typeJob">typeJob</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Serveur, batiment, soudeur ..."
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <LoadingButton forceLoading={isPending} type="submit">
        Submit
      </LoadingButton>
    </Form>
  );
};
