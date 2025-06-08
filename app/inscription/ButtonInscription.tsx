import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export type ButtonInscriptionProps = {};

export const ButtonInscription = (props: ButtonInscriptionProps) => {
  return (
    <Link
      href={"/inscription"}
      className={buttonVariants({ variant: "outline", size: "sm" })}
    >
      Inscription
    </Link>
  );
};
