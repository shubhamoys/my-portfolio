import { FOOTER_NOTE, SOCIALS } from "@/data/content";
import { ArrowIcon } from "@/components/arrow-icon/arrow-icon";
import { CurrentYear } from "./current-year";
import styles from "./site-footer.module.scss";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.socials}>
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.label}
            <ArrowIcon direction="up-right" />
          </a>
        ))}
      </div>
      <span>
        © <CurrentYear /> {FOOTER_NOTE}
      </span>
    </footer>
  );
}
