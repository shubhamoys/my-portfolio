"use client";

import { EXPERIENCES } from "@/lib/data";
import styles from "./experience.module.scss";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ExperienceDetails } from "@/lib/types";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

export default function Experience() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering (to avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to determine which logo to use based on theme
  const getLogoSrc = (experience: ExperienceDetails) => {
    if (!mounted) return experience.logo; // Default during SSR

    // If dark theme is active and a dark theme logo exists, use it
    if (theme === "dark" && experience.darkThemeLogo) {
      return experience.darkThemeLogo;
    }

    // Otherwise use the default logo
    return experience.logo;
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <span className="body3-medium">Experience</span>
        </div>

        <span className="subtitle-normal">
          A Quick Look at My Developer Journey 🚀
        </span>
      </div>

      <div className={styles.experiences}>
        {EXPERIENCES.map((experience, index) => (
          <div className={styles.experience} key={index}>
            <div className={styles.experienceLogo}>
              <Image
                src={getLogoSrc(experience)}
                width={24}
                height={24}
                alt={experience.logoAlt}
              />
            </div>

            <div className={styles.experienceDurationSmall}>
              {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
                experience.startDate
              )}{" "}
              -{" "}
              {experience.currentlyWorkHere
                ? "Present"
                : experience.endDate
                ? new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
                    experience.endDate
                  )
                : "NA"}
            </div>

            <div className={styles.experienceContent}>
              <span className={styles.position}>{experience.position}</span>

              <ul className={styles.summary}>
                {experience.summary?.map((sentence, index) => (
                  <li key={index}>{sentence}</li>
                ))}
              </ul>
            </div>

            <div className={styles.experienceDuration}>
              {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
                experience.startDate
              )}{" "}
              -{" "}
              {experience.currentlyWorkHere
                ? "Present"
                : experience.endDate
                ? new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
                    experience.endDate
                  )
                : "NA"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
