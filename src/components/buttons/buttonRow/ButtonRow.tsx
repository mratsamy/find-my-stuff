import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import {
  ActionButton,
  ACTION_TYPES,
} from "@src/components/buttons/action/Action";

export function ButtonRow<T extends { id: string; title?: string }>(props: {
  row: T;
  url: string;
  setEditId: Dispatch<SetStateAction<string | null>>;
  setShowEditModal: Dispatch<SetStateAction<boolean>>;
  setDeleteId: Dispatch<SetStateAction<string | null>>;
  setShowDeleteModal: Dispatch<SetStateAction<boolean>>;
  setDeleteTitle: Dispatch<SetStateAction<string>>;
}) {
  const {
    url,
    row: { id, title },
    setEditId,
    setShowEditModal,
    setDeleteId,
    setDeleteTitle,
    setShowDeleteModal,
  } = props;

  return (
    <>
      <Link href={`${url}${id}`} passHref={true}>
        <ActionButton type={ACTION_TYPES.VIEW}>View</ActionButton>
      </Link>
      <ActionButton
        type={ACTION_TYPES.EDIT}
        action={() => {
          setEditId(id);
          setShowEditModal(true);
        }}
      >
        Edit
      </ActionButton>
      <ActionButton
        type={ACTION_TYPES.DELETE}
        action={() => {
          setDeleteId(id);
          setDeleteTitle(title ?? "");
          setShowDeleteModal(true);
        }}
      >
        Delete
      </ActionButton>
    </>
  );
}
