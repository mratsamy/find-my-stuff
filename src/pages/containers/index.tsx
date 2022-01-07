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
import { ButtonRow } from "@src/components/buttons/buttonRow/ButtonRow";
import { AddContainer } from "@src/components/forms/Containers/AddContainer";
import { EditContainer } from "@src/components/forms/Containers/EditContainer";
import { DeleteContainer } from "@src/components/forms/Containers/DeleteContainer";

export default function Containers() {
  const { data, error, loading } = useGetAllContainersQuery();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const closedOnceModalRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (closedOnceModalRef.current == null) {
      closedOnceModalRef.current = true;
    }
  }, [showAddModal, showEditModal, showDeleteModal]);

  const columns = [
    {
      Header: "Containers",
      columns: [
        { Header: "Title", accessor: "title" },
        {
          Header: "Number of Shelves",
          accessor: (row: Container) => row.shelves.length ?? 0,
        },
        {
          Header: "Actions",
          accessor: (row: Container) => (
            <ButtonRow
              url="/containers/"
              row={row}
              setEditId={setEditId}
              setShowEditModal={setShowEditModal}
              setDeleteId={setDeleteId}
              setShowDeleteModal={setShowDeleteModal}
              setDeleteTitle={setDeleteTitle}
            />
          ),
        },
      ],
    },
  ];

  if (loading) return <Loading />;
  if (error) return <ErrorResponse error={error} />;

  const closeAddModal = () => setShowAddModal(false);
  const closeEditModal = () => setShowEditModal(false);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const containers = (data?.containers?.containers ?? []) as Container[];
  return (
    <>
      <StyledAddButton onClick={() => setShowAddModal(true)}>
        Add Container
      </StyledAddButton>
      <Table columns={columns} data={containers} />
      <EmptyPrompt items={containers} />
      <Modal
        title={<Title>Add a New Container</Title>}
        show={showAddModal}
        onClose={closeAddModal}
      >
        <AddContainer />
      </Modal>
      <Modal
        title={<Title>Edit Container</Title>}
        show={showEditModal}
        onClose={closeEditModal}
      >
        <EditContainer id={editId ?? ""} />
      </Modal>
      <Modal
        title={<Title>Delete Container</Title>}
        show={showDeleteModal}
        onClose={closeDeleteModal}
      >
        {" "}
        <DeleteContainer title={deleteTitle} id={deleteId ?? ""} />{" "}
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
