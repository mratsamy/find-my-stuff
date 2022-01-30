import { Field } from "formik";

import { useGetContainersSelectorQuery } from "@graphql/generated/graphql";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";

type Props = { selected?: string; name?: string; defaultText?: string };

export function ContainerSelector({
  name = "containerId",
  defaultText = "Select Container",
}: Props) {
  const { error, loading, data } = useGetContainersSelectorQuery();

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (loading) return <LoadingSpinner />;

  const containers = [
    { id: "", title: defaultText },
    ...(data?.containers?.containers ?? []),
  ];

  return (
    <Field as="select" name={name}>
      {containers.map((container) => {
        return (
          <option key={container?.id} value={container?.id}>
            {container?.title}
          </option>
        );
      })}
    </Field>
  );
}
