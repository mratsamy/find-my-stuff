import {
  Wrapper,
  TitleSpan,
  TextSpan,
} from "@components/displayFields/sharedStyles";

type Props = {
  fieldName: string;
  value: string;
};

export function TextField(props: Props) {
  const { fieldName, value } = props;

  return (
    <Wrapper>
      <TitleSpan>{fieldName}</TitleSpan>
      {"  "}
      <TextSpan>{value}</TextSpan>
    </Wrapper>
  );
}
