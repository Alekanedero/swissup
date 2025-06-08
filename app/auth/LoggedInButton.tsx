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
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const LoggedInButton = ({
  user,
}: {
  user: { name: string; email: string };
}) => {
  return (
    <>
      <DropdownMenu>
        <AlertDialog>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {user.name || user.email}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/auth">
                <User2 size={12} className="mr-2" />
                Account
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <AlertDialogTrigger>
              <DropdownMenuItem asChild>
                <LogoutButton />
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to logout?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="secondary">Cancel</Button>
              </AlertDialogCancel>
              <LogoutButton />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenu>
    </>
  );
};
