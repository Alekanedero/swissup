"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { ComponentPropsWithRef, useState } from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LogoutButton = (props: ComponentPropsWithRef<"button">) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  return (
    <Button
      {...props}
      variant="destructive"
      size="sm"
      onClick={() => {
        authClient.signOut(
          {},
          {
            onRequest: () => {
              setIsLoading(true);
            },
            onSuccess: () => {
              setIsLoading(false);
              router.push("/");
              router.refresh();
            },
          }
        );
      }}
    >
      <LogOut size={12} className="mr-2" />
      {isLoading ? "Loading..." : "Logout"}
    </Button>
  );
};
