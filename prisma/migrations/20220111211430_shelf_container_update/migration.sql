-- DropForeignKey
ALTER TABLE "Shelf" DROP CONSTRAINT "Shelf_containerId_fkey";

-- AlterTable
ALTER TABLE "Shelf" ALTER COLUMN "containerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Shelf" ADD CONSTRAINT "Shelf_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container"("id") ON DELETE SET NULL ON UPDATE CASCADE;
