import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import type { UseTableOptions } from "react-table";

import { useGetAllItemsQuery } from "@graphql/generated/graphql";
import { useNextQueryParam } from "@src/hooks";
import Loading from "@src/components/loading/Loading";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";
import Table from "@src/components/table/Table";
import EmptyPrompt from "@src/components/emptyPrompt/EmptyPrompt";
import { Modal } from "@src/components/modal/Modal";
import { AddButton } from "@src/components/buttons/add/AddButton";
import { ButtonRow } from "@src/components/buttons/buttonRow/ButtonRow";
import { AddItem } from "@src/components/forms/Items/AddItem";
import { EditItem } from "@src/components/forms/Items/EditItem";
import { DeleteItem } from "@src/components/forms/Items/DeleteItem";
import { formatDate } from "@src/components/displayFields/textDate/TextDate";

type ItemRow = {
  id: string;
  title?: string;
  expiry?: string;
  shelf?: {
    title?: string;
    container?: {
      title?: string;
    };
  };
};

export default function Items() {
  const defaultEditId = useNextQueryParam("edit");
  const { error, loading, data } = useGetAllItemsQuery();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(defaultEditId !== null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [editId, setEditId] = useState<string | null>(defaultEditId);
  const closedOnceModalRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (closedOnceModalRef.current == null) {
      closedOnceModalRef.current = true;
    }
  }, [showAddModal, showEditModal, showDeleteModal]);

  const columns: UseTableOptions<object>["columns"] = [
    {
      Header: "Items",
      columns: [
        { Header: "Title", accessor: "title" },
        { Header: "Quanity", accessor: "quantity" },
        {
          Header: "Shelf",
          accessor: (row) => <>{(row as ItemRow).shelf?.title ?? ""}</>,
        },
        {
          Header: "Container",
          accessor: (row) => (
            <>{(row as ItemRow)?.shelf?.container?.title ?? ""}</>
          ),
        },
        {
          Header: "Expiration Date",
          accessor: (row) => (
            <>{formatDate((row as ItemRow)?.expiry ?? "", true, true)}</>
          ),
        },
        {
          Header: "Actions",
          accessor: (row) => (
            <ButtonRow
              url="/items/"
              row={{
                id: (row as ItemRow)?.id ?? "",
                title: (row as ItemRow)?.title,
              }}
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

  const items = data?.items?.items ?? [];
  return (
    <>
      <StyledAddButton onClick={() => setShowAddModal(true)}>
        Add Item
      </StyledAddButton>
      <Table columns={columns} data={items as object[]} />
      <EmptyPrompt items={items} />
      <Modal
        title={<Title>Add a New Item</Title>}
        show={showAddModal}
        onClose={closeAddModal}
      >
        <AddItem />
      </Modal>
      <Modal
        title={<Title>Edit Item</Title>}
        show={showEditModal}
        onClose={closeEditModal}
      >
        <EditItem id={editId ?? ""} />
      </Modal>
      <Modal
        title={<Title>Delete Item</Title>}
        show={showDeleteModal}
        onClose={closeDeleteModal}
      >
        {" "}
        <DeleteItem title={deleteTitle} id={deleteId ?? ""} />{" "}
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
