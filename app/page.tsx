import { getUser } from "@/lib/auth-session";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <div className="relative w-full h-[350px] md:h-[500px]">
        {/* Dégradé subtil en bas de l'image */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <h1 className="w-full absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white text-xl md:text-3xl font-bold text-center px-4 max-w-4xl drop-shadow-md">
          Nous sommes là pour rendre votre installation en Suisse simple et
          sereine.
        </h1>
        <Image
          src="/images/1.jpg"
          alt="Bannière de la page d'accueil"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto my-8 px-4 "></div>
    </div>
  );
}
