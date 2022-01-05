import { useRef } from "react";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import styled from "styled-components";

import { StyledForm } from "@components/forms";
import { useEventListener } from "@src/hooks";
import {
  GetAllContainersDocument,
  useAddContainerMutation,
  ContainersResponse,
  AddContainerMutation,
} from "@graphql/generated/graphql";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";

export function AddContainer() {
  const formRef =
    useRef<React.Ref<FormikProps<{ title: string; description: string }>>>();

  const [performMutation, { loading, error, data }] = useAddContainerMutation();

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
      // @ts-ignore
      update(cache, { data: { addContainer } }) {
        var data = cache.readQuery<ContainersResponse>({
          query: GetAllContainersDocument,
        });

        if (!data) {
          data = { containers: [] };
        }

        data.containers = [...(data?.containers ?? []), addContainer.container];
        cache.writeQuery({ query: GetAllContainersDocument, data });
      },
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
              {data && data.addContainer?.container?.id ? (
                <div>
                  Successfully Added {data.addContainer.container.title}
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
