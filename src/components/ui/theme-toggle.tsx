"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import styles from "./theme-toggle.module.scss";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.placeholder}>
        <Sun className={styles.icon} size={20} />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={styles.toggleBtn}
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={styles.iconWrapper}
        >
          {isDark ? (
            <Moon className={`${styles.icon} ${styles.moon}`} size={20} />
          ) : (
            <Sun className={`${styles.icon} ${styles.sun}`} size={20} />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
