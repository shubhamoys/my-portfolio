import { GithubIcon, GmailIcon, LinkedInIcon } from "./svg-icons";
import { ExperienceDetails, TechDetails } from "./types";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Tech Stack",
    href: "#tech-stack",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    url: "https://github.com/shubhamoys",
    label: "Github Icon",
  },
  {
    icon: GmailIcon,
    url: "mailto:shubhamoys@gmail.com",
    label: "Gmail Icon",
  },
  {
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/shubhamoy-sarker/",
    label: "LinkedIn Icon",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: "/assets/tech-logos/javascript-logo.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: "/assets/tech-logos/typescript-logo.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "php",
    logo: "/assets/tech-logos/php-logo.svg",
    url: "https://www.php.net/",
  },
  {
    label: "Go",
    logo: "/assets/tech-logos/go-logo.svg",
    url: "https://go.dev/",
  },
  {
    label: "Dart",
    logo: "/assets/tech-logos/dart-logo.svg",
    url: "https://dart.dev/",
  },
  {
    label: "Node.js",
    logo: "/assets/tech-logos/nodejs-logo.svg",
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: "/assets/tech-logos/express-logo.svg",
    darkThemeLogo: "/assets/tech-logos/express-logo-dark-theme.svg",
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: "/assets/tech-logos/nestjs-logo.svg",
    url: "https://nestjs.com/",
  },
  {
    label: "Laravel",
    logo: "/assets/tech-logos/laravel-logo.svg",
    url: "https://laravel.com/",
  },
  {
    label: "MongoDB",
    logo: "/assets/tech-logos/mongodb-logo.svg",
    url: "https://www.mongodb.com/",
  },
  {
    label: "MariaDB",
    logo: "/assets/tech-logos/mariadb-logo.svg",
    url: "https://mariadb.org/",
  },
  {
    label: "Angular",
    logo: "/assets/tech-logos/angular-logo.svg",
    url: "https://angular.dev/",
  },
  {
    label: "React.js",
    logo: "/assets/tech-logos/react-logo.svg",
    url: "https://react.dev/",
  },
  {
    label: "Vue.js",
    logo: "/assets/tech-logos/vuejs-logo.svg",
    url: "https://vuejs.org/",
  },
  {
    label: "Next.js",
    logo: "/assets/tech-logos/nextjs-logo.svg",
    url: "https://nextjs.org/",
  },
  {
    label: "Ionic",
    logo: "/assets/tech-logos/ionic-logo.svg",
    url: "https://ionicframework.com/",
  },
  {
    label: "Quasar",
    logo: "/assets/tech-logos/quasar-logo.svg",
    darkThemeLogo: "/assets/tech-logos/quasar-logo-dark-theme.svg",
    url: "https://quasar.dev/",
  },
  {
    label: "Flutter",
    logo: "/assets/tech-logos/flutter-logo.svg",
    url: "https://flutter.dev/",
  },
  {
    label: "Sass/Scss",
    logo: "/assets/tech-logos/sass-logo.svg",
    url: "https://sass-lang.com/",
  },
  {
    label: "Git",
    logo: "/assets/tech-logos/git-logo.svg",
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: "/assets/logos/technowebs-logo.svg",
    logoAlt: "Technowebs logo",
    position: "Full Stack Developer",
    startDate: new Date(2024, 7),
    currentlyWorkHere: true,
    summary: [
      "Building enterprise-level full-stack applications with Laravel, MariaDB, Vue.js, and Quasar.",
      "Ensuring performance & scalability in complex projects.",
      "Mentoring juniors, guiding them through best practices and development challenges.",
    ],
  },
  {
    logo: "/assets/logos/fordel-logo.svg",
    darkThemeLogo: "/assets/logos/fordel-logo-dark-theme.svg",
    logoAlt: "Fordel Studios logo",
    position: "Full Stack Developer",
    startDate: new Date(2023, 0),
    endDate: new Date(2024, 5),
    summary: [
      "Built and maintained full-stack apps with NestJS, MongoDB, Angular, and Ionic React.",
      "Designed scalable backend architectures for new projects.",
      "Assisted in planning and task distribution for smoother workflows.",
    ],
  },
];
