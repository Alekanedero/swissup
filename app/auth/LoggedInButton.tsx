import { LogoutButton } from "./LogoutButton";

export const LoggedInButton = ({
  user,
}: {
  user: { name: string; email: string };
}) => {
  return (
    <>
      <button className="flex-1">
        {user.name} ({user.email})
      </button>
      <LogoutButton />
    </>
  );
};
