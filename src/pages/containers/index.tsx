import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import {
  useGetAllContainersQuery,
  Container,
} from "@graphql/generated/graphql";
import Loading from "@src/components/loading/Loading";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";
import Table from "@src/components/table/Table";
import EmptyPrompt from "@src/components/emptyPrompt/EmptyPrompt";
import { Modal } from "@src/components/modal/Modal";
import { AddButton } from "@src/components/buttons/add/AddButton";
import { AddContainer } from "@src/components/forms/Containers/AddContainer";

export default function Containers() {
  const { data, error, loading, refetch } = useGetAllContainersQuery();
  const [showModal, setShowModal] = useState(false);
  const closedOnceModalRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (closedOnceModalRef.current == null) {
      closedOnceModalRef.current = true;
    } else {
      if (showModal == false) refetch();
    }
  }, [showModal, refetch]);

  const columns = [
    {
      Header: "Containers",
      columns: [
        { Header: "Title", accessor: "title" },
        {
          Header: "Number of Shelves",
          accessor: (row: Container) => row?.shelves?.length ?? 0,
        },
      ],
    },
  ];

  if (loading) return <Loading />;
  if (error) return <ErrorResponse error={error} />;

  const closeModal = () => setShowModal(false);

  const containers = (data?.containers?.containers ?? []) as Container[];
  return (
    <>
      <StyledAddButton onClick={() => setShowModal(true)}>
        Add Container
      </StyledAddButton>
      <Table columns={columns} data={containers} />
      <EmptyPrompt items={containers} />
      <Modal
        title={<Title>Add a New Container</Title>}
        show={showModal}
        onClose={closeModal}
      >
        <AddContainer />
      </Modal>
    </>
  );
}

const Title = styled.h1`
  align-self: center;
`;

const StyledAddButton = styled(AddButton)`
  align-self: flex-end;
  margin-top: ${30 / 16}rem;
  margin-right: ${35 / 16}rem;
`;
