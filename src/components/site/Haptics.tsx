import { useEffect } from "react";

/**
 * Site-wide subtle haptic feedback for touch devices.
 * - Single light tap (8ms) on any button, link, or [data-haptic] element.
 * - Stronger soft pulse (14ms) on submit / primary CTAs.
 * - Silent no-op on unsupported devices (most desktops).
 * - Respects prefers-reduced-motion.
 */
export function Haptics() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("vibrate" in navigator)) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const buzz = (pattern: number | number[]) => {
      try {
        navigator.vibrate(pattern);
      } catch {
        /* ignore */
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "touch") return;
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const el = t.closest<HTMLElement>(
        'button, a, [role="button"], input[type="submit"], [data-haptic]',
      );
      if (!el) return;
      const strong =
        el.dataset.haptic === "strong" ||
        el.getAttribute("type") === "submit" ||
        el.classList.contains("bg-primary");
      buzz(strong ? [14] : [8]);
    };

    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return null;
}
