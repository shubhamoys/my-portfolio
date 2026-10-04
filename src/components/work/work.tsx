import { PROJECTS } from "@/data/content";
import { ArrowIcon } from "@/components/arrow-icon/arrow-icon";
import { Reveal } from "@/components/reveal/reveal";
import styles from "./work.module.scss";

export function Work() {
  return (
    <section className={styles.work} id="work">
      <div className="wrap">
        <Reveal className={styles.sectionHead}>
          <h2 className="h2">Selected work</h2>
          <span className={styles.sectionNote}>
            ({String(PROJECTS.length).padStart(2, "0")})
            <span className={styles.hoverHint}> — hover a row</span>
          </span>
        </Reveal>

        <ul className={styles.projects}>
          {PROJECTS.map((project, i) => (
            <Reveal as="li" delay={i} key={project.num}>
              <a
                className={styles.project}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.num}>{project.num}</span>
                <span className={styles.name}>{project.name}</span>
                <span className={styles.desc}>{project.description}</span>
                <span className={styles.meta}>
                  <span className={styles.tags}>{project.tags}</span>
                  <span className={styles.year}>{project.year}</span>
                </span>
                <span className={styles.arrow}>
                  <ArrowIcon className={styles.arrowIcon} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
