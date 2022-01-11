import type { GetServerSidePropsContext } from "next";
import styled from "styled-components";

import Back from "@components/buttons/back/Back";
import { client } from "@components/apolloClient/ApolloClient";
import {
  GetContainerDocument,
  GetContainerQueryResult,
  GetContainerQuery,
} from "@graphql/generated/graphql";
import {
  TextField,
  TextArea,
  TextDate,
  TextItems,
} from "@components/displayFields";

type Props = NonNullable<GetContainerQueryResult["data"]>["getContainer"];

export default function Container(props: Props) {
  const container = props?.container;

  return (
    <OuterWrapper>
      <Back />
      <ContentWrapper>
        <TextField fieldName="ID" value={container?.id ?? ""} />
        <TextField fieldName="Title" value={container?.title ?? ""} />
        <TextArea
          fieldName="Description"
          value={container?.description ?? ""}
        />
        <TextItems
          fieldName="Shelves"
          items={
            container?.shelves.map((shelf) => ({
              id: shelf?.id ?? "",
              value: shelf?.title ?? "",
            })) ?? []
          }
        />
        <TextDate fieldName="Created" value={container?.createdAt} />
        <TextDate fieldName="Last Updated" value={container?.updatedAt} />
      </ContentWrapper>
    </OuterWrapper>
  );
}

type Context = GetServerSidePropsContext<{ id: string }>;
export async function getServerSideProps(context: Context) {
  const { data } = await client.query<GetContainerQuery>({
    query: GetContainerDocument,
    variables: { id: context.params?.id },
  });

  return {
    props: {
      container: data.getContainer?.container,
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
