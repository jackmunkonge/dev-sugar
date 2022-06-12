/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Note";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "superCategoryId" TEXT,
    CONSTRAINT "Category_superCategoryId_fkey" FOREIGN KEY ("superCategoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "snapshot" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "LinkInCategory" (
    "linkId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reassignedAt" DATETIME NOT NULL,

    PRIMARY KEY ("linkId", "categoryId"),
    CONSTRAINT "LinkInCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LinkInCategory_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "submissionCount" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "UserSubmission" (
    "userId" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reassignedAt" DATETIME NOT NULL,

    PRIMARY KEY ("userId", "submissionId"),
    CONSTRAINT "UserSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserSubmission_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Password" (
    "hash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Password" ("hash", "userId") SELECT "hash", "userId" FROM "Password";
DROP TABLE "Password";
ALTER TABLE "new_Password" RENAME TO "Password";
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "firstNames" TEXT,
    "lastName" TEXT,
    "isMarketingConsented" BOOLEAN NOT NULL DEFAULT false,
    "requiredCookiesEnabled" BOOLEAN NOT NULL DEFAULT false,
    "optionalCookiesEnabled" BOOLEAN NOT NULL DEFAULT false,
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "superuser" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "updatedAt") SELECT "createdAt", "email", "id", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Category_superCategoryId_key" ON "Category"("superCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Link_title_key" ON "Link"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Link_url_key" ON "Link"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Link_description_key" ON "Link"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Submission_url_key" ON "Submission"("url");
