import {
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  MouseEvent,
  ReactNode,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { useEventListener } from "@src/hooks";

type Title = Omit<ReactNode, "ReactPortal">;
type Props = PropsWithChildren<{
  show: boolean;
  onClose?: () => void;
  title?: Title;
  elementQueryString?: string;
}>;

export function Modal({
  onClose,
  show,
  title,
  children,
  elementQueryString = "#modal-root",
}: Props) {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalRef = useRef<HTMLElement>();
  const queryStringRef = useRef(elementQueryString);

  useEffect(() => {
    setIsBrowser(true);
    modalRef.current =
      document.querySelector<HTMLElement>(queryStringRef.current) ?? undefined;
  }, []);

  function handleCloseClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    onClose?.();
  }

  useEventListener("keydown", (event) => {
    if ((event as KeyboardEvent)?.key == "Escape") {
      event.preventDefault();
      onClose?.();
    }
  });

  const ModalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledHeader>
          <Anchor href="#" onClick={handleCloseClick}>
            x
          </Anchor>
        </StyledHeader>
        {title && <StyledTitle>{title}</StyledTitle>}
        <StyledBody>{children}</StyledBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  // make sure that we're in the browser & that we have a target to mount
  if (!isBrowser || !modalRef.current) return null;

  return createPortal(ModalContent, modalRef.current);
}

const StyledModalOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  background: white;
  min-width: 500px;
  min-height: 400px;
  border-radius: ${6 / 16}rem;
  padding: 1rem;
`;

const StyledHeader = styled.div`
  display: flex;
  font-size: ${25 / 16}rem;
  justify-content: flex-end;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledBody = styled.div`
  padding-top: 1em;
`;

const Anchor = styled.a`
  text-decoration: none;
  margin-right: ${10 / 16}rem;

  &:hover {
    color: deeppink;
  }
`;
