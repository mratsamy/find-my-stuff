import { useRef } from "react";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import styled from "styled-components";

import { StyledForm } from "@components/forms";
import { useEventListener } from "@src/hooks";
import {
  GetAllShelvesDocument,
  useGetShelfEditableQuery,
  useUpdateShelfMutation,
} from "@graphql/generated/graphql";
import { LoadingSpinner } from "@src/components/loading/LoadingSpinner";
import ErrorResponse from "@src/components/errorResponse/ErrorResponse";

type Props = {
  id: string;
};

export function EditShelf({ id }: Props) {
  const formRef =
    useRef<React.Ref<FormikProps<{ title: string; description: string }>>>();

  useEventListener("keydown", (event) => {
    if ((event as KeyboardEvent)?.key == "Enter") {
      // @ts-ignore
      formRef.current?.handleSubmit?.();
    }
  });

  const { loading, error, data } = useGetShelfEditableQuery({
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  const [
    performMutation,
    { error: mutationError, loading: mutationLoading, data: mutationData },
  ] = useUpdateShelfMutation();

  const onSubmit = (values: { title: string; description: string }) => {
    return performMutation({
      variables: { input: { id, ...values } },
      refetchQueries: [GetAllShelvesDocument],
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
    title: data?.getShelf?.shelf?.title ?? "",
    description: data?.getShelf?.shelf?.description ?? "",
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
              {data && mutationData?.updateShelf?.shelf?.id ? (
                <div>
                  Successfully Updated {mutationData.updateShelf.shelf.title}
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

const WrapperLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenteredItems = styled.div`
  align-self: center;
`;
