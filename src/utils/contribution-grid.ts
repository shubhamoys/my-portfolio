// 3×5 pixel font for the word lit up in the contribution grid.
const FONT: Record<string, readonly string[]> = {
  B: ["110", "101", "110", "101", "110"],
  U: ["101", "101", "101", "101", "111"],
  I: ["111", "010", "010", "010", "111"],
  L: ["100", "100", "100", "100", "111"],
  D: ["110", "101", "101", "101", "110"],
  S: ["111", "100", "111", "001", "111"],
  H: ["101", "101", "111", "101", "101"],
  P: ["111", "101", "111", "100", "100"],
  R: ["110", "101", "110", "101", "101"],
  E: ["111", "100", "110", "100", "111"],
};

export interface GridCell {
  col: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export const GRID_ROWS = 7;

/** Cells in column-major order. Fixed seed → identical pattern on every load. */
export function buildGridCells(word: string, cols: number): GridCell[] {
  const upper = word.toUpperCase();
  const width = upper.length * 4 - 1;
  const start = Math.max(0, cols - width - 3);
  const lit = new Set<string>();

  upper.split("").forEach((ch, i) => {
    (FONT[ch] ?? []).forEach((row, r) => {
      row.split("").forEach((bit, c) => {
        if (bit === "1") lit.add(`${start + i * 4 + c}-${r + 1}`);
      });
    });
  });

  let seed = 11;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const cells: GridCell[] = [];
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < GRID_ROWS; row++) {
      let level: GridCell["level"];
      if (lit.has(`${col}-${row}`)) {
        level = 4;
      } else {
        const x = rnd();
        level = x < 0.5 ? 0 : x < 0.78 ? 1 : x < 0.93 ? 2 : 3;
      }
      cells.push({ col, level });
    }
  }
  return cells;
}
