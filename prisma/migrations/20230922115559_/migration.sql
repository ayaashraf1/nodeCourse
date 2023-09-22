/*
  Warnings:

  - Changed the type of `name` on the `Update` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Update" ADD COLUMN     "status" "STATUS" NOT NULL DEFAULT 'INPROGRESS',
ALTER COLUMN "updatedAt" DROP NOT NULL,
DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;
