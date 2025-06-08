"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const ButtonInscription = () => {
  return (
    <Link
      href="/inscription"
      className={buttonVariants({
        variant: "outline",
        size: "sm",
      })}
    >
      Inscription
    </Link>
  );
};
