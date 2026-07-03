"use client";

import { TECHNOLOGIES } from "@/lib/data";
import styles from "./tech-stack.module.scss";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TechDetails } from "@/lib/types";
import BentoCard from "@/components/ui/bento-card";
import { Wrench, Terminal, Database, Code } from "lucide-react";

export default function TechStack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLogoSrc = (tech: TechDetails) => {
    if (!mounted) return tech.logo;
    if (theme === "dark" && tech.darkThemeLogo) {
      return tech.darkThemeLogo;
    }
    return tech.logo;
  };

  const handleTechClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Group technologies based on label matching
  const languages = TECHNOLOGIES.filter((t) =>
    ["Javascript", "Typescript", "PHP", "Go", "Dart"].includes(t.label)
  );

  const frameworks = TECHNOLOGIES.filter((t) =>
    ["React.js", "Next.js", "Vue.js", "Angular", "Quasar", "Ionic", "Flutter"].includes(t.label)
  );

  const backendsAndDbs = TECHNOLOGIES.filter((t) =>
    ["Node.js", "Express.js", "Nest.js", "Laravel", "MongoDB", "MariaDB"].includes(t.label)
  );

  const tools = TECHNOLOGIES.filter((t) =>
    ["Sass/Scss", "Git"].includes(t.label)
  );

  return (
    <div className={styles.techSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>Arsenal</span>
        <h2 className={styles.sectionTitle}>
          Tech <span className={styles.highlight}>Stack</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          My go-to technologies for building production-ready apps 🛠️
        </p>
      </div>

      <div className={styles.techGrid}>
        {/* Languages Card */}
        <BentoCard className={styles.techCard} delay={0.1}>
          <div className={styles.cardHeader}>
            <Code size={18} className={styles.cardIcon} />
            <span className={styles.cardTitle}>Languages</span>
          </div>
          <div className={styles.cardBody}>
            {languages.map((tech) => (
              <button
                key={tech.label}
                onClick={() => handleTechClick(tech.url)}
                className={styles.techItem}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={getLogoSrc(tech)}
                    width={32}
                    height={32}
                    alt={`${tech.label} logo`}
                    className={styles.techLogo}
                  />
                </div>
                <span className={styles.techLabel}>{tech.label}</span>
              </button>
            ))}
          </div>
        </BentoCard>

        {/* Frameworks Card */}
        <BentoCard className={styles.techCard} delay={0.2}>
          <div className={styles.cardHeader}>
            <Terminal size={18} className={styles.cardIcon} />
            <span className={styles.cardTitle}>Frameworks & Libs</span>
          </div>
          <div className={styles.cardBody}>
            {frameworks.map((tech) => (
              <button
                key={tech.label}
                onClick={() => handleTechClick(tech.url)}
                className={styles.techItem}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={getLogoSrc(tech)}
                    width={32}
                    height={32}
                    alt={`${tech.label} logo`}
                    className={styles.techLogo}
                  />
                </div>
                <span className={styles.techLabel}>{tech.label}</span>
              </button>
            ))}
          </div>
        </BentoCard>

        {/* Backends & Databases Card */}
        <BentoCard className={styles.techCard} delay={0.3}>
          <div className={styles.cardHeader}>
            <Database size={18} className={styles.cardIcon} />
            <span className={styles.cardTitle}>Backend & DBs</span>
          </div>
          <div className={styles.cardBody}>
            {backendsAndDbs.map((tech) => (
              <button
                key={tech.label}
                onClick={() => handleTechClick(tech.url)}
                className={styles.techItem}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={getLogoSrc(tech)}
                    width={32}
                    height={32}
                    alt={`${tech.label} logo`}
                    className={styles.techLogo}
                  />
                </div>
                <span className={styles.techLabel}>{tech.label}</span>
              </button>
            ))}
          </div>
        </BentoCard>

        {/* Tools Card */}
        <BentoCard className={styles.techCard} delay={0.4}>
          <div className={styles.cardHeader}>
            <Wrench size={18} className={styles.cardIcon} />
            <span className={styles.cardTitle}>Design & Tools</span>
          </div>
          <div className={styles.cardBody}>
            {tools.map((tech) => (
              <button
                key={tech.label}
                onClick={() => handleTechClick(tech.url)}
                className={styles.techItem}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={getLogoSrc(tech)}
                    width={32}
                    height={32}
                    alt={`${tech.label} logo`}
                    className={styles.techLogo}
                  />
                </div>
                <span className={styles.techLabel}>{tech.label}</span>
              </button>
            ))}
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
