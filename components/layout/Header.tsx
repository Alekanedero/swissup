// src/components/layout/Header.
import { SiteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Typography } from "../ui/typography";

export function Header() {
  return (
    <header className="z-100 fixed w-full border-b bg-background">
      <div className="flex flex-col sm:flex-row h-16 items-center justify-center sm:justify-between w-full px-4">
        <Typography variant="h3" as={Link} href="/" className="hidden sm:block">
          {SiteConfig.title}
        </Typography>
        <div className="flex gap-4 items-center">
          <Typography
            variant="link"
            as={Link}
            href="/"
            className="text-muted-foreground hover:text-foreground"
          >
            Home
          </Typography>
          <Typography
            variant="link"
            as={Link}
            href="/experience"
            className="text-muted-foreground hover:text-foreground"
          >
            Expérience
          </Typography>
          <Typography
            variant="link"
            as={Link}
            href="/contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </Typography>
          <ThemeToggle className="h-8 w-8" />
        </div>
      </div>
    </header>
  );
}
