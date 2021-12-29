import { ApolloServer, Config } from "apollo-server-micro";
import Cors from "micro-cors";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import typeDefs from "@graphql/typeDefs";
import resolvers from "@graphql/resolvers";
import { createContext } from "@graphql/context";

const cors = Cors();

const apolloConfig: Config<any> = {
  typeDefs,
  resolvers,
  plugins: [],
  context: createContext,
};

if (process.env.NODE_ENV == "development" && apolloConfig.plugins) {
  apolloConfig.plugins.push(ApolloServerPluginLandingPageGraphQLPlayground);
}

const apolloServer = new ApolloServer(apolloConfig);

const startServer = apolloServer.start();

async function handler(req: any, res: any) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export default cors(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
