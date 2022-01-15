import type { GetServerSidePropsContext } from "next";
import styled from "styled-components";
import Link from "next/link";

import Back from "@components/buttons/back/Back";
import { client } from "@components/apolloClient/ApolloClient";
import {
  GetShelfDocument,
  GetShelfQueryResult,
  GetShelfQuery,
} from "@graphql/generated/graphql";
import {
  TextField,
  TextArea,
  TextDate,
  TextItems,
} from "@components/displayFields";

type Props = NonNullable<GetShelfQueryResult["data"]>["getShelf"];

export default function Shelf(props: Props) {
  const shelf = props?.shelf;

  return (
    <OuterWrapper>
      <LinksWrapper>
        <Back />
        <Link
          href={{
            pathname: "/containers",
            query: { edit: shelf?.id ?? "" },
          }}
        >
          <a>Edit Container</a>
        </Link>
      </LinksWrapper>
      <ContentWrapper>
        <TextField fieldName="ID" value={shelf?.id ?? ""} />
        <TextField fieldName="Title" value={shelf?.title ?? ""} />
        <TextArea fieldName="Description" value={shelf?.description ?? ""} />
        <TextItems
          fieldName="Shelves"
          items={
            shelf?.items.map((item) => ({
              id: item?.id ?? "",
              value: item?.title ?? "",
            })) ?? []
          }
        />
        <TextDate fieldName="Created" value={shelf?.createdAt} />
        <TextDate fieldName="Last Updated" value={shelf?.updatedAt} />
      </ContentWrapper>
    </OuterWrapper>
  );
}

type Context = GetServerSidePropsContext<{ id: string }>;
export async function getServerSideProps(context: Context) {
  const { data } = await client.query<GetShelfQuery>({
    query: GetShelfDocument,
    variables: { id: context.params?.id },
  });

  return {
    props: {
      container: data.getShelf?.shelf,
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
