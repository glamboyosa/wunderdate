/*
  Warnings:

  - You are about to drop the `_ApplicationToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ApplicationToUser" DROP CONSTRAINT "_ApplicationToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ApplicationToUser" DROP CONSTRAINT "_ApplicationToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "applicationId" INTEGER;

-- DropTable
DROP TABLE "_ApplicationToUser";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE SET NULL ON UPDATE CASCADE;
