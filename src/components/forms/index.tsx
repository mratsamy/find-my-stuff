import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;

  .error {
    color: red;
  }

  input.error {
    border-color: red;
  }

  input,
  select {
    padding: 1em 2em;
  }

  button[type="submit"] {
    padding: 1em 2em;
    color: white;
    font-weight: 800;
    background-color: dodgerblue;
  }
`;
