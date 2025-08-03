import { buttonVariants } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CardMove({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "border-card-border bg-card text-card-foreground flex flex-col gap-6 rounded-md border py-6 shadow-sm transition-transform duration-200 ease-in-out hover:translate-y-[-1px] hover:scale-[1.01] hover:shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export default async function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-4 items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-800 ">
        <h1 className="text-3xl md:text-7xl text-center text-white mt-12 md:font-semibold px-2 font-bold">
          Experts en Recrutement
        </h1>
        <h1 className="text-3xl md:text-7xl text-center font-semibold">
          Construction & Bâtiment
        </h1>
        <p className="text-emerald-50 text-lg md:text-[22px] text-center italic px-2">
          Nous connectons les meilleurs talents avec les entreprises leaders du
          secteur de la construction
        </p>
        <div className="flex gap-2 mb-12">
          <Link
            href="/inscription"
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
            })}
          >
            Nous contacter
          </Link>
          <Link
            href="/inscription"
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
            })}
          >
            Nos services
          </Link>
        </div>
      </div>

      <div className="max-w-[900px] w-full mx-auto">
        {/* -------------- SERVICE --------------- */}

        <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <h2 className="text-4xl font-semibold">Nos services</h2>
          <p className="text-neutral-700 text-lg">
            Solutions complètes de recrutement pour tous vos besoins en
            construction
          </p>
        </div>

        <div className="flex flex-col gap-4 m-8 md:flex-row">
          <CardMove className="flex-1 flex flex-col gap-4">
            <CardHeader>
              <div className="w-full h-[200px] md:h-[150px] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/12.jpg"
                  alt="picture technique profil"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="mt-3">
                <h3 className="text-lg text-center ">Recrutement Cadres</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="text-neutral-700 text-md text-center">
                  Directeurs de travaux, ingénieurs, chefs de projets et
                  managers pour vos équipe dirigeantes
                </p>
              </CardDescription>
            </CardContent>
          </CardMove>

          <CardMove className="flex-1 flex flex-col gap-4">
            <CardHeader>
              <div className="w-full h-[200px] md:h-[150px] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/1.jpg"
                  alt="picture technique profil"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="mt-3">
                <h3 className="text-lg text-center">Profils Techniques</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="text-neutral-700 text-md text-center">
                  Conducteurs de travaux, techniciens spécialisés et experts
                  métiers qualifiés
                </p>
              </CardDescription>
            </CardContent>
          </CardMove>

          <CardMove className="flex-1 flex flex-col gap-4">
            <CardHeader>
              <div className="m-auto w-full h-[200px] md:h-[150px] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/13.jpg"
                  alt="picture technique profil"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="mt-3">
                <h3 className="text-lg text-center">Conseil RH</h3>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription>
                <p className="text-neutral-700 text-md text-center">
                  Accompagnement stratégique et conseil en organisation des
                  équipes
                </p>
              </CardDescription>
            </CardContent>
          </CardMove>
        </div>

        {/* -------------- EXPERTISE --------------- */}

        <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <h2 className="text-4xl font-semibold">Nos Secteurs d'Expertise</h2>
          <p className="text-neutral-700 text-lg">
            Une connaissance approfondie de tous les métiers de la construction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 mx-32">
          <CardMove className="flex-1 gap-4">
            <CardHeader className="justify-center align-center gap-4">
              <div className="m-auto w-[50px] h-[50px] md:w-[60px] md:h-[60px] relative rounded-lg overflow-hidden">
                <Image
                  src="/logo/secteur/1.JPG"
                  alt="picture technique profil"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-lg">Bâtiment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="text-neutral-700 text-md text-center">
                  Résidentiel, tertiaire, indutriel
                </p>
              </CardDescription>
            </CardContent>
          </CardMove>
          <CardMove className="flex-1 gap-4">
            <CardHeader className="justify-center align-center gap-4">
              <div className="m-auto w-[50px] h-[50px] md:w-[60px] md:h-[60px] relative rounded-lg overflow-hidden">
                <Image
                  src="/logo/secteur/4.JPG"
                  alt="picture technique profil"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-lg">Travaux Publics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="text-neutral-700 text-md text-center">
                  Routes, ponts, infrastructures
                </p>
              </CardDescription>
            </CardContent>
          </CardMove>

          <CardMove className="flex-1 gap-4">
            <CardHeader className="justify-center align-center gap-4">
              <div className="m-auto w-[50px] h-[50px] md:w-[60px] md:h-[60px] relative rounded-lg overflow-hidden">
                <Image
                  src="/logo/secteur/3.JPG"
                  alt="picture technique profil"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-lg">Génie Climatique</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="text-neutral-700 text-md text-center">
                  CVC, plomberie, électricité
                </p>
              </CardDescription>
            </CardContent>
          </CardMove>

          <CardMove className="flex-1 gap-4">
            <CardHeader className="justify-center align-center gap-4">
              <div className="m-auto w-[50px] h-[50px] md:w-[60px] md:h-[60px] relative rounded-lg overflow-hidden">
                <Image
                  src="/logo/secteur/2.JPG"
                  alt="picture technique profil"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-lg">Energie Renouvelables</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="text-neutral-700 text-md text-center">
                  Solaire, éolien, géothermie
                </p>
              </CardDescription>
            </CardContent>
          </CardMove>
        </div>

        {/* -------------- CONTACT --------------- */}

        <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <h2 className="text-4xl font-semibold">Contactez-nous</h2>
          <p className="text-neutral-700 text-lg">
            Discutons de vos besoins en recrutement
          </p>
        </div>

        <div className="flex flex-col flex-center gap-4 m-8 md:flex-row">
          <CardMove className="flex flex-1">
            <CardHeader className="justify-center align-center">
              <div className="m-auto">
                <UserPen />
              </div>
              <CardTitle>Inscription gratuite </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <CardDescription>
                <p className="text-neutral-700 text-md text-center">
                  Sans engagement, pour un projet durable.
                </p>
              </CardDescription>
              <div className="flex justify-center items-center">
                <Link
                  className={`${buttonVariants({
                    size: "sm",
                    variant: "outline",
                  })} mt-4`}
                  href="/inscription"
                >
                  Let's Go !
                </Link>
              </div>
            </CardContent>
          </CardMove>
        </div>
      </div>
    </>
  );
}
