import { getUser } from "@/lib/auth-session";
import { LoggedInButton } from "./LoggedInButton";
import Link from "next/link";

export const AuthButton = async () => {
  const session = await getUser();

  if (!session) {
    return <Link href={"/auth/signin"}>Signin</Link>;
    // router.push("/auth/signin");
  }

  return <LoggedInButton user={session} />;
};
