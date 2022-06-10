/*
  Warnings:

  - Added the required column `weight` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Emloyee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_Name" TEXT NOT NULL,
    "last_Name" TEXT NOT NULL,
    "field" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "field" TEXT,
    "weight" INTEGER NOT NULL
);
INSERT INTO "new_Skill" ("field", "id", "name") SELECT "field", "id", "name" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
