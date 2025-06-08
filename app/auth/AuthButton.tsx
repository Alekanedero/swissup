import { getUser } from "@/lib/auth-session";
import { SignInButton } from "./SignInButton";
import { LoggedInButton } from "./LoggedInButton";

// export type AuthButtonProps = {};

// export const AuthButton = async (props: AuthButtonProps) => {

export const AuthButton = async () => {
  const session = await getUser();

  if (!session) {
    return <SignInButton />;
  }

  return <LoggedInButton user={session} />;
};
