"use client";

import { SOCIAL_LINKS } from "@/lib/data";
import styles from "./hero.module.scss";
import BentoCard from "@/components/ui/bento-card";
import { MapPin } from "lucide-react";

const TECH_STACK = ["React", "Next.js", "NestJS", "PostgreSQL"];

export default function Hero() {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.heroGrid}>
      {/* Intro Card */}
      <BentoCard className={styles.introCard} delay={0.1}>
        <div className={styles.introContent}>
          <div className={styles.badge}>
            <span className={styles.greenPulse} />
            Available for new opportunities
          </div>

          <h1 className={styles.title}>
            Hi, I&apos;m <span className={styles.gradientText}>Shubhamoy</span>
          </h1>

          {/* Static tagline */}
          <p className={styles.tagline}>
            Building software with performance and scalability in mind.
          </p>

          {/* Tech stack list */}
          <ul className={styles.techList}>
            {TECH_STACK.map((tech) => (
              <li key={tech} className={styles.techItem}>
                {tech}
              </li>
            ))}
          </ul>

          <div className={styles.address}>
            <MapPin size={18} className={styles.pinIcon} />
            <span className="body2-medium">Siliguri, West Bengal, India</span>
          </div>

          <div className={styles.socialsGroup}>
            {SOCIAL_LINKS.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleSocialClick(socialLink.url)}
                  className={styles.socialBtn}
                  aria-label={socialLink.label}
                >
                  <Icon className={styles.socialIcon} />
                </button>
              );
            })}
          </div>
        </div>
      </BentoCard>

      {/* Editor Mockup Card */}
      <BentoCard className={styles.editorCard} delay={0.2} hoverEffect={true}>
        <div className={styles.editorHeader}>
          <div className={styles.editorDots}>
            <span className={`${styles.editorDot} ${styles.close}`} />
            <span className={`${styles.editorDot} ${styles.minimize}`} />
            <span className={`${styles.editorDot} ${styles.expand}`} />
          </div>
          <span className={styles.editorTitle}>developer.json</span>
        </div>
        <div className={styles.editorBody}>
          <pre className="font-mono">
            <code>
              <span className={styles.jsonKeyword}>const </span> developer = &#123;
              {"\n  "}
              <span className={styles.jsonKey}>name</span>:{" "}
              <span className={styles.jsonString}>&quot;Shubhamoy Sarker&quot;</span>,
              {"\n  "}
              <span className={styles.jsonKey}>role</span>:{" "}
              <span className={styles.jsonString}>&quot;Full Stack Developer&quot;</span>,
              {"\n  "}
              <span className={styles.jsonKey}>skills</span>: [
              {"\n    "}
              <span className={styles.jsonString}>&quot;NodeJS&quot;</span>,{" "}
              <span className={styles.jsonString}>&quot;NestJS&quot;</span>,{" "}
              <span className={styles.jsonString}>&quot;Laravel&quot;</span>,{" "}
              <span className={styles.jsonString}>&quot;React&quot;</span>,{" "}
              <span className={styles.jsonString}>&quot;Vue&quot;</span>,{" "}
              <span className={styles.jsonString}>&quot;Quasar&quot;</span>
              {"\n  "}],
              {"\n  "}
              <span className={styles.jsonKey}>passion</span>:{" "}
              <span className={styles.jsonString}>&quot;Clean Code &amp; Scalable Architecture&quot;</span>,
              {"\n  "}
              <span className={styles.jsonKey}>nightOwl</span>: <span className={styles.jsonBoolean}>true</span>,
              {"\n  "}
              <span className={styles.jsonKey}>coffeeToCodeRatio</span>:{" "}
              <span className={styles.jsonNumber}>1.85</span>
              {"\n"}&#125;;
            </code>
          </pre>
        </div>
      </BentoCard>
    </div>
  );
}
