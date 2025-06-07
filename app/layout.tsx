import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Telugu } from "next/font/google";
import { Providers } from "./Providers";
import { PropsWithChildren } from "react";
import { SiteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const anekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  icons: SiteConfig.icons,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          anekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
