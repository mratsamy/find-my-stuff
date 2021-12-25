import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Container {
    id: String
    title: String
    description: String
    items: [Item]
  }

  type Item {
    id: String
    title: String
    description: String
    parentContainer: Item
  }

  type Query {
    containers: [Container]!
  }
`;
