import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex h-screen items-center justify-center flex-col gap-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Inscription réussie !</h1>
        <p className="text-lg">
          Merci pour votre inscription. Nous vous contacterons bientôt.
        </p>
      </div>
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "lg",
        })}
        href={"/"}
      >
        Accueil
      </Link>
    </div>
  );
}
