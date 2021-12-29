import type {
  MutationResolvers,
  QueryResolvers,
} from "@graphql/generated/resolvers-types";
import type { Prisma } from "@prisma/client";

export const Queries: QueryResolvers = {
  async shelves(_parent, _args, { prisma }, _info) {
    const shelves = await prisma.shelf.findMany({ include: { items: true } });

    return {
      shelves: shelves,
    };
  },
  async getShelf(_parent, { id }, { prisma }, _info) {
    const shelf = await prisma.shelf.findUnique({
      where: { id },
      include: { items: true },
    });

    return { shelf };
  },
};

export const Mutations: MutationResolvers = {
  async addShelf(_parent, { input }, { prisma }, _info) {
    const shelf = await prisma.shelf.create({
      data: { ...(input as Prisma.ShelfCreateInput) },
      include: {
        items: true,
      },
    });

    return {
      shelf,
    };
  },

  async updateShelf(_parent, { input }, { prisma }, _info) {
    if (!input) return { shelf: null };
    const { id, ...data } = input;

    const shelf = await prisma.shelf.update({
      data: { ...(data as Prisma.ShelfUpdateInput) },
      where: { id },
      include: { items: true },
    });

    return { shelf };
  },
};
