import type {
  MutationResolvers,
  QueryResolvers,
} from "@graphql/generated/resolvers-types";
import type { Prisma } from "@prisma/client";

export const Queries: QueryResolvers = {
  async items(_parent, _args, { prisma }, _info) {
    const items = await prisma.item.findMany();

    return {
      items,
    };
  },
  async getItem(_parent, { id }, { prisma }, _info) {
    const item = await prisma.item.findUnique({ where: { id } });
    return {
      item,
    };
  },
};

export const Mutations: MutationResolvers = {
  async addItem(_parent, args, { prisma }, _info) {
    const item = await prisma.item.create({
      data: { ...args.input },
    });

    return {
      item,
    };
  },
  async updateItem(_parent, { input: { id, ...data } }, { prisma }, _info) {
    if (!Object.keys(data).length) return { item: null };

    const item = await prisma.item.update({
      data: { ...(data as Prisma.ItemUpdateInput) },
      where: { id },
    });

    return {
      item,
    };
  },
};
