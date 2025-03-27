"use client";

import IconButton from "@/components/general/icon-button/icon-button";
import { NAV_LINKS } from "@/lib/data";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";

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

  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement("a");

    // Set the href to the resume file path
    link.href = "/assets/files/resume.pdf";

    // Set the download attribute to suggest a filename
    link.download = "Shubhamoy_Sarker_Resume.pdf";

    // Append to the document
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  if (!mounted) {
    // Render a placeholder header to prevent layout shift
    return (
      <header className={styles.header}>
        <h3>{"{SS}"}</h3>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <Link
        href="/"
        className="h3"
        onClick={(e) => {
          e.preventDefault(); // Prevent default navigation
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Enable smooth scrolling
          });

          // Update the URL to "/"
          window.history.pushState(null, "", "/");
        }}
      >
        {"{SS}"}
      </Link>

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

          <button className={styles.download} onClick={handleResumeDownload}>
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
