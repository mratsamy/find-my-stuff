import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { Nav } from "@components/nav/nav";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  });

  return (
    <ApolloProvider client={client}>
      <Nav />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
