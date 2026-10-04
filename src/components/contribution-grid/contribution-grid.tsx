"use client";

import { useMemo, type CSSProperties } from "react";
import { ArrowIcon } from "@/components/arrow-icon/arrow-icon";
import { PHONE_QUERY, useMediaQuery } from "@/hooks/use-media-query";
import { buildGridCells } from "@/utils/contribution-grid";
import styles from "./contribution-grid.module.scss";

const LEVEL_CLASS = [styles.l0, styles.l1, styles.l2, styles.l3, styles.l4] as const;

/** 52 weeks on tablet/desktop, 26 on phones. */
export function ContributionGrid({ word }: { word: string }) {
  const isPhone = useMediaQuery(PHONE_QUERY);
  const cells = useMemo(
    () => buildGridCells(word, isPhone ? 26 : 52),
    [word, isPhone],
  );

  return (
    <div className={styles.contrib}>
      <div className={styles.head}>
        <span>{isPhone ? "// last 26 weeks" : "// contributions, last 52 weeks"}</span>
        <span className={styles.hint} aria-hidden="true">
          look closer <ArrowIcon />
        </span>
      </div>
      <div
        className={styles.grid}
        role="img"
        aria-label={`Contribution-style grid with the word ${word.toUpperCase()} lit up in it`}
      >
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`${styles.cell} ${LEVEL_CLASS[cell.level]}`}
            style={{ "--col": cell.col } as CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
