"use client";

import { PROJECTS } from "@/lib/data";
import styles from "./projects.module.scss";
import BentoCard from "@/components/ui/bento-card";
import { ExternalLink, Code } from "lucide-react";
import { GithubIcon } from "@/lib/svg-icons";

export default function Projects() {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>Portfolio</span>
        <h2 className={styles.sectionTitle}>
          Featured <span className={styles.highlight}>Projects</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          A handpicked selection of production systems and experimental apps 🚀
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {PROJECTS.map((project, index) => (
          <BentoCard
            key={project.title}
            className={`${styles.projectCard} ${
              project.featured ? styles.featured : ""
            }`}
            delay={0.1 * index}
          >
            <div className={styles.projectContent}>
              <div className={styles.cardHeader}>
                <Code size={18} className={styles.headerIcon} />
                <span className={styles.cardScope}>src/projects/{project.title.toLowerCase()}</span>
              </div>

              <div className={styles.projectBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.tagsContainer}>
                  {project.techStack.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.actions}>
                {project.githubUrl && (
                  <button
                    onClick={() => handleLinkClick(project.githubUrl!)}
                    className={styles.actionBtn}
                    aria-label={`View ${project.title} source on GitHub`}
                  >
                    <GithubIcon className={styles.btnIcon} />
                    <span>Source</span>
                  </button>
                )}
                {project.liveUrl && (
                  <button
                    onClick={() => handleLinkClick(project.liveUrl!)}
                    className={`${styles.actionBtn} ${styles.primaryBtn}`}
                    aria-label={`Visit ${project.title} live website`}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </button>
                )}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  );
}
