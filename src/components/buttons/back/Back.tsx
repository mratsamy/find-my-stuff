import { useRouter } from "next/router";
import styled from "styled-components";

const Link = styled.div`
  color: dodgerblue;
  cursor: pointer;
  padding: 1em;
`;

export default function Back() {
  const router = useRouter();

  return <Link onClick={() => router.back()}>&lt; Back</Link>;
}
