/*
  Warnings:

  - You are about to drop the `Emloyee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Emloyee";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_Name" TEXT NOT NULL,
    "last_Name" TEXT NOT NULL,
    "field" TEXT NOT NULL
);
