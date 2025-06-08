import { getUser } from "@/lib/auth-session";
import { LoggedInButton } from "./LoggedInButton";
import { useRouter } from "next/navigation";

export const AuthButton = async () => {
  const session = await getUser();
  const router = useRouter();

  if (!session) {
    return router.push("/auth/signin");
  }

  return <LoggedInButton user={session} />;
};
