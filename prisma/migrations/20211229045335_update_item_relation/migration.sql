-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_shelfId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "shelfId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE SET NULL ON UPDATE CASCADE;
