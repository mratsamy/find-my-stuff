import styled from "styled-components";

const Wrapper = styled.div`
  font-weight: 800;
  font-style: italic;
`;

type Props<Items = any> = {
  items: Items[];
};

export default function EmptyPrompt(props: Props) {
  const { items } = props;

  if (items.length > 0) return null;
  return <Wrapper>Nothing to Display</Wrapper>;
}
