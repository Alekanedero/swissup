import { getUser } from "@/lib/auth-session";
import { LoggedInButton } from "./LoggedInButton";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export const AuthButton = async () => {
  const session = await getUser();

  if (!session) {
    return (
      <Link
        href={"/auth/signin"}
        className={buttonVariants({ size: "sm", variant: "outline" })}
      >
        <LogIn size={12} className="mr-2" />
        Signin
      </Link>
    );
  }

  return <LoggedInButton user={session} />;
};
