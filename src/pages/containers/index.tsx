import {
  useGetAllContainersQuery,
  Container,
} from "@graphql/generated/graphql";
import Loading from "@src/components/loading/Loading";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";
import Table from "@src/components/table/Table";
import EmptyPrompt from "@src/components/emptyPrompt/EmptyPrompt";

export default function Containers() {
  const { data, error, loading } = useGetAllContainersQuery();

  const columns = [
    {
      Header: "Containers",
      columns: [
        { Header: "Title", accessor: "title" },
        {
          Header: "Number of Shelves",
          accessor: (row: Container) => row?.shelves?.length ?? 0,
        },
      ],
    },
  ];

  if (loading) return <Loading />;
  if (error) return <ErrorResponse error={error} />;

  const containers = (data?.containers?.containers ?? []) as Container[];
  return (
    <>
      <Table columns={columns} data={containers} />
      <EmptyPrompt items={containers} />
    </>
  );
}
