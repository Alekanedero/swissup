import Link from "next/link";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { SiteConfig } from "@/lib/site-config";

export const Footer = () => {
  return (
    <footer className="w-full border-t mt-8">
      <div className="m-auto w-full max-w-3xl px-2 py-4 flex flex-row">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
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
        </div>
        <div className="ml-auto"></div>
        <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
          <Link className="hover:underline" href="/">
            CGV
          </Link>
          <Link className="hover:underline" href="/dev">
            Admin
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Typography variant="base" className="text-xs text-muted-foreground">
          &copy; 2025 {SiteConfig.title}
        </Typography>
      </div>
    </footer>
  );
};
