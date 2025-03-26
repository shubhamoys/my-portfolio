declare module "react-typical" {
  import { ComponentType } from "react";

  interface TypicalProps {
    steps: (string | number)[];
    loop?: number | boolean;
    wrapper?: string;
    className?: string;
  }

  const Typical: ComponentType<TypicalProps>;
  export default Typical;
}
