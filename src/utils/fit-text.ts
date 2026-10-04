// Wide display type has to fill its line exactly without overflowing.
// Font metrics vary, so measure the real element instead of guessing.

export function fitSize(el: HTMLElement, max: number): number {
  el.style.fontSize = "";
  const current = parseFloat(getComputedStyle(el).fontSize);
  const available = el.clientWidth;
  const needed = el.scrollWidth;
  if (!available || !needed) return current;
  return Math.min(max, Math.floor(current * (available / needed) * 0.995));
}
