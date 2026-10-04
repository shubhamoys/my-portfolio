import { SITE } from "@/data/content";
import styles from "./status-pill.module.scss";

export function StatusDot() {
  return <span className={styles.dot} aria-hidden="true" />;
}

/** Availability pill. `header` shows on desktop, `hero` takes over below 900px. */
export function StatusPill({ variant }: { variant: "header" | "hero" }) {
  return (
    <div className={`${styles.pill} ${styles[variant]}`}>
      <StatusDot />
      <span>{SITE.availability}</span>
    </div>
  );
}
