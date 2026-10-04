import { HERO } from "@/data/content";
import { ArrowIcon } from "@/components/arrow-icon/arrow-icon";
import { ContributionGrid } from "@/components/contribution-grid/contribution-grid";
import { FitText } from "@/components/fit-text/fit-text";
import { StatusPill } from "@/components/status-pill/status-pill";
import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className="wrap">
        <div className={styles.heroTop}>
          <p className={styles.eyebrow}>{HERO.eyebrow}</p>
          <StatusPill variant="hero" />
        </div>

        <FitText as="h1" className={styles.name} max={156} lines>
          <span className={styles.line} data-fit data-max="156">
            {HERO.firstName}
          </span>
          <span className={styles.line} data-fit data-max="156">
            <span className="outline">{HERO.lastName}</span>
            <span className="acc">.</span>
          </span>
        </FitText>

        <ContributionGrid word={HERO.gridWord} />

        <div className={styles.heroFoot}>
          <p className={styles.bio}>{HERO.bio}</p>
          <div className={styles.heroActions}>
            <a className={`${styles.btn} ${styles.primary}`} href={HERO.primaryCta.href}>
              {HERO.primaryCta.label}
              <ArrowIcon direction="down" />
            </a>
            <a
              className={`${styles.btn} ${styles.ghost}`}
              href={HERO.secondaryCta.href}
              download={HERO.secondaryCta.downloadName}
            >
              {HERO.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
