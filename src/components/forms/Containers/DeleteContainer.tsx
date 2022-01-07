import styled from "styled-components";

import { useEventListener } from "@src/hooks";
import {
  GetAllContainersDocument,
  useDeleteContainerMutation,
} from "@graphql/generated/graphql";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";

export function DeleteContainer(props: { id: string; title: string }) {
  const { id, title } = props;
  const [performMutation, { loading, error, data, called }] =
    useDeleteContainerMutation();

  const deleteContainer = () =>
    performMutation({
      variables: { id },
      refetchQueries: [GetAllContainersDocument],
    });

  useEventListener("keydown", (event) => {
    if ((event as KeyboardEvent)?.key == "Enter") {
      deleteContainer();
    }
  });

  return (
    <Wrapper>
      <h3>Are you sure you want to delete this container?</h3>
      {loading && <LoadingSpinner />}
      {error && <ErrorResponse error={error} />}
      {called && data?.deleteContainer?.container?.id && (
        <p>Successfully Deleted `{data?.deleteContainer?.container?.title}`</p>
      )}
      {!called && <p>{title}</p>}
      <Button onClick={deleteContainer}>Delete</Button>
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
