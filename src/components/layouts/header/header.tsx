"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { NAV_LINKS } from "@/lib/data";
import IconButton from "@/components/general/icon-button/icon-button";

interface HeaderProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}
export default function Header({ isDrawerOpen, toggleDrawer }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Add or remove the "no-scroll" class on the <html> element
  useEffect(() => {
    if (isDrawerOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [isDrawerOpen]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Ensure the component is mounted before rendering (to avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder header to prevent layout shift
    return (
      <header className={styles.header}>
        {/* <div className={styles.logo}>
          <Image src="/assets/logos/logo.svg" width={24} height={24} alt="" />
        </div> */}

        <h3>{"{SS}"}</h3>

        {/* <div className={styles.navWrapper}>
          <nav>
            {NAV_LINKS.map((link, index) => (
              <Link key={index} href={link.href} className="body2-medium">
                {link.label}
              </Link>
            ))}
          </nav>
        </div> */}
      </header>
    );
  }

  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}>
        <Image src="/assets/logos/logo.svg" width={24} height={24} alt="" />
      </div> */}

      {/* <Link href="/" className="h3">
        {"{SS}"}
      </Link> */}

      <h3>{"{SS}"}</h3>

      {/* Desktop Navigation */}
      <div className={styles.navWrapper}>
        <nav>
          {NAV_LINKS.map((link, index) => (
            <Link key={index} href={link.href} className="body2-medium">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <IconButton
            src={
              theme === "light"
                ? "/assets/logos/sun-icon.svg"
                : "/assets/logos/moon-icon.svg"
            }
            alt="Toggle Theme"
            onClick={toggleTheme}
            imageClassName={styles.themeIcon}
          />

          <button className={styles.download}>
            <span className="body2-medium">Resume</span>

            <Image
              src="/assets/logos/download-icon.svg"
              width={24}
              height={24}
              alt="Download Resume"
            />
          </button>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className={styles.hamburgerMenu}>
        <Image
          src={
            theme === "light"
              ? "/assets/logos/hamburger-menu-icon-light.svg"
              : "/assets/logos/hamburger-menu-icon-dark.svg"
          }
          width={24}
          height={24}
          alt=""
          onClick={toggleDrawer}
        />
      </div>
    </header>
  );
}
