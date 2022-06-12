/*
  Warnings:

  - You are about to drop the column `firstNames` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "isMarketingConsented" BOOLEAN NOT NULL DEFAULT false,
    "requiredCookiesEnabled" BOOLEAN NOT NULL DEFAULT false,
    "optionalCookiesEnabled" BOOLEAN NOT NULL DEFAULT false,
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "superuser" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("banned", "createdAt", "email", "id", "isMarketingConsented", "optionalCookiesEnabled", "requiredCookiesEnabled", "superuser", "updatedAt") SELECT "banned", "createdAt", "email", "id", "isMarketingConsented", "optionalCookiesEnabled", "requiredCookiesEnabled", "superuser", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
