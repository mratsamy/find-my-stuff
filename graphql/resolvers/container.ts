import type {
  MutationResolvers,
  QueryResolvers,
  Container,
} from "@graphql/generated/resolvers-types";
import type { Prisma } from "@prisma/client";
import type { Graphql } from "types/graphql";

export const Queries: NonNullable<QueryResolvers> = {
  async getContainer(_parent, { id }, { prisma }, _info) {
    const container = (await prisma.container.findUnique({
      where: { id },
      include: { shelves: true },
    })) as Container | null;

    return { container };
  },
  // @ts-ignore
  async containers(_parent, _args, { prisma }, _info) {
    const containers = await prisma.container.findMany({
      include: { shelves: true },
    });

    return { containers };
  },
};

export const Mutations: MutationResolvers = {
  async addContainer(_parent, { input }, { prisma }, _info) {
    const container = (await prisma.container.create({
      data: { ...(input as Prisma.ContainerCreateInput) },
    })) as Container | null;

    return { container };
  },
  async updateContainer(_parent, { input }, { prisma }, _info) {
    if (!input) return { container: null };

    const { id, ...data } = input;
    const container = (await prisma.container.update({
      data: { ...(data as Prisma.ContainerUpdateInput) },
      where: { id },
    })) as Container | null;

    return { container };
  },
};

export const TopLevelResolvers = {
  Container: {
    shelves(parent: { id: string }, _args: any, { prisma }: Graphql.Context) {
      return prisma.shelf.findMany({
        where: { containerId: parent.id },
      });
    },
  },
};
