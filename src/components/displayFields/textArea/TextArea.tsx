import styled from "styled-components";

import { TitleSpan } from "@components/displayFields/sharedStyles";

type Props = { fieldName: string; value: string };

export function TextArea({ fieldName, value }: Props) {
  return (
    <Wrapper>
      <TitleSpan>{fieldName}</TitleSpan>
      <StyledTextArea rows={8} cols={35} defaultValue={value} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StyledTextArea = styled.textarea`
  margin-left: 1em;
  margin-right: -10em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
