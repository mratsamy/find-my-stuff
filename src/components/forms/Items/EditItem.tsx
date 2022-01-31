import { useRef } from "react";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import styled from "styled-components";

import { StyledForm } from "@components/forms";
import { useEventListener } from "@src/hooks";
import {
  GetAllItemsDocument,
  useGetItemEditableQuery,
  useUpdateItemMutation,
} from "@graphql/generated/graphql";
import { ShelfSelector } from "@components/forms/Shelves/ShelfSelector";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";

type Props = {
  id: string;
};

export function EditItem({ id }: Props) {
  const formRef = useRef<
    React.Ref<
      FormikProps<{
        title: string;
        description: string;
        quantity: number;
        expiry: string;
      }>
    >
  >();

  useEventListener("keydown", (event) => {
    if ((event as KeyboardEvent)?.key == "Enter") {
      // @ts-ignore
      formRef.current?.handleSubmit?.();
    }
  });

  const { loading, error, data } = useGetItemEditableQuery({
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  const [
    performMutation,
    { error: mutationError, loading: mutationLoading, data: mutationData },
  ] = useUpdateItemMutation();

  const onSubmit = (values: {
    title: string;
    description: string;
    quantity: number;
    expiry: string;
  }) => {
    return performMutation({
      variables: { input: { id, ...values } },
      refetchQueries: [GetAllItemsDocument],
    });
  };

  if (loading || mutationLoading) {
    return (
      <WrapperLoading>
        <LoadingSpinner />
      </WrapperLoading>
    );
  }
  if (error) return <ErrorResponse error={error} />;
  if (mutationError) return <ErrorResponse error={mutationError} />;

  const initialValues = {
    title: data?.getItem?.item?.title ?? "",
    description: data?.getItem?.item?.description ?? "",
    quantity: data?.getItem?.item?.quantity ?? 0,
    expiry: data?.getItem?.item?.expiry ?? "",
    shelfId: data?.getItem?.item?.shelf?.id ?? "",
  };

  const validate = (values: {
    title?: string;
    description?: string;
    quantity?: number;
    expiry?: string;
  }) => {
    const errors: {
      title?: string;
      description?: string;
      quantity?: string;
      expiry?: string;
    } = {};

    if (!values.title) {
      errors.title = "Required";
    } else if (values.title.length < 2) {
      errors.title = "Required";
    }

    if (!values.quantity) {
      errors.quantity = "Required";
    } else if (Number(values.quantity) < 0) {
      errors.quantity = "Quantity cannot be less than 0";
    }

    if (!values.expiry) {
      errors.expiry = "Required";
    } else if (!isValidDate(values.expiry.toString())) {
      errors.expiry = "Invalid date value";
    }

    return errors;
  };

  return (
    <Formik
      innerRef={formRef.current}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ errors, touched }) => {
        const errorTitle = errors.title && touched.title ? "error" : "";
        const errorQuantity =
          errors.quantity && touched.quantity ? "error" : "";
        const errorExpiry = errors.expiry && touched.expiry ? "error" : "";
        const errorDescription =
          errors.description && touched.description ? "error" : "";

        return (
          <StyledForm>
            <CenteredItems>
              {loading && <LoadingSpinner />}
              {error && <div style={{ color: "red" }}>{error}</div>}
              {data && mutationData?.updateItem?.item?.id ? (
                <div>
                  Successfully Updated {mutationData.updateItem.item.title}
                </div>
              ) : null}
            </CenteredItems>
            <ErrorMessage name="title">
              {(error) => <div className="error">{error}</div>}
            </ErrorMessage>
            <Field
              className={errorTitle}
              name="title"
              placeholder="Title"
              type="text"
            />
            <ErrorMessage className="error" name="description" />
            <Field
              className={errorDescription}
              name="description"
              placeholder="Description"
              type="textarea"
            />
            <ErrorMessage className="error" name="quantity" />
            <Field
              className={errorQuantity}
              name="quantity"
              placeholder="quantity"
              type="number"
            />
            <ErrorMessage className="error" name="expiry" />
            <Field
              className={errorExpiry}
              name="expiry"
              placeholder="expiry"
              type="date"
            />
            <ShelfSelector />
            <button type="submit">Submit</button>
          </StyledForm>
        );
      }}
    </Formik>
  );
}

const WrapperLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenteredItems = styled.div`
  align-self: center;
`;

function isValidDate(input: string): boolean {
  const date = new Date(input);

  if (date.toString() == "Invalid Date") {
    return false;
  } else if (date.getFullYear() < new Date().getFullYear() - 3) {
    return false;
  }

  return true;
}
