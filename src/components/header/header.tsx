"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE } from "@/data/content";
import { PHONE_QUERY } from "@/hooks/use-media-query";
import { StatusDot, StatusPill } from "@/components/status-pill/status-pill";
import styles from "./header.module.scss";

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  // Esc, outside click and leaving the phone layout all close the menu.
  // Listeners are only attached while the menu is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    const mq = window.matchMedia(PHONE_QUERY);
    const onMediaChange = (e: MediaQueryListEvent) => {
      if (!e.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    mq.addEventListener("change", onMediaChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
      mq.removeEventListener("change", onMediaChange);
    };
  }, [open]);

  return (
    <header className={styles.siteHeader}>
      <div className={`wrap ${styles.headerInner}`}>
        <a className={styles.logo} href="#top">
          {SITE.logoName}
          <span className="acc">{SITE.logoAccent}</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.num} {link.label}
            </a>
          ))}
        </nav>

        <StatusPill variant="header" />

        <button
          ref={buttonRef}
          className={styles.menuBtn}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className={styles.iconOpen}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            aria-hidden="true"
          >
            <path d="M2 6H16M2 12H16" />
          </svg>
          <svg
            className={styles.iconClose}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            aria-hidden="true"
          >
            <path d="M4 4L14 14M14 4L4 14" />
          </svg>
        </button>
      </div>

      <nav
        ref={menuRef}
        className={styles.mobileMenu}
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
            <span>{link.num}</span>
          </a>
        ))}
        <div className={styles.mobileMenuStatus}>
          <StatusDot />
          <span>{SITE.availability}</span>
        </div>
      </nav>
    </header>
  );
}
