export function isTouchEnabled(): boolean {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
