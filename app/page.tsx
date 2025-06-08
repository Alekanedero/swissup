import { Layout } from "@/components/layout/layout";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="relative w-full h-[350px] md:h-[500px]">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <h1 className="w-full absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white text-xl md:text-3xl font-bold text-center px-4 max-w-4xl drop-shadow-md">
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

      <Layout className="mt-18">
        {/* --------- Qui somme-nous ? --------- */}
        <h2 className="text-xl font-bold underline">Qui somme-nous ?</h2>
        <div className="space-y-2 text-base text-justify leading-relaxed">
          <p>
            <span className="font-semibold">Notre équipe</span>, passionnée et
            expérimentée, s’engage à vos côtés pour transformer votre projet
            d’installation en Suisse en une{" "}
            <span className="font-semibold text-primary">
              expérience fluide, structurée et réussie
            </span>
            .
          </p>
          <p>
            Nous connaissons les réalités du terrain : les démarches
            administratives parfois complexes, les différences culturelles, les
            exigences du marché du travail suisse…
          </p>
          <p>
            C’est pourquoi nous mettons à votre service{" "}
            <span className="font-semibold">
              notre expertise, notre bienveillance et notre réseau
            </span>
            , afin de vous faire gagner du temps, d’éviter les erreurs
            courantes, et de maximiser vos chances de réussite.
          </p>
          <p>
            <span className="font-semibold text-primary">
              Avec nous, vous n’êtes plus seul
            </span>{" "}
            : chaque étape est préparée, chaque choix est guidé, chaque
            opportunité est facilitée.
          </p>
        </div>

        {/* --------- Notre mission --------- */}
        <h2 className="text-xl font-bold mt-4 underline">Notre mission :</h2>
        <div className="space-y-2 text-base text-justify leading-relaxed">
          <p>
            Vous offrir un accompagnement humain et sur-mesure pour réussir
            votre insertion professionnelle en Suisse.
          </p>
          <p>
            Trouver un emploi seul peut être long, complexe et décourageant,
            surtout sans connaître les codes du marché local.
          </p>
          <p>
            Grâce à notre expertise, nos conseils personnalisés et notre réseau
            de partenaires de confiance,{" "}
            <span className="font-semibold text-primary">
              vous gagnez en clarté, en efficacité, et surtout en résultats
            </span>
            .
          </p>
          <p>
            Nous vous aidons à franchir chaque étape plus sereinement et à{" "}
            <span className="font-semibold text-primary">
              accélérer votre accès à l’emploi
            </span>{" "}
            en Suisse.
          </p>
        </div>

        {/* --------- Comment on focntionne ? --------- */}
        <h2 className="text-xl font-bold underline mt-4">
          Comment on fonctionne ?
        </h2>
        <div className="space-y-2 text-base text-justify leading-relaxed">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Inscrivez-vous gratuitement via notre formulaire en ligne, en
              quelques clics.
            </li>
            <li>
              Un chargé d&rsquo;affaires examine votre dossier sous quelques
              heures (maximum 3 jours ouvrables).
            </li>
            <li>
              Vous êtes recontacté(e)par email ou WhatsApp pour un premier
              échange personnalisé.
            </li>
            <li>
              Profil validé ? Potentiel travail à la clé ! Vous choisissez votre
              pack, effectuez le paiement, et votre chargé d’affaires prend le
              relais pour tout gérer à vos côtés.
            </li>
          </ol>
        </div>
      </Layout>
    </>
  );
}
