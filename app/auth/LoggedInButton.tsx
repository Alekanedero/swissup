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
import { Loader, LogOut, User2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

export const LoggedInButton = ({
  user,
}: {
  user: { name: string; email: string };
}) => {
  const mutation = useMutation({
    mutationFn: async () => {
      signOut();
    },
  });
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
              <Button
                variant="destructive"
                onClick={() => {
                  mutation.mutate();
                }}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <Loader size={12} className="mr-2" />
                ) : (
                  <LogOut size={12} className="mr-2" />
                )}
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenu>
    </>
  );
};
