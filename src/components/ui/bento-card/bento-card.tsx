"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "./bento-card.module.scss";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export default function BentoCard({
  children,
  className = "",
  delay = 0,
  hoverEffect = true,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutExpo for premium fluid motion
      }}
      whileHover={hoverEffect ? { y: -5, scale: 1.01 } : undefined}
      className={`${styles.card} ${className}`}
    >
      <div className={styles.inner}>{children}</div>
    </motion.div>
  );
}
