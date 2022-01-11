import { useRef } from "react";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import styled from "styled-components";

import { StyledForm } from "@components/forms";
import { useEventListener } from "@src/hooks";
import {
  GetAllShelvesDocument,
  useAddShelfMutation,
} from "@graphql/generated/graphql";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";

export function AddShelf() {
  const formRef =
    useRef<React.Ref<FormikProps<{ title: string; description: string }>>>();

  const [performMutation, { loading, error, data }] = useAddShelfMutation();

  useEventListener("keydown", (event) => {
    if ((event as KeyboardEvent)?.key == "Enter") {
      // @ts-ignore
      formRef.current?.handleSubmit?.();
    }
  });

  const initialValues = {
    title: "",
    description: "",
  };

  const onSubmit = (values: { title: string; description: string }) => {
    return performMutation({
      variables: { input: values },
      refetchQueries: [GetAllShelvesDocument],
    });
  };

  const validate = (values: { title?: string; description?: string }) => {
    const errors: { title?: string } = {};

    if (!values.title) {
      errors.title = "Required";
    } else if (values.title.length < 2) {
      errors.title = "Required";
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
        const errorDescription =
          errors.description && touched.description ? "error" : "";

        return (
          <StyledForm>
            <CenteredItems>
              {loading && <LoadingSpinner />}
              {error && <div style={{ color: "red" }}>{error}</div>}
              {data && data.addShelf?.shelf?.id ? (
                <div>Successfully Added {data.addShelf.shelf?.title}</div>
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
