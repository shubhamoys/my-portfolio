"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { PHONE_QUERY } from "@/hooks/use-media-query";
import { fitSize } from "@/utils/fit-text";

interface FitTextProps {
  as?: ElementType;
  className?: string;
  /** Max font size in px. */
  max: number;
  /**
   * Fit the child `[data-fit]` lines instead of the element itself.
   * Tablet/desktop lines share the smallest size; on phones each fills its own width.
   * Per-line max comes from `data-max`.
   */
  lines?: boolean;
  children: ReactNode;
}

function fitAll(root: HTMLElement, max: number, lines: boolean) {
  if (!lines) {
    root.style.fontSize = `${fitSize(root, max)}px`;
    return;
  }
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-fit]"));
  const sizes = els.map((el) => fitSize(el, parseFloat(el.dataset.max ?? "") || max));
  if (window.matchMedia(PHONE_QUERY).matches) {
    els.forEach((el, i) => (el.style.fontSize = `${sizes[i]}px`));
  } else {
    const shared = Math.min(...sizes);
    els.forEach((el) => (el.style.fontSize = `${shared}px`));
  }
}

export function FitText({
  as: Tag = "span",
  className,
  max,
  lines = false,
  children,
}: FitTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let queued = false;
    const run = () => fitAll(el, max, lines);
    const queue = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        run();
      });
    };

    run();
    // Re-measure once the web fonts have loaded.
    document.fonts?.ready.then(run);
    window.addEventListener("resize", queue, { passive: true });
    return () => window.removeEventListener("resize", queue);
  }, [max, lines]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
