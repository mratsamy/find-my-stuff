import type { UseTableOptions } from "react-table";

import { useGetAllItemsQuery } from "@graphql/generated/graphql";
import Loading from "@src/components/loading/Loading";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";
import Table from "@src/components/table/Table";
import EmptyPrompt from "@src/components/emptyPrompt/EmptyPrompt";

export default function Items() {
  const { error, loading, data } = useGetAllItemsQuery();

  const columns: UseTableOptions<object>["columns"] = [
    {
      Header: "Items",
      columns: [
        { Header: "Title", accessor: "title" },
        { Header: "Quanity", accessor: "quantity" },
        { Header: "Expiration Date", accessor: "expiry" },
      ],
    },
  ];

  if (loading) return <Loading />;
  if (error) return <ErrorResponse error={error} />;

  const items = data?.items?.items ?? [];
  return (
    <>
      <Table columns={columns} data={items as object[]} />
      <EmptyPrompt items={items} />
    </>
  );
}
