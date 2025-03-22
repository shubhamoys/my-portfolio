"use client";

import Image from "next/image";
import styles from "./drawer.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import IconButton from "@/components/general/icon-button/icon-button";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const downloadResume = () => {
    console.log("Downloading Resume...");
  };

  // Ensure the component is mounted before rendering (to avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder header to prevent layout shift
    return (
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}></div>
    );
  }

  return (
    <>
      {/* Drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          {/* <Image
            src="/assets/logos/logo.svg"
            width={24}
            height={24}
            alt=""
            className={styles.logo}
          /> */}

          <h3>{"{SS}"}</h3>

          <Image
            src={
              theme === "light"
                ? "/assets/logos/close-icon-light.svg"
                : "/assets/logos/close-icon-dark.svg"
            }
            width={24}
            height={24}
            alt=""
            className={styles.closeIcon}
            onClick={onClose}
          />
        </div>

        {/* Drawer Content */}
        <nav>
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="body2-medium"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.themeSwitch}>
            <span className="body2-medium">Switch Theme</span>

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
          </div>

          <button className={styles.download} onClick={downloadResume}>
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
    </>
  );
}
