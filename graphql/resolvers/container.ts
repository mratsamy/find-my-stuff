import type {
  MutationResolvers,
  QueryResolvers,
} from "@graphql/generated/resolvers-types";
import type { Prisma } from "@prisma/client";

export const Queries: QueryResolvers = {
  async getContainer(_parent, { id }, { prisma }, _info) {
    const container = await prisma.container.findUnique({ where: { id } });

    return { container };
  },
  async containers(_parent, _args, { prisma }, _info) {
    const containers = await prisma.container.findMany();

    return { containers };
  },
};

export const Mutations: MutationResolvers = {
  async addContainer(_parent, { input }, { prisma }, _info) {
    const container = await prisma.container.create({
      data: { ...(input as Prisma.ContainerCreateInput) },
    });

    return { container };
  },
  async updateContainer(_parent, { input }, { prisma }, _info) {
    if (!input) return { container: null };

    const { id, ...data } = input;
    const container = await prisma.container.update({
      data: { ...(data as Prisma.ContainerUpdateInput) },
      where: { id },
    });

    return { container };
  },
};
