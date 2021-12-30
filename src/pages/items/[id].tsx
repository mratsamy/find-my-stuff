import { useRouter } from "next/router";

import { useGetItemByIdQuery } from "@graphql/generated/graphql";
import ClientOnly from "@src/components/clientOnly/ClientOnly";
import Loading from "@src/components/Loading/Loading";
import ErrorResponse from "@src/components/ErrorResponse/ErrorResponse";
import Back from "@src/components/buttons/back/Back";

function Item() {
  const route = useRouter();
  var { id = "" } = route.query;

  if (Array.isArray(id)) {
    id = id[0];
  }

  const { loading, error, data } = useGetItemByIdQuery({
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Loading />;
  if (error) return <ErrorResponse error={error} />;

  return (
    <div>
      <Back />
      {JSON.stringify(data)}
    </div>
  );
}

const Component = () => (
  <ClientOnly>
    <Item />
  </ClientOnly>
);

export default Component;
