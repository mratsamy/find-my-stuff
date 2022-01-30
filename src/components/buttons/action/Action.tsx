import { forwardRef } from "react";
import type { PropsWithChildren, MouseEvent } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

enum ACTION_TYPES {
  DELETE = "delete",
  EDIT = "edit",
  VIEW = "view",
  DEFAULT = "default",
}

type Props = PropsWithChildren<{
  type?: `${ACTION_TYPES}`;
  action?: (event: MouseEvent<HTMLButtonElement>) => void;
  href?: string;
}>;

const ActionButton = forwardRef((props: Props, ref) => {
  const router = useRouter();
  const { action, children, type, href } = props;
  const actionType = type ? type : ACTION_TYPES.DEFAULT;

  var onClick = action;
  if (href) {
    onClick = (event) => router.push(href);
  }

  return (
    <Button data-type={actionType} onClick={onClick}>
      {children}
    </Button>
  );
});

ActionButton.displayName = "ActionButton";

const Button = styled.button`
  color: white;
  cursor: pointer;
  padding: 0.5em 0.75em;
  margin: 0.25em 0.25em;
  background-color: gray;
  border: none;
  &:hover {
    opacity: 0.5;
  }

  &[data-type="delete"] {
    background-color: #dc3545;
  }

  &[data-type="edit"] {
    background-color: #198754;
  }

  &[data-type="view"] {
    background-color: dodgerblue;
  }
`;

export { ActionButton, ACTION_TYPES };
