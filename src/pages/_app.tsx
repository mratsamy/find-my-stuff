import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import styled from "styled-components";

import { client } from "@src/components/apolloClient/ApolloClient";
import { Nav } from "@components/nav/nav";
import { Jumbotron } from "@src/components/jumbotron/Jumbotron";

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Jumbotron />
      <Nav />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ApolloProvider>
  );
}

export default MyApp;
