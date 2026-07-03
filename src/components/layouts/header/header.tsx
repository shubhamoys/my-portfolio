"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ui/theme-toggle";
import styles from "./header.module.scss";
import { Download } from "lucide-react";

export default function Header() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/files/Shubhamoy_Résumé.pdf";
    link.download = "Shubhamoy_Résumé.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.pushState(null, "", "/");
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} onClick={handleLogoClick}>
        {"{SS}"}
      </Link>

      <div className={styles.actions}>
        <ThemeToggle />

        <button className={styles.downloadBtn} onClick={handleResumeDownload}>
          <span>Resume</span>
          <Download size={16} />
        </button>
      </div>
    </header>
  );
}
