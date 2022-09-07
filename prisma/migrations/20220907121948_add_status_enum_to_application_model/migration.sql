-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'accepted', 'rejected');

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'pending';
