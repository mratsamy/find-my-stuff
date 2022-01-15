import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

import EmptyPrompt from "@src/components/emptyPrompt/EmptyPrompt";
import Loading from "@src/components/loading/Loading";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";
import Table from "@src/components/table/Table";
import { useGetAllShelvesQuery, Shelf } from "@graphql/generated/graphql";
import { AddButton } from "@src/components/buttons/add/AddButton";
import { Modal } from "@src/components/modal/Modal";
import { useNextQueryParam } from "@src/hooks";
import { ButtonRow } from "@src/components/buttons/buttonRow/ButtonRow";
import { AddShelf } from "@src/components/forms/Shelves/AddShelf";
import { EditShelf } from "@src/components/forms/Shelves/EditShelf";
import { DeleteShelf } from "@src/components/forms/Shelves/DeleteShelf";

export default function Shelves() {
  const defaultEditId = useNextQueryParam("edit");
  const { loading, error, data } = useGetAllShelvesQuery();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(defaultEditId !== null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const closedOnceModalRef = useRef<boolean | null>(null);
  const [editId, setEditId] = useState<string | null>(defaultEditId);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteTitle, setDeleteTitle] = useState("");

  useEffect(() => {
    if (closedOnceModalRef.current == null) {
      closedOnceModalRef.current = true;
    }
  }, [showAddModal, showEditModal, showDeleteModal]);

  const columns = [
    {
      Header: "Shelves",
      columns: [
        { Header: "Title", accessor: "title" },
        {
          Header: "Number of Items",
          accessor: (row: Shelf) => row.items.length ?? 0,
        },
        {
          Header: "Actions",
          accessor: (row: Shelf) => (
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

  if (loading) <Loading />;
  if (error) <ErrorResponse error={error} />;

  const closeAddModal = () => setShowAddModal(false);
  const closeEditModal = () => setShowEditModal(false);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const shelves = (data?.shelves?.shelves ?? []) as Shelf[];

  return (
    <>
      <StyledAddButton onClick={() => setShowAddModal(true)}>
        Add Shelf
      </StyledAddButton>
      <Table columns={columns} data={shelves} />
      <EmptyPrompt items={shelves} />
      <Modal
        title={<Title>Add a New Shelf</Title>}
        show={showAddModal}
        onClose={closeAddModal}
      >
        <AddShelf />
      </Modal>
      <Modal
        title={<Title>Edit Shelf</Title>}
        show={showEditModal}
        onClose={closeEditModal}
      >
        <EditShelf id={editId ?? ""} />
      </Modal>
      <Modal
        title={<Title>Delete Shelf</Title>}
        show={showDeleteModal}
        onClose={closeDeleteModal}
      >
        {" "}
        <DeleteShelf title={deleteTitle} id={deleteId ?? ""} />{" "}
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
