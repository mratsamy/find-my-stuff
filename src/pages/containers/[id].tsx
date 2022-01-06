import { useRouter } from "next/router";
import type { GetServerSidePropsContext } from "next";
import styled from "styled-components";

import Back from "@components/buttons/back/Back";

type Props = {
  id: string;
};

export default function Container(props: Props) {
  const {
    query: { id },
  } = useRouter();

  return (
    <OuterWrapper>
      <Back />
      <ContentWrapper>
        <p>Im the single container</p>
        <p>{id}</p>
      </ContentWrapper>
    </OuterWrapper>
  );
}

type Context = GetServerSidePropsContext<{ id: string }>;
export async function getServerSideProps(context: Context) {
  // TODO: make a query & then assign props
  return {
    props: {}, // will be passed to the page component as props
  };
}

const OuterWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  align-self: center;
`;
