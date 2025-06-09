-- CreateTable
CREATE TABLE "dossier_client" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "raison" TEXT NOT NULL,
    "typeJob" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dossier_client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dossier_client" ADD CONSTRAINT "dossier_client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
