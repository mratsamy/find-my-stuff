import type { GetServerSidePropsContext } from "next";
import styled from "styled-components";
import Link from "next/link";

import Back from "@components/buttons/back/Back";
import { client } from "@components/apolloClient/ApolloClient";
import {
  GetItemDocument,
  GetItemQueryResult,
  GetItemQuery,
} from "@graphql/generated/graphql";
import { TextField, TextArea, TextDate } from "@components/displayFields";

type Props = NonNullable<GetItemQueryResult["data"]>["getItem"];

export default function Item(props: Props) {
  const item = props?.item;

  return (
    <OuterWrapper>
      <LinksWrapper>
        <Back />
        <Link
          href={{
            pathname: "/items",
            query: { edit: item?.id ?? "" },
          }}
        >
          <a>Edit Item</a>
        </Link>
      </LinksWrapper>
      <ContentWrapper>
        <TextField fieldName="ID" value={item?.id ?? ""} />
        <TextField fieldName="Title" value={item?.title ?? ""} />
        <TextArea fieldName="Description" value={item?.description ?? ""} />
        <TextField fieldName="Quantity" value={item?.quantity ?? ""} />
        <TextDate fieldName="Expiration Date" value={item?.expiry} />
        <TextDate fieldName="Created" value={item?.createdAt} />
        <TextDate fieldName="Last Updated" value={item?.updatedAt} />
      </ContentWrapper>
    </OuterWrapper>
  );
}

type Context = GetServerSidePropsContext<{ id: string }>;
export async function getServerSideProps(context: Context) {
  const { data } = await client.query<GetItemQuery>({
    query: GetItemDocument,
    variables: { id: context.params?.id },
  });

  return {
    props: {
      item: data.getItem?.item,
    },
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

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  a {
    color: dodgerblue;
    cursor: pointer;
    padding: 1em;
  }
`;
