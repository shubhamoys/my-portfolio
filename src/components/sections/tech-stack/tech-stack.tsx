"use client";

import { TECHNOLOGIES } from "@/lib/data";
import styles from "./tech-stack.module.scss";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TechDetails } from "@/lib/types";

export default function TechStack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering (to avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to determine which logo to use based on theme
  const getLogoSrc = (tech: TechDetails) => {
    if (!mounted) return tech.logo; // Default during SSR

    // If dark theme is active and a dark theme logo exists, use it
    if (theme === "dark" && tech.darkThemeLogo) {
      return tech.darkThemeLogo;
    }

    // Otherwise use the default logo
    return tech.logo;
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <span className="body3-medium">Tech Stack</span>
          </div>

          <span className="subtitle-normal">
            Here are the languages, frameworks, and tools I use.
          </span>
        </div>

        <div className={styles.techStack}>
          {TECHNOLOGIES.map((technology, index) => (
            <div
              className={styles.technology}
              key={index}
              onClick={() => window.open(technology.url, "_blank")}
            >
              <Image
                src={getLogoSrc(technology)}
                width={24}
                height={24}
                alt={`${technology.label} logo`}
              />

              <span className="body1">{technology.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
