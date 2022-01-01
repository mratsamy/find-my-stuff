import EmptyPrompt from "@src/components/emptyPrompt/EmptyPrompt";
import Loading from "@src/components/loading/Loading";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";
import Table from "@src/components/table/Table";
import { useGetAllShelvesQuery, Shelf } from "@graphql/generated/graphql";

const columns = [
  {
    Header: "Shelves",
    columns: [
      { Header: "Title", accessor: "title" },
      {
        Header: "Container",
        accessor: (row: Shelf) => row.container?.title ?? "",
      },
      {
        Header: "Number of Items",
        accessor: (row: Shelf) => row.items.length ?? 0,
      },
    ],
  },
];

export default function Shelves() {
  const { loading, error, data } = useGetAllShelvesQuery();

  if (loading) <Loading />;
  if (error) <ErrorResponse error={error} />;

  const shelves = (data?.shelves?.shelves ?? []) as Shelf[];
  return (
    <>
      <Table columns={columns} data={shelves} />
      <EmptyPrompt items={shelves} />
    </>
  );
}
