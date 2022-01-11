import styled from "styled-components";

import { Wrapper, TitleSpan, TextSpan } from "../sharedStyles";

type Props = { fieldName: string; items: { id: string; value: string }[] };

export function TextItems({ fieldName, items }: Props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <TitleSpan>{fieldName}</TitleSpan>
        <ItemsWrapper>
          {items.map(({ id, value }) => (
            <TextSpan key={id}>{value}</TextSpan>
          ))}
        </ItemsWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ItemsWrapper = styled.div`
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  margin-left: 1em;
  min-height: 1.5em;
  min-width: 18em;
`;
