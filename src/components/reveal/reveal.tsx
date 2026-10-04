"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import styles from "./reveal.module.scss";

// One shared observer for every Reveal on the page.
const callbacks = new WeakMap<Element, () => void>();
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  return observer;
}

interface RevealProps {
  as?: ElementType;
  /** Stagger index — each step adds 80ms. */
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add(styles.visible);

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      show();
      return;
    }

    callbacks.set(el, show);
    getObserver().observe(el);
    return () => {
      callbacks.delete(el);
      observer?.unobserve(el);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className ? `${styles.reveal} ${className}` : styles.reveal}
      style={{ "--d": delay } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
