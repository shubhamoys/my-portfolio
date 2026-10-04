import { STACK } from "@/data/content";
import styles from "./marquee.module.scss";

export function Marquee() {
  return (
    <div className={styles.marquee} aria-label="Tech stack">
      <div className={styles.track}>
        <ul className={styles.group}>
          {STACK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* Exact duplicate so the loop is seamless; hidden from screen readers. */}
        <ul className={styles.group} aria-hidden="true">
          {STACK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
