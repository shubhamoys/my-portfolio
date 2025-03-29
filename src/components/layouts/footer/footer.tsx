import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="body3-normal">
        <span>Developed by </span>

        <span className={styles.tertiary}>Shubhamoy Sarker</span>
      </p>
    </footer>
  );
}
