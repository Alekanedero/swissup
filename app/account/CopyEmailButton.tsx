"use client";

import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className={`${buttonVariants({
        size: "sm",
        variant: "outline",
      })} mt-4 flex items-center gap-2 relative group`}
      onClick={handleCopy}
      aria-label={`Copier l'adresse email ${email}`}
    >
      {copied ? (
        "Copié !"
      ) : (
        <>
          {email}
          <Copy
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            size={16}
          />
        </>
      )}
    </button>
  );
}
