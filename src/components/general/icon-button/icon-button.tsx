import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import styles from "./icon-button.module.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  buttonClassName?: string;
  imageClassName?: string;
}

export default function IconButton({
  src,
  alt,
  width = 24,
  height = 24,
  buttonClassName = "",
  imageClassName = "",
  onClick,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={`${styles.iconButton} ${buttonClassName}`}
      onClick={onClick}
      {...rest}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={imageClassName}
      />
    </button>
  );
}
