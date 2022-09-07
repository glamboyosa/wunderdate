/*
  Warnings:

  - You are about to drop the column `roleId` on the `Application` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[applicationId]` on the table `Position` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `positionId` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `applicationId` to the `Position` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_roleId_fkey";

-- DropIndex
DROP INDEX "Application_roleId_key";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "roleId",
ADD COLUMN     "positionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Position" ADD COLUMN     "applicationId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Position_applicationId_key" ON "Position"("applicationId");

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
