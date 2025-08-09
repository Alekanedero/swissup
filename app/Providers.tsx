"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/next";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* <SessionProvider> */}
      <QueryClientProvider client={queryClient}>
        {children}
        <Analytics />
        <Toaster />
      </QueryClientProvider>

      {/* </SessionProvider> */}
    </ThemeProvider>
  );
};
