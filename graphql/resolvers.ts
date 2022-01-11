import { GraphQLDateTime, GraphQLNonNegativeInt } from "graphql-scalars";

import {
  Queries as ItemQueries,
  Mutations as ItemMuatatations,
} from "./resolvers/item";

import {
  Queries as ContainerQueries,
  Mutations as ContainerMutations,
  TopLevelResolvers as ContainerTopLevelResolvers,
} from "./resolvers/container";

import {
  Queries as ShelfQueries,
  Mutations as ShelfMutations,
  TopLevelResolvers as ShelfTopLevelResolvers,
} from "./resolvers/shelf";

const resolvers = {
  DateTime: GraphQLDateTime,
  NonNegativeInt: GraphQLNonNegativeInt,
  ...ContainerTopLevelResolvers,
  ...ShelfTopLevelResolvers,
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
