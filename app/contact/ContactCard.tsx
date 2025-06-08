import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export type ContactCardProps = {
  image: string;
  logo: string;
  name: string;
  description: string;
  url: string;
};

export const ContactCard = (props: ContactCardProps) => {
  return (
    <Link href={props.url}>
      <Card className="flex-row p-3 hover:bg-secondary/40 group border-secondary inline-flex w-full shadow-sm transition-colors duration-300 ease-in-out hover:translate-y-[-1px] hover:scale-[1.01] hover:shadow-lg">
        <div className="relative">
          <Image
            width={100}
            height={100}
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <Image
            width={15}
            height={15}
            src={props.logo}
            alt={props.name}
            className="absolute -bottom-1 left-7 w-4 h-4 rounded-full"
          />
        </div>
        <div className="flex flex-row">
          <div className="flex items-start gap-0 flex-col justify-center">
            <p className="text-xs md:text-sm">{props.name}</p>
            <p className="text-xs text-muted-foreground whitespace-nowrap">
              {props.description}
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-center ml-auto">
          <ArrowUpRight
            size={16}
            className=" group-hover:translate-x-2 mr-2  group-hover:-translate-y-2 transition-transform"
          />
        </div>
      </Card>
    </Link>
  );
};
