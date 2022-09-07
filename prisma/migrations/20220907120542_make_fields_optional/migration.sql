-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_applicationId_fkey";

-- AlterTable
ALTER TABLE "Application" ALTER COLUMN "message" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Position" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "applicationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE SET NULL ON UPDATE CASCADE;
