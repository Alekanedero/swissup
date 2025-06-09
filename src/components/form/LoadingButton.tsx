"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type LoadingButtonProps = ButtonProps & {
  forceLoading?: boolean;
};

export const LoadingButton = ({
  forceLoading,
  ...props
}: LoadingButtonProps) => {
  const { pending } = useFormStatus();
  const loading = forceLoading || pending;
  return (
    <Button {...props} disabled={pending}>
      <span className={cn("transition-opacity duration-300 ease-in")}>
        {props.children}
      </span>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      )}
    </Button>
  );
};
