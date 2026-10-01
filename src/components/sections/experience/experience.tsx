"use client";

import { EXPERIENCES } from "@/lib/data";
import styles from "./experience.module.scss";
import Image from "next/image";
import { ExperienceDetails } from "@/lib/types";
import BentoCard from "@/components/ui/bento-card/bento-card";
import { Briefcase, Calendar } from "lucide-react";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

export default function Experience() {
  const getLogoSrc = (experience: ExperienceDetails) => {
    return experience.darkThemeLogo || experience.logo;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", dateFormatOptions).format(date);
  };

  return (
    <div className={styles.experienceSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>Timeline</span>
        <h2 className={styles.sectionTitle}>
          Work <span className={styles.highlight}>Experience</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          A quick look at my developer journey and professional history 🚀
        </p>
      </div>

      <div className={styles.timeline}>
        {/* Timeline vertical connector line */}
        <div className={styles.timelineLine} />

        {EXPERIENCES.map((experience, index) => (
          <div className={styles.timelineItem} key={index}>
            {/* Left side node */}
            <div className={styles.timelineNode}>
              <div className={styles.nodeInner}>
                <Briefcase size={14} className={styles.nodeIcon} />
              </div>
            </div>

            {/* Right side bento card */}
            <BentoCard className={styles.experienceCard} delay={0.1 * index}>
              <div className={styles.cardHeader}>
                <div className={styles.companyLogo}>
                  <Image
                    src={getLogoSrc(experience)}
                    width={32}
                    height={32}
                    alt={experience.logoAlt}
                    className={styles.logoImg}
                  />
                </div>

                <div className={styles.headerText}>
                  <h3 className={styles.position}>{experience.position}</h3>
                  <span className={styles.companyName}>{experience.logoAlt.replace(" logo", "")}</span>
                </div>

                <div className={styles.duration}>
                  <Calendar size={14} className={styles.calIcon} />
                  <span>
                    {formatDate(experience.startDate)} -{" "}
                    {experience.currentlyWorkHere ? "Present" : experience.endDate ? formatDate(experience.endDate) : "N/A"}
                  </span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.summaryList}>
                  {experience.summary?.map((sentence, idx) => (
                    <li key={idx} className={styles.summaryItem}>
                      {sentence}
                    </li>
                  ))}
                </ul>
              </div>
            </BentoCard>
          </div>
        ))}
      </div>
    </div>
  );
}
