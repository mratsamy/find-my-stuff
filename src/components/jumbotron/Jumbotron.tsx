import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 3rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: white;
  }
`;

const HiddenOnSmallScreens = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

type Props = {};

export function Jumbotron(props: Props) {
  return (
    <Wrapper className="jumbotron">
      <h1>Find My Stuff</h1>
      <HiddenOnSmallScreens>
        <h3>Ratsamy</h3>
      </HiddenOnSmallScreens>
    </Wrapper>
  );
}
