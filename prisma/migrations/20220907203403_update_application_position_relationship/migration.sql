/*
  Warnings:

  - You are about to drop the column `applicationId` on the `Position` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roleId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_applicationId_fkey";

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "roleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Position" DROP COLUMN "applicationId";

-- CreateIndex
CREATE UNIQUE INDEX "Application_roleId_key" ON "Application"("roleId");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
