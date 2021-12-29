import { GraphQLDateTime, GraphQLNonNegativeInt } from "graphql-scalars";

import {
  Queries as ItemQueries,
  Mutations as ItemMuatatations,
} from "./resolvers/item";

import {
  Queries as ContainerQueries,
  Mutations as ContainerMutations,
} from "./resolvers/container";

import {
  Queries as ShelfQueries,
  Mutations as ShelfMutations,
} from "./resolvers/shelf";

const resolvers = {
  DateTime: GraphQLDateTime,
  NonNegativeInt: GraphQLNonNegativeInt,
  Query: {
    ...ItemQueries,
    ...ContainerQueries,
    ...ShelfQueries,
  },
  Mutation: {
    ...ItemMuatatations,
    ...ContainerMutations,
    ...ShelfMutations,
  },
};

export default resolvers;
