import { useEffect, useState, PropsWithChildren } from "react";

type ClientOnly = PropsWithChildren<{ [key: string]: any }>;

export default function ClientOnly({ children, ...delegated }: ClientOnly) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
