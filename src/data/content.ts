export const SITE = {
  title: "Shubhamoy Sarker — Software Engineer",
  description:
    "Shubhamoy Sarker — software engineer building distributed systems and the interfaces on top of them.",
  logoName: "shubhamoy/",
  logoAccent: "dev",
  availability: "Open to Full Stack roles",
} as const;

export const NAV_LINKS = [
  { href: "#work", label: "Work", num: "01" },
  { href: "#path", label: "Path", num: "02" },
  { href: "#contact", label: "Contact", num: "03" },
] as const;

export const HERO = {
  eyebrow:
    "> software engineer — distributed systems & the interfaces on top of them",
  firstName: "Shubhamoy",
  lastName: "Sarker",
  gridWord: "BUILD",
  bio: "I build backend systems that stay boring under load, and the frontends that make them feel effortless. Currently obsessed with shipping LLM features that hold up outside a demo.",
  primaryCta: { href: "#work", label: "See the work" },
  secondaryCta: {
    href: "/assets/files/Shubhamoy_Sarker_Resume.pdf",
    label: "Download CV",
    downloadName: "Shubhamoy_Sarker_Resume.pdf",
  },
} as const;

export const STACK = [
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "React Native",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Go",
  "Docker",
  "AWS",
  "GraphQL",
  "RabbitMQ",
] as const;

export interface Project {
  num: string;
  name: string;
  description: string;
  tags: string;
  year: string;
  href: string;
}

export const PROJECTS: readonly Project[] = [
  {
    num: "01",
    name: "StudyLoop",
    description:
      "Spaced-repetition flashcards with a deck marketplace: FSRS-scheduled reviews and server-priced checkout.",
    tags: "NestJS · Next.js · GraphQL · Postgres",
    year: "2026",
    href: "https://github.com/shubhamoys/StudyLoop",
  },
  {
    num: "02",
    name: "ForgeGo",
    description:
      "An interactive Go CLI that scaffolds a ready-to-run REST API in one command: routing, config, Postgres or MongoDB wiring, Docker, and Git, all set up for you.",
    tags: "Go",
    year: "2025",
    href: "https://github.com/shubhamoys/forgego",
  },
];

export const PATH_INTRO =
  "4 years shipping production software. Grew from building features to designing the systems under them, without ever losing an eye for the pixel";

export interface Role {
  when: string;
  title: string;
  org: string;
  what: string;
}

export const ROLES: readonly Role[] = [
  {
    when: "2026 — 2026",
    title: "Software Engineer",
    org: "Digital Avenues",
    what: "Shipped and refined features on a live product, from first build to production polish.",
  },
  {
    when: "2024 — 2026",
    title: "Full Stack Developer",
    org: "Crowntail Technologies",
    what: "Full-stack ownership plus the unglamorous parts: query tuning, estimates, reviews, mentoring.",
  },
  {
    when: "2023 — 2024",
    title: "Full Stack Developer",
    org: "Fördel Studios",
    what: "Zero-to-launch builds across web and mobile, frontend to backend.",
  },
];

export const CONTACT = {
  prompt: "> ./say-hello.sh",
  emailHref: "mailto:shubhamoys@gmail.com",
  emailLabel: "shubhamoys@gmail.com",
} as const;

export const SOCIALS = [
  { href: "https://github.com/shubhamoys", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/shubhamoy-sarker",
    label: "LinkedIn",
  },
] as const;

export const FOOTER_NOTE = "— hand-built, no templates";
