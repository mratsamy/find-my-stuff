import { SkeletonBlock } from "skeleton-elements/react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1.5em;
  padding: 0 1.5em;
  min-height: max(60vh, 500px);
  background-color: #e8e8e8;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function Loading() {
  return (
    <Wrapper>
      <InnerWrapper>
        <SkeletonBlock
          tag="p"
          height="1.5em"
          borderRadius="0"
          effect="wave"
          width="30rem"
        />
        <SkeletonBlock
          tag="p"
          height="1.5em"
          borderRadius="0"
          effect="wave"
          width="20rem"
        />
        <SkeletonBlock
          tag="p"
          height="1.5em"
          borderRadius="0"
          effect="wave"
          width="15rem"
        />
        <SkeletonBlock
          tag="p"
          height="1.5em"
          borderRadius="0"
          effect="wave"
          width="25rem"
        />
        <SkeletonBlock
          tag="p"
          height="1.5em"
          borderRadius="0"
          effect="wave"
          width="30rem"
        />
      </InnerWrapper>
    </Wrapper>
  );
}
