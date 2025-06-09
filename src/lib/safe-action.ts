import { createSafeActionClient } from "next-safe-action";
import { getUser } from "./auth-session";

class SafeActionError extends Error {}

export const actionClient = createSafeActionClient({
  handleServerError: (error: Error) => {
    if (error instanceof SafeActionError) {
      return error.message;
    }

    return "Unexpected Error !";
  },
});

// Extended action client with user authentication
export const authAction = actionClient.use(async ({ next }) => {
  const user = await getUser();

  if (!user) {
    throw new SafeActionError("No user found.");
  }

  return next({ ctx: { user } });
});

// À quoi ça sert concrètement ?
// Cela permet d’écrire des actions sécurisées côté serveur, typées, avec :

// - Authentification automatique (userAction)
// - Gestion centralisée des erreurs (handleServerError)
// - Typage et validation fournis par next-safe-action
