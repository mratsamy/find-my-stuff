import styled from "styled-components";

import { NavItem } from "./navItem";

const OuterWrapper = styled.nav`
  background-color: #333;
`;

const InnerWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;

type Link = {
  href: string;
  text: string;
};

export function Nav() {
  const links: Link[] = [
    { href: "/", text: "home" },
    { href: "/containers", text: "containers" },
    { href: "/shelves", text: "shelves" },
    { href: "/items", text: "items" },
  ];

  return (
    <OuterWrapper>
      <InnerWrapper>
        {links.map(({ href, text }) => (
          <NavItem key={href} href={href}>
            {text}
          </NavItem>
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
  return <div>item</div>;
}
