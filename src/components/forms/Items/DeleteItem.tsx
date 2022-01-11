import styled from "styled-components";

import { useEventListener } from "@src/hooks";
import {
  GetAllItemsDocument,
  useDeleteItemMutation,
} from "@graphql/generated/graphql";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";

export function DeleteItem(props: { id: string; title: string }) {
  const { id, title } = props;
  const [performMutation, { loading, error, data, called }] =
    useDeleteItemMutation();

  const DeleteItem = () =>
    performMutation({
      variables: { id },
      refetchQueries: [GetAllItemsDocument],
    });

  useEventListener("keydown", (event) => {
    if ((event as KeyboardEvent)?.key == "Enter") {
      DeleteItem();
    }
  });

  return (
    <Wrapper>
      <h3>Are you sure you want to delete this item?</h3>
      {loading && <LoadingSpinner />}
      {error && <ErrorResponse error={error} />}
      {called && data?.deleteItem?.item?.id && (
        <p>Successfully Deleted `{data?.deleteItem?.item?.title}`</p>
      )}
      {!called && <p>{title}</p>}
      <Button onClick={DeleteItem}>Delete</Button>
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
