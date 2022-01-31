import { useRef } from "react";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import styled from "styled-components";

import { StyledForm } from "@components/forms";
import { useEventListener } from "@src/hooks";
import {
  GetAllItemsDocument,
  useAddItemMutation,
} from "@graphql/generated/graphql";
import { ShelfSelector } from "@components/forms/Shelves/ShelfSelector";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";

export function AddItem() {
  const formRef = useRef<
    React.Ref<
      FormikProps<{
        title: string;
        description: string;
        quantity: number;
        expiry: Date;
        shelfId: string;
      }>
    >
  >();

  const [performMutation, { loading, error, data }] = useAddItemMutation();

  useEventListener("keydown", (event) => {
    if ((event as KeyboardEvent)?.key == "Enter") {
      // @ts-ignore
      formRef.current?.handleSubmit?.();
    }
  });

  const initialValues = {
    title: "",
    description: "",
    quantity: 0,
    expiry: new Date(),
    shelfId: "",
  };

  const onSubmit = (values: {
    title: string;
    description: string;
    expiry: Date;
    quantity: number;
    shelfId: string;
  }) => {
    return performMutation({
      variables: { input: values },
      refetchQueries: [GetAllItemsDocument],
    });
  };

  const validate = (values: {
    title?: string;
    description?: string;
    quantity?: number;
    expiry?: Date;
    shelfId?: string;
  }) => {
    const errors: {
      title?: string;
      quantity?: string;
      expiry?: string;
      shelfId?: string;
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
              {data && data.addItem?.item?.id ? (
                <div>Successfully Added {data.addItem.item?.title}</div>
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
