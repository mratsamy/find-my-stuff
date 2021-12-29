import { GraphQLDateTime, GraphQLNonNegativeInt } from "graphql-scalars";
const path = require("path");

import {
  Queries as ItemQueries,
  Mutations as ItemMuatatations,
} from "./resolvers/item";

const resolvers = {
  DateTime: GraphQLDateTime,
  NonNegativeInt: GraphQLNonNegativeInt,
  Query: {
    ...ItemQueries,
  },
  Mutation: {
    ...ItemMuatatations,
  },
};

export default resolvers;
