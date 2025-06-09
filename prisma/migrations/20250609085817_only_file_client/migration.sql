/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `dossier_client` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "dossier_client_userId_key" ON "dossier_client"("userId");
