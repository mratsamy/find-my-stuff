import type {
  QueryGetItemArgs,
  MutationAddItemArgs,
} from "@graphql/generated/graphql";
import type { PrismaClient } from "@prisma/client";

export const Queries = {
  getItem(
    _parent: any,
    { id }: QueryGetItemArgs,
    { prisma }: { prisma: PrismaClient },
    _info: any
  ) {
    return {
      item: prisma.item.findUnique({ where: { id } }),
    };
  },
};

export const Mutations = {
  addItem(
    _parent: any,
    args: MutationAddItemArgs,
    { prisma }: { prisma: PrismaClient },
    _info: any
  ) {
    return {
      item: prisma.item.create({
        data: { ...args.input },
      }),
    };
  },
};
