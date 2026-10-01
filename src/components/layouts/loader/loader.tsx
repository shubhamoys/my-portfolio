"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./loader.module.scss";

const logLines = [
  "systemctl start shubhamoy-sarker-portfolio.service",
  "loading core dependencies...",
  "initializing theme: cosmic purple & indigo...",
  "compiling bento grids & glassmorphism modules...",
  "fetching projects data from src/lib/data.ts...",
  "status: ready. compiling page router...",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Typing log lines sequentially
    if (currentLineIndex < logLines.length) {
      const duration = 250 + Math.random() * 200; // randomize slightly
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, duration);
      return () => clearTimeout(timer);
    } else {
      // Completed all log lines, trigger completion after a short pause
      const timer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, onComplete]);

  // Loading dots animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={styles.loaderBg}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className={styles.terminal}>
        <div className={styles.header}>
          <div className={`${styles.dot} ${styles.red}`} />
          <div className={`${styles.dot} ${styles.yellow}`} />
          <div className={`${styles.dot} ${styles.green}`} />
          <span className={styles.title}>shubhamoy@portfolio: ~</span>
        </div>
        <div className={styles.body}>
          {logLines.slice(0, currentLineIndex).map((line, idx) => (
            <div key={idx} className={styles.logLine}>
              <span className={styles.prompt}>$</span> {line}
            </div>
          ))}
          {currentLineIndex < logLines.length && (
            <div className={styles.activeLine}>
              <span className={styles.prompt}>$</span> {logLines[currentLineIndex]}
              <span className={styles.cursor}>_</span>
            </div>
          )}
          {currentLineIndex === logLines.length && (
            <div className={styles.doneLine}>
              Boot complete. Launching interface{dots}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
