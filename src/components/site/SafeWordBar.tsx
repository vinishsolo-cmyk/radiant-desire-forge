import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";

/**
 * Persistent safe-word banner shown across every game.
 * Red = stop everything, yellow = slow down. Both surface aftercare prompts.
 */
export function SafeWordBar() {
  const [state, setState] = useState<"green" | "yellow" | "red">("green");
  const [aftercareUntil, setAftercareUntil] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!aftercareUntil) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [aftercareUntil]);

  const trigger = (color: "yellow" | "red") => {
    setState(color);
    setAftercareUntil(Date.now() + (color === "red" ? 5 * 60_000 : 2 * 60_000));
    if (navigator.vibrate) navigator.vibrate([20, 40, 20]);
  };

  const reset = () => {
    setState("green");
    setAftercareUntil(null);
  };

  const remaining =
    aftercareUntil && aftercareUntil > now
      ? Math.ceil((aftercareUntil - now) / 1000)
      : 0;
  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  const bg =
    state === "red"
      ? "bg-red-950/95 border-red-500/60"
      : state === "yellow"
        ? "bg-amber-950/90 border-amber-500/60"
        : "bg-background/85 border-border/60";

  return (
    <div
      className={`sticky top-16 md:top-20 z-30 backdrop-blur-md border-y ${bg} transition-colors`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center gap-3 text-xs">
        <ShieldAlert size={14} className="text-primary shrink-0" />
        <span className="uppercase tracking-[0.25em] text-[10px] text-muted-foreground">
          Safe word
        </span>
        <button
          data-haptic="strong"
          onClick={() => trigger("red")}
          className="px-3 py-1.5 bg-red-600 text-white uppercase tracking-[0.2em] text-[10px] hover:bg-red-500 transition-colors"
        >
          Red · Stop
        </button>
        <button
          onClick={() => trigger("yellow")}
          className="px-3 py-1.5 bg-amber-500 text-amber-950 uppercase tracking-[0.2em] text-[10px] hover:bg-amber-400 transition-colors"
        >
          Yellow · Slow
        </button>
        {state !== "green" && (
          <button
            onClick={reset}
            className="px-3 py-1.5 border border-border text-foreground/80 uppercase tracking-[0.2em] text-[10px] hover:bg-secondary transition-colors"
          >
            Green · Resume
          </button>
        )}
        {state !== "green" && (
          <span className="ml-auto text-[11px] text-foreground/80 italic">
            {state === "red"
              ? "Everything pauses. Breathe. Aftercare timer:"
              : "Slow it down. Check in. Aftercare timer:"}{" "}
            <span className="font-mono text-primary">
              {mm}:{ss}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
