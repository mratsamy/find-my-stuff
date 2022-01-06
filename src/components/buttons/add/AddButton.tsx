import type { PropsWithChildren, MouseEvent } from "react";
import styled from "styled-components";

type Props = PropsWithChildren<{
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}>;

export function AddButton({ children, disabled, onClick, ...props }: Props) {
  return (
    <Button {...props} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  color: white;
  cursor: pointer;
  background-color: dodgerblue;
  border: none;
  padding: 1rem 1.75rem;
  font-size: 1rem;

  &:hover {
    opacity: 0.5;
  }
`;
