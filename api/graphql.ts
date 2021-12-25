import { ApolloServer, AuthenticationError } from "apollo-server-micro";
import cors from "micro-cors";

import { typeDefs } from "@graphql/schema";

const apolloServer = new ApolloServer({
  typeDefs,
  context({ req, res }) {
    const token = req.headers.authorization || "";
    // TODO: 1. check if a user exists with that token
    const user = true;

    if (!user) {
      throw new AuthenticationError("you must be logged in");

      // add the new user to the context
      return {
        user,
      };
    }
    // TODO: check the request here to see
  },
});
const startServer = apolloServer.start();

export default cors()(async function handler(request, response) {
  if (request.method == "OPTIONS") {
    response.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({
    path: "api/graphql",
  })(request, response);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
