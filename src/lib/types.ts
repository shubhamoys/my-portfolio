import { StaticImageData } from "next/image";

export type TechDetails = {
  logo: string | StaticImageData;
  darkThemeLogo?: string | StaticImageData;
  label: string;
  url: string;
};
