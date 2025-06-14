import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Image from "next/image";
import { SiteConfig } from "@/lib/site-config";
import { AuthButton } from "../../../app/auth/AuthButton";
import { Typography } from "../ui/typography";

export function Header() {
  return (
    <header className="z-40 sticky top-0 w-full border-b bg-background">
      <div className="flex flex-col sm:flex-row h-16 items-center justify-center sm:justify-between w-full px-4">
        <div className="flex flex-row gap-2 items-start">
          <Typography
            variant="h3"
            as={Link}
            href="/"
            className="hidden sm:block"
          >
            {SiteConfig.title}
          </Typography>
          <Image
            src="/images/logo.svg"
            alt="logo du site"
            width={20}
            height={20}
          />
        </div>
        <div className="flex gap-4 items-center">
          <Typography
            variant="link"
            as={Link}
            href="/"
            className="text-muted-foreground hover:text-foreground"
          >
            Accueil
          </Typography>
          <Typography
            variant="link"
            as={Link}
            href="/offres"
            className="text-muted-foreground hover:text-foreground"
          >
            Offres
          </Typography>
          <Typography
            variant="link"
            as={Link}
            href="/contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </Typography>
          <AuthButton />
          <ThemeToggle className="h-8 w-8" />
        </div>
      </div>
    </header>
  );
}
