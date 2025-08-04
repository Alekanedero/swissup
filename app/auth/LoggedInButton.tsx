import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "./LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const LoggedInButton = ({
  user,
}: {
  user: { name: string; email: string; image: string };
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size="sm">
          <Avatar className="h-5 w-5 ">
            <AvatarFallback>{user.email?.[0]}</AvatarFallback>
            {user.image && (
              <AvatarImage src={user.image} alt={user.email ?? ""} />
            )}
          </Avatar>
          {user.name || user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/account">
            <User2 size={12} className="mr-2" />
            Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
