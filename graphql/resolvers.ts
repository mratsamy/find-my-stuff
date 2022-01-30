import {
  GraphQLDateTime,
  GraphQLNonNegativeInt,
  GraphQLDate,
} from "graphql-scalars";

import {
  Queries as ItemQueries,
  Mutations as ItemMuatatations,
  TopLevelResolvers as ItemTopLevelResolvers,
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
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  NonNegativeInt: GraphQLNonNegativeInt,
  ...ContainerTopLevelResolvers,
  ...ShelfTopLevelResolvers,
  ...ItemTopLevelResolvers,
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
