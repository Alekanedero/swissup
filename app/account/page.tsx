import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRequiredUser } from "@/lib/auth-session";
import { UserPen, Wallet } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const PaypalButton = () => {
  return (
    <Link
      href="https://www.paypal.me/ACompin/1"
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonVariants({
        size: "sm",
        variant: "outline",
      })} mt-4`}
    >
      Payer 1€ avec PayPal
    </Link>
  );
};

export default async function AuthPage() {
  const user = await getRequiredUser();

  return (
    <div className="flex flex-col gap-4 max-w-[900px] w-full mx-auto px-2">
      <p className="text-xl text-center mt-20 mb-10">
        Bienvenue sur votre compte {user.name} !
      </p>
      <div className="flex flex-col gap-4 m-8">
        <Card className="flex flex-1">
          <CardHeader className="justify-center align-center">
            <div className="m-auto">
              <UserPen />
            </div>
            <CardTitle>
              <p>Inscription gratuite</p>
            </CardTitle>
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfk0EAvwcrEUGCgEv3Rl7ZGVsNYl6kOIG3jadc2VpBIzS7ZQ/viewform?usp=dialog"
              >
                Let&apos;s Go !
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="justify-center align-center">
            <div className="m-auto">
              <Wallet />
            </div>
            <CardTitle>
              <p>Paiement</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center gap-4">
            <p className="text-neutral-700 text-md text-center">
              Le montant de la prestation s’élève à 650 CHF.
            </p>
            <PaypalButton />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
