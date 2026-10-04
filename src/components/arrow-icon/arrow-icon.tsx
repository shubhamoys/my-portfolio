import styles from "./arrow-icon.module.scss";

type Direction = "right" | "down" | "up-right";

interface ArrowIconProps {
  /** Defaults to right, the orientation of the source SVG. */
  direction?: Direction;
  className?: string;
}

const DIRECTION_CLASS: Record<Direction, string | undefined> = {
  right: undefined,
  down: styles.down,
  "up-right": styles.upRight,
};

/**
 * Decorative arrow drawn from /assets/icons/right-arrow.svg as a CSS mask,
 * so it inherits the surrounding text colour and scales with font-size (1em).
 */
export function ArrowIcon({ direction = "right", className }: ArrowIconProps) {
  const classes = [styles.arrow, DIRECTION_CLASS[direction], className]
    .filter(Boolean)
    .join(" ");
  return <span className={classes} aria-hidden="true" />;
}
