import type { ApolloError } from "@apollo/client";
import styled from "styled-components";

type Props = {
  error: ApolloError;
};

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 3rem;
  align-items: center;
  justify-content: center;
`;

const ErrorName = styled.span`
  font-weight: 800;
`;

const ErrorMessage = styled.span`
  font-style: italic;
`;

function ErrorResponse(props: Props) {
  const {
    error: { message, name },
  } = props;

  return (
    <Wrapper>
      <p>An error occurred while attempted to fetch data.</p>
      <p>
        <ErrorName>{name}</ErrorName>
        <ErrorMessage>{message}</ErrorMessage>
      </p>
    </Wrapper>
  );
}

export default ErrorResponse;
