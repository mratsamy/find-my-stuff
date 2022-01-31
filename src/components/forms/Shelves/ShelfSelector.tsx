import { Field } from "formik";

import { useGetShelvesSelectorQuery } from "@graphql/generated/graphql";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";

type Props = { selected?: string; name?: string; defaultText?: string };

export function ShelfSelector({
  name = "shelfId",
  defaultText = "Select a Shelf",
}: Props) {
  const { error, loading, data } = useGetShelvesSelectorQuery();

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (loading) return <LoadingSpinner />;

  const shelves = [
    { id: "", title: defaultText },
    ...(data?.shelves?.shelves ?? []),
  ];

  return (
    <Field as="select" name={name}>
      {shelves.map((shelf) => {
        return (
          <option key={shelf?.id} value={shelf?.id}>
            {shelf?.title}
          </option>
        );
      })}
    </Field>
  );
}
