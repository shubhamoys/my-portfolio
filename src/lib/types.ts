import { StaticImageData } from "next/image";

export type TechDetails = {
  logo: string | StaticImageData;
  darkThemeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkThemeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};
