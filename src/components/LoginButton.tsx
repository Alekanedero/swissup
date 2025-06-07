import { getUser } from "@/src/lib/auth-session";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogoutButton } from "./Logout";

export const LoginButton = async () => {
  const user = await getUser();

  return (
    <div className="px-4 py-2 flex items-center gap-2 z-1000">
      <div className="flex-1"></div>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm">{user.name || user.email}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/auth">Account</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <LogoutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          className={buttonVariants({ size: "sm", variant: "outline" })}
          href="/auth/signin"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};
