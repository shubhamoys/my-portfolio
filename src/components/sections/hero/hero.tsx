"use client";

import SvgIconButton from "@/components/general/svg-icon-button/svg-icon-button";
import { SOCIAL_LINKS } from "@/lib/data";
import Image from "next/image";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.description}>
          <h1>
            Hi, I&apos;m <span>Shubhamoy</span>
          </h1>

          <p className="body2-normal">
            A Passionate Full Stack Software Developer with 1.5 years of
            experience in modern web technologies like Typescript, Next.js,
            Nest.js, MongoDB and more.
          </p>

          <p className="body2-normal">
            B.Tech in Computer Science | Always eager to learn new trends and
            technologies
          </p>
        </div>

        <div className={styles.address}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <span className="body2-normal">Siliguri, West Bengal, India</span>
        </div>

        <div className={styles.socials}>
          {SOCIAL_LINKS.map((socialLink, index) => {
            const Icon = socialLink.icon;
            return (
              <SvgIconButton
                key={index}
                onClick={() => window.open(socialLink.url, "_blank")}
                label={socialLink.label}
              >
                <Icon className={styles.socialIcon} />
              </SvgIconButton>
            );
          })}
        </div>
      </div>

      <div className={styles.image}>
        <Image
          src="/assets/images/hero-image.svg"
          width={24}
          height={24}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}
