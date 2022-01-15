import { gql } from "apollo-server-micro";
const path = require("path");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

const typesArray = loadFilesSync(
  path.join(process.env.PWD, "./graphql/types"),
  {
    extensions: ["graphql"],
  }
);

const customScalars = gql`
  scalar Date
  scalar DateTime
  scalar NonNegativeInt
`;

export default mergeTypeDefs([customScalars, ...typesArray]);
