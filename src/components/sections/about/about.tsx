import Image from "next/image";
import styles from "./about.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.sectionTitle}>
        <span className="body3-medium">About Me</span>
      </div> */}

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
          {/* <h3 className={styles.tertiary}>
            Here&apos;s a Small Introduction of a Code-Obsessed Night Owl 🦉
          </h3> */}

          <div className={styles.description}>
            {/* <p className="body2-normal">
              Hi, I&apos;m Shubhamoy Sarker, a passionate Full Stack Software
              Developer with 1.5 years of experience in building dynamic and
              scalable web applications. I hold a B.Tech degree in Computer
              Science and have a strong foundation in both frontend and backend
              development.
            </p>

            <p className="body2-normal">
              Throughout my career, I&apos;ve worked with a variety of modern
              technologies, including HTML5, CSS3, JavaScript, TypeScript, PHP,
              ExpressJS, NestJS, Laravel, Angular, ReactJS, NextJS, Ionic,
              VueJS, Quasar, MongoDB, MySQL, SASS, Tailwind, Bootstrap, and Git.
              My expertise lies in creating responsive and user-friendly
              interfaces, as well as developing robust server-side applications.
            </p>

            <p className="body2-normal">
              I&apos;m an avid learner, always exploring new technologies and
              keeping up with the latest industry trends. Recently, I&apos;ve
              taken an interest in UI design, using Figma to bring creative
              ideas to life. When I&apos;m not coding, you&apos;ll find me
              enjoying my hobby of playing games.
            </p> */}

            <p className="body2-normal">
              👋 <strong>Hi, I&apos;m Shubhamoy</strong>—a full stack developer
              on an endless quest for the mythical &apos;perfect&apos; code.
              While perfection may be elusive, clean code and elegant solutions
              keep me going. I thrive on <strong>problem-solving</strong> 🧠,
              tackling challenges head-on, and adding a touch of creativity 🎨
              to everything I build.
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

            <p className="body2-normal">
              <strong>
                🌙💻 P.S. There&apos;s something oddly satisfying about turning
                complex problems into elegant solutions—until I realize the
                problem is my own code at 2 AM.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
