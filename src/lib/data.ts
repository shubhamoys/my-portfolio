import { GithubIcon, GmailIcon, LinkedInIcon } from "./svg-icons";
import { TechDetails } from "./types";

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
    label: "Sass",
    logo: "/assets/tech-logos/sass-logo.svg",
    url: "https://sass-lang.com/",
  },
  {
    label: "Git",
    logo: "/assets/tech-logos/git-logo.svg",
    url: "https://git-scm.com/",
  },
];
