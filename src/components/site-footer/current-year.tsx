"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

// Statically rendered pages would otherwise freeze the year at build time.
// The server snapshot is used during hydration, then React swaps in the client year.
export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getYear, getYear);
  return <span suppressHydrationWarning>{year}</span>;
}
