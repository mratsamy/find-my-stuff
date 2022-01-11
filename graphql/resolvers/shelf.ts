import type {
  MutationResolvers,
  QueryResolvers,
  Shelf,
} from "@graphql/generated/resolvers-types";
import type { Prisma } from "@prisma/client";
import type { Graphql } from "types/graphql";

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

  async deleteShelf(_parent, { id }, { prisma }, _info) {
    if (!id) return { shelf: null };

    const shelf = (await prisma.shelf.delete({
      where: { id },
    })) as unknown as Shelf;

    return { shelf };
  },

  async updateShelf(_parent, { input }, { prisma }, _info) {
    if (!input) return { shelf: null };
    const { id, ...data } = input;
    prisma.item;

    const shelf = await prisma.shelf.update({
      data: { ...(data as Prisma.ShelfUpdateInput) },
      where: { id },
      include: { items: true },
    });

    return { shelf };
  },
};

export const TopLevelResolvers = {
  Shelf: {
    items(parent: { id: string }, _args: any, { prisma }: Graphql.Context) {
      return prisma.item.findMany({
        where: { shelfId: parent.id },
      });
    },
  },
};
