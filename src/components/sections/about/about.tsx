"use client";

import styles from "./about.module.scss";
import BentoCard from "@/components/ui/bento-card";
import { Terminal, Code, Heart, Coffee } from "lucide-react";

export default function About() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>Biography</span>
        <h2 className={styles.sectionTitle}>
          About <span className={styles.highlight}>Me</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Here&apos;s a small introduction of a code-obsessed night owl 🦉
        </p>
      </div>

      <div className={styles.aboutGrid}>
        {/* Stats Console Card */}
        <BentoCard className={styles.statsCard} delay={0.1}>
          <div className={styles.cardHeader}>
            <Terminal size={18} className={styles.cardIcon} />
            <span className={styles.cardTitle}>system_status.log</span>
          </div>

          <div className={styles.statsBody}>
            <div className={styles.statItem}>
              <Code size={20} className={styles.statIcon} />
              <div className={styles.statDetails}>
                <span className={styles.statVal}>3+ Years</span>
                <span className={styles.statLbl}>Professional Coding</span>
              </div>
            </div>

            <div className={styles.statItem}>
              <Coffee size={20} className={styles.statIcon} />
              <div className={styles.statDetails}>
                <span className={styles.statVal}>100k+ Lines</span>
                <span className={styles.statLbl}>Production Code written</span>
              </div>
            </div>

            <div className={styles.statItem}>
              <Heart size={20} className={styles.statIcon} />
              <div className={styles.statDetails}>
                <span className={styles.statVal}>99.9%</span>
                <span className={styles.statLbl}>Bug Resolution Rate</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Bio Card */}
        <BentoCard className={styles.bioCard} delay={0.2}>
          <div className={styles.bioContent}>
            <p className={styles.paragraph}>
              👋 <strong>Hi, I&apos;m Shubhamoy</strong>—a full stack developer on an endless quest for the mythical &apos;perfect&apos; code. While perfection may be elusive, clean code and elegant solutions keep me going.
            </p>
            <p className={styles.paragraph}>
              ⚡ <strong>Building scalable backends and sleek UIs</strong> is my absolute jam. One day, I&apos;m architecting efficient APIs; the next, I&apos;m designing custom layouts and animations. I love turning complex logic into readable, maintainable software.
            </p>
            <p className={styles.paragraph}>
              🔄 <strong>When I&apos;m not writing code, I&apos;m probably refactoring it</strong>… because past me never writes code as well as present me. When my screen is off, you can find me solving puzzle games or catching up on tech blogs.
            </p>
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
