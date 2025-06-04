"use client";
import { SiteConfig } from "@/lib/site-config";
// import Image from "next/image";
import Link from "next/link";
import { Typography } from "../ui/typography";

export const Footer = () => {
  return (
    <footer className="w-full border-t mt-4">
      <div className="m-auto w-full max-w-3xl px-2 py-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-row items-center gap-2">
            {/* <Image
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="app logo"
            /> */}
            <Typography variant="base" as={Link} href="/">
              {SiteConfig.title}
            </Typography>
          </div>
          <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
            <Link className="hover:underline" href="/">
              Privacy
            </Link>
            <Link className="hover:underline" href="/">
              CGV
            </Link>
            <Link className="hover:underline" href="/">
              Courses
            </Link>
            <Link className="hover:underline" href="/">
              Admin
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Typography variant="base" className="text-xs text-muted-foreground">
            &copy; 2025 Newsite
          </Typography>
        </div>
      </div>
    </footer>
  );
};
