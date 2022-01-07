import type { PropsWithChildren, MouseEvent, HTMLAttributes } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export enum ACTION_TYPES {
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

export function ActionButton(props: Props) {
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
}

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
    background-color: red;
  }

  &[data-type="edit"] {
    background-color: green;
  }

  &[data-type="view"] {
    background-color: dodgerblue;
  }
`;