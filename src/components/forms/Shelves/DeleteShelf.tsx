import styled from "styled-components";

import { useEventListener } from "@src/hooks";
import {
  GetAllShelvesDocument,
  useDeleteShelfMutation,
} from "@graphql/generated/graphql";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";

export function DeleteShelf(props: { id: string; title: string }) {
  const { id, title } = props;
  const [performMutation, { loading, error, data, called }] =
    useDeleteShelfMutation();

  const DeleteShelf = () =>
    performMutation({
      variables: { id },
      refetchQueries: [GetAllShelvesDocument],
    });

  useEventListener("keydown", (event) => {
    if ((event as KeyboardEvent)?.key == "Enter") {
      DeleteShelf();
    }
  });

  return (
    <Wrapper>
      <h3>Are you sure you want to delete this shelf?</h3>
      {loading && <LoadingSpinner />}
      {error && <ErrorResponse error={error} />}
      {called && data?.deleteShelf?.shelf?.id && (
        <p>Successfully Deleted `{data?.deleteShelf?.shelf?.title}`</p>
      )}
      {!called && <p>{title}</p>}
      <Button onClick={DeleteShelf}>Delete</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 1em 2em;
  color: white;
  font-weight: 800;
  background-color: dodgerblue;
`;
