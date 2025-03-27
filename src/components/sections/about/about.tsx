import Image from "next/image";
import styles from "./about.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <span className="body3-medium">About Me</span>
        </div>

        <span className="subtitle-normal">
          Here&apos;s a Small Introduction of a Code-Obsessed Night Owl 🦉
        </span>
      </div>

      <div className={styles.sectionBody}>
        <div className={styles.image}>
          <Image
            src="/assets/images/about-section-image.svg"
            width={24}
            height={24}
            alt="About Section Image"
          />
        </div>

        <div className={styles.content}>
          <div className={styles.description}>
            <p className="body2-normal">
              👋 <strong>Hi, I&apos;m Shubhamoy</strong>—a full stack developer
              on an endless quest for the mythical &apos;perfect&apos; code.
              While perfection may be elusive, clean code and elegant solutions
              keep me going. 💻 P.S. There&apos;s something oddly satisfying
              about turning complex problems into elegant solutions—
              <strong>
                until I realize the problem is my own code at 2 AM 🌙.
              </strong>
            </p>

            <p className="body2-normal">
              ⚡ <strong>Building scalable backends and sleek UIs</strong> is my
              jam. One day, I&apos;m architecting efficient APIs; the next,
              I&apos;m battling CSS and wondering why a div refuses to center.
              But that&apos;s the beauty of coding—every challenge is a puzzle
              🧩, and I do love a good puzzle.
            </p>

            <p className="body2-normal">
              🔄{" "}
              <strong>
                When I&apos;m not writing code, I&apos;m probably refactoring it
              </strong>
              … because past me never writes code as well as present me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
