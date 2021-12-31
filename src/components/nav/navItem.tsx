import Link from "next/link";
import type { PropsWithChildren } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

type Props = PropsWithChildren<{ href: string }>;

const NavItemWrapper = styled.li<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "dodgerblue" : "inherit")};
  color: white;
  list-style-type: none;
  &:hover {
    background-color: ${(p) => (p.isActive ? "#008CBA" : "#787878")};
  }
`;

const Anchor = styled.a`
  text-transform: capitalize;
  display: inline-block;
  padding: 14px 16px;
`;

export function NavItem(props: Props) {
  const router = useRouter();

  const { href } = props;
  return (
    <NavItemWrapper isActive={router.pathname == props.href}>
      <Link href={href} passHref>
        <Anchor>{props.children}</Anchor>
      </Link>
    </NavItemWrapper>
  );
}
