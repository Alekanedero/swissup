"use client";
import Image from "next/image";

export type LogoItemProps = {
  src: string;
  alt: string;
};

export const LogoItem = ({ src, alt }: LogoItemProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className={"flex h-16 w-16 items-center justify-center rounded-lg"}>
        <Image src={src} alt={alt} width={40} height={40} />
      </div>
    </div>
  );
};
