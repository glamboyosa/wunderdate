-- CreateTable
CREATE TABLE "UsersOnApplication" (
    "userId" INTEGER NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsersOnApplication_pkey" PRIMARY KEY ("userId","applicationId")
);

-- AddForeignKey
ALTER TABLE "UsersOnApplication" ADD CONSTRAINT "UsersOnApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnApplication" ADD CONSTRAINT "UsersOnApplication_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
