import { PATH_INTRO, ROLES } from "@/data/content";
import { Reveal } from "@/components/reveal/reveal";
import styles from "./path.module.scss";

export function Path() {
  return (
    <section id="path">
      <div className={`wrap ${styles.pathInner}`}>
        <Reveal className={styles.pathIntro}>
          <h2 className="h2">
            The <br className={styles.brLg} />
            path
          </h2>
          <p>{PATH_INTRO}</p>
        </Reveal>

        <ol>
          {ROLES.map((role, i) => (
            <Reveal as="li" delay={i} className={styles.role} key={role.when}>
              <span className={styles.when}>{role.when}</span>
              <div>
                <h3 className={styles.title}>{role.title}</h3>
                <p className={styles.org}>{role.org}</p>
                <p className={styles.what}>{role.what}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
