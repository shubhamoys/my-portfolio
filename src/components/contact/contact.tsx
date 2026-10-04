import { CONTACT } from "@/data/content";
import { FitText } from "@/components/fit-text/fit-text";
import { Reveal } from "@/components/reveal/reveal";
import { SiteFooter } from "@/components/site-footer/site-footer";
import styles from "./contact.module.scss";

export function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="wrap">
        <p className={styles.prompt}>{CONTACT.prompt}</p>
        <Reveal>
          <FitText as="h2" className={styles.ctaTitle} max={160}>
            Let&rsquo;s build
            <br />
            <span className="outline">something</span>
            <br />
            that lasts
            <span className={`acc ${styles.cursor}`}>_</span>
          </FitText>
        </Reveal>
        <a className={styles.email} href={CONTACT.emailHref}>
          {CONTACT.emailLabel}
        </a>

        <SiteFooter />
      </div>
    </section>
  );
}
