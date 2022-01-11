import { useRouter } from "next/router";

export function useNextQueryParam(targetParam: string): string | null {
  const { query } = useRouter();

  var response = query?.[targetParam];

  if (Array.isArray(response)) {
    response = response[0];
  }

  return response ?? null;
}
