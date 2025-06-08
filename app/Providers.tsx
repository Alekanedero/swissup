"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* <SessionProvider> */}
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
      </QueryClientProvider>

      {/* </SessionProvider> */}
    </ThemeProvider>
  );
};
