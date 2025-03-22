import React from "react";
import styles from "./svg-icon-button.module.scss";

interface SvgIconButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  label: string;
}

export default function SvgIconButton({
  onClick,
  className = "",
  children,
  label,
}: SvgIconButtonProps) {
  return (
    <button
      className={`${styles.svgIconButton} ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  );
}
