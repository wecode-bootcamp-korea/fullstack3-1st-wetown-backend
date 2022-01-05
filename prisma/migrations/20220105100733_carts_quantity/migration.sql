/*
  Warnings:

  - Added the required column `quantity` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Made the column `created_at` on table `carts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `carts` ADD COLUMN `quantity` INTEGER NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
