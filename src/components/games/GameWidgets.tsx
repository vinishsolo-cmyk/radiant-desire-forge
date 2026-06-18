import { useEffect, useMemo, useRef, useState } from "react";
import { Dices, RotateCw, Plus, Minus, Timer as TimerIcon, Send, Heart, Shuffle } from "lucide-react";
import type { Game } from "@/data/games";

/* ---------------------------------------- DICE ---------------------------------------- */
export function DiceRoller({ sides = 20, prompts }: { sides?: number; prompts: string[] }) {
  const [value, setValue] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [prompt, setPrompt] = useState(prompts[0]);

  const roll = () => {
    if (rolling) return;
    setRolling(true);
    if (navigator.vibrate) navigator.vibrate(12);
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setValue(1 + Math.floor(Math.random() * sides));
      if (n > 14) {
        clearInterval(id);
        const final = 1 + Math.floor(Math.random() * sides);
        setValue(final);
        setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
        setRolling(false);
      }
    }, 60);
  };

  return (
    <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
      <div className="flex flex-col items-center justify-center bg-secondary/40 border border-border/60 p-10 aspect-square">
        <div
          className={`font-serif text-[8rem] leading-none text-primary transition-transform duration-300 ${
            rolling ? "scale-95 animate-pulse" : ""
          }`}
        >
          {value}
        </div>
        <p className="mt-3 eyebrow">d{sides}</p>
        <button
          data-haptic="strong"
          onClick={roll}
          disabled={rolling}
          className="mt-6 inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          <Dices size={14} /> {rolling ? "Rolling…" : "Roll"}
        </button>
      </div>
      <div className="space-y-5">
        <p className="eyebrow">Outcome</p>
        <p className="font-serif italic text-2xl md:text-3xl leading-snug text-foreground">
          “{prompt}”
        </p>
        <div className="flex gap-3">
          {[6, 12, 20, 30].map((s) => (
            <button
              key={s}
              onClick={() => setValue(1 + Math.floor(Math.random() * s))}
              className="text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border border-border hover:border-primary hover:text-primary transition-colors"
            >
              d{s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------- WHEEL ---------------------------------------- */
export function SpinWheel({
  segments,
  prompts,
}: {
  segments: string[];
  prompts: string[];
}) {
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const [line, setLine] = useState(prompts[0]);
  const seg = 360 / segments.length;
  const colors = ["#7a1a2c", "#1c1c1c", "#a13b50", "#262626", "#5b1422", "#3a0d18"];

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    if (navigator.vibrate) navigator.vibrate(15);
    const pickIndex = Math.floor(Math.random() * segments.length);
    const target = 360 * 6 + (360 - (pickIndex * seg + seg / 2));
    setAngle((a) => a + target);
    setTimeout(() => {
      setPicked(segments[pickIndex]);
      setLine(prompts[Math.floor(Math.random() * prompts.length)]);
      setSpinning(false);
    }, 4200);
  };

  return (
    <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-center">
      <div className="relative aspect-square max-w-md mx-auto w-full">
        <div className="absolute inset-x-0 -top-2 flex justify-center z-10">
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-primary drop-shadow" />
        </div>
        <svg
          viewBox="-110 -110 220 220"
          className="w-full h-full"
          style={{
            transform: `rotate(${angle}deg)`,
            transition: spinning ? "transform 4s cubic-bezier(.15,.9,.2,1)" : undefined,
          }}
        >
          {segments.map((s, i) => {
            const a0 = (i * seg - 90) * (Math.PI / 180);
            const a1 = ((i + 1) * seg - 90) * (Math.PI / 180);
            const x0 = 100 * Math.cos(a0);
            const y0 = 100 * Math.sin(a0);
            const x1 = 100 * Math.cos(a1);
            const y1 = 100 * Math.sin(a1);
            const large = seg > 180 ? 1 : 0;
            const tx = 62 * Math.cos((a0 + a1) / 2);
            const ty = 62 * Math.sin((a0 + a1) / 2);
            return (
              <g key={i}>
                <path
                  d={`M0 0 L${x0} ${y0} A100 100 0 ${large} 1 ${x1} ${y1} Z`}
                  fill={colors[i % colors.length]}
                  stroke="hsl(var(--background) / 0.4)"
                  strokeWidth="0.4"
                />
                <text
                  x={tx}
                  y={ty}
                  fill="white"
                  fontSize="6"
                  textAnchor="middle"
                  transform={`rotate(${((i + 0.5) * seg) % 360} ${tx} ${ty})`}
                  className="font-serif"
                >
                  {s.length > 16 ? s.slice(0, 14) + "…" : s}
                </text>
              </g>
            );
          })}
          <circle r="14" fill="hsl(var(--primary))" />
        </svg>
      </div>
      <div className="space-y-5">
        <p className="eyebrow">The wheel decides</p>
        <p className="font-serif text-3xl md:text-4xl leading-tight">
          {picked ?? <span className="text-muted-foreground italic">Spin to begin…</span>}
        </p>
        <p className="font-serif italic text-lg text-foreground/80 leading-relaxed">“{line}”</p>
        <button
          data-haptic="strong"
          onClick={spin}
          disabled={spinning}
          className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          <RotateCw size={14} /> {spinning ? "Spinning…" : "Spin"}
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------- COUNTER ---------------------------------------- */
export function EdgingCounter({ prompts }: { prompts: string[] }) {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(10);
  const [line, setLine] = useState(prompts[0]);
  const pct = Math.min(100, (count / goal) * 100);

  const inc = (n: number) => {
    setCount((c) => Math.max(0, c + n));
    if (navigator.vibrate) navigator.vibrate(8);
    setLine(prompts[Math.floor(Math.random() * prompts.length)]);
  };

  return (
    <div className="bg-secondary/40 border border-border/60 p-8 md:p-10 grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
      <div className="text-center">
        <div className="font-serif text-[6rem] leading-none text-primary">{count}</div>
        <p className="mt-2 eyebrow">Edges approved</p>
        <div className="mt-6 h-2 bg-border overflow-hidden">
          <div className="h-full bg-primary transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Goal: {goal}</p>
        <div className="mt-5 flex justify-center gap-2">
          <button onClick={() => inc(-1)} className="p-2 border border-border hover:border-primary"><Minus size={14} /></button>
          <button data-haptic="strong" onClick={() => inc(1)} className="px-6 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 inline-flex items-center gap-2"><Plus size={14} /> Approve edge</button>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {[5, 10, 25, 50].map((g) => (
            <button key={g} onClick={() => setGoal(g)} className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border ${goal === g ? "border-primary text-primary" : "border-border text-muted-foreground"}`}>{g}</button>
          ))}
        </div>
      </div>
      <div>
        <p className="eyebrow">Keyholder whispers</p>
        <p className="mt-3 font-serif italic text-2xl leading-snug">“{line}”</p>
      </div>
    </div>
  );
}

/* ---------------------------------------- TIMER HUNT ---------------------------------------- */
const RIDDLES = [
  { q: "I'm where you wake but never sleep alone. Look beneath what holds your dreams.", a: "pillow" },
  { q: "Cold, full of light, where leftover love is stored.", a: "fridge" },
  { q: "I reflect you in your most honest hour.", a: "mirror" },
  { q: "I hold your warmth at the end of a long day.", a: "robe" },
];
export function TimerHunt({ prompts }: { prompts: string[] }) {
  const [minutes, setMinutes] = useState(30);
  const [remaining, setRemaining] = useState(0);
  const [riddle, setRiddle] = useState(RIDDLES[0]);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [line, setLine] = useState(prompts[0]);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (remaining <= 0) return;
    ref.current = window.setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [remaining]);

  const start = () => {
    setRemaining(minutes * 60);
    setRiddle(RIDDLES[Math.floor(Math.random() * RIDDLES.length)]);
    setLine(prompts[Math.floor(Math.random() * prompts.length)]);
    setFeedback(null);
  };

  const check = (e: React.FormEvent) => {
    e.preventDefault();
    const right = guess.trim().toLowerCase() === riddle.a;
    if (right) {
      setFeedback("Correct. You earned the key.");
      setRemaining(0);
    } else {
      setFeedback("Wrong guess. +24h added to your cage.");
      setRemaining((r) => Math.max(0, r - 60));
    }
    setGuess("");
  };

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-secondary/40 border border-border/60 p-8 text-center">
        <TimerIcon size={28} className="mx-auto text-primary" />
        <div className="mt-4 font-serif text-6xl text-primary font-mono">{mm}:{ss}</div>
        <p className="mt-2 eyebrow">Time remaining</p>
        <div className="mt-5 flex justify-center gap-2">
          {[15, 30, 60, 120].map((m) => (
            <button key={m} onClick={() => setMinutes(m)} className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border ${minutes === m ? "border-primary text-primary" : "border-border text-muted-foreground"}`}>{m}m</button>
          ))}
        </div>
        <button onClick={start} data-haptic="strong" className="mt-5 px-6 py-2.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90">Start hunt</button>
      </div>
      <div>
        <p className="eyebrow">Riddle</p>
        <p className="mt-3 font-serif italic text-xl leading-snug">“{riddle.q}”</p>
        <form onSubmit={check} className="mt-5 flex gap-2">
          <input value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Your guess…" className="flex-1 bg-background border border-border px-3 py-2 text-sm outline-none focus:border-primary" />
          <button className="px-4 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 inline-flex items-center gap-1"><Send size={12} /> Submit</button>
        </form>
        {feedback && <p className="mt-3 text-sm text-primary">{feedback}</p>}
        <p className="mt-6 font-serif italic text-lg text-foreground/80">“{line}”</p>
      </div>
    </div>
  );
}

/* ---------------------------------------- BOARD ---------------------------------------- */
export function BoardGame({ tiles, prompts }: { tiles: string[]; prompts: string[] }) {
  const [pos, setPos] = useState(0);
  const [dice, setDice] = useState(1);
  const [line, setLine] = useState(prompts[0]);

  const advance = () => {
    const r = 1 + Math.floor(Math.random() * 6);
    setDice(r);
    setPos((p) => (p + r) % tiles.length);
    setLine(prompts[Math.floor(Math.random() * prompts.length)]);
    if (navigator.vibrate) navigator.vibrate(10);
  };

  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
        {tiles.map((t, i) => (
          <div
            key={i}
            className={`aspect-square p-3 border text-[10px] uppercase tracking-[0.15em] flex items-center justify-center text-center transition-all ${
              i === pos
                ? "bg-primary text-primary-foreground border-primary scale-105 shadow-lg"
                : "border-border/60 text-muted-foreground hover:border-primary/40"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button data-haptic="strong" onClick={advance} className="px-7 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 inline-flex items-center gap-2"><Dices size={14} /> Roll & move</button>
        <span className="font-serif text-3xl text-primary">{dice}</span>
        <span className="text-xs text-muted-foreground">Tile {pos + 1} · {tiles[pos]}</span>
      </div>
      <p className="mt-5 font-serif italic text-xl leading-snug">“{line}”</p>
    </div>
  );
}

/* ---------------------------------------- COMMAND CONSOLE ---------------------------------------- */
export function CommandConsole({ prompts }: { prompts: string[] }) {
  const [log, setLog] = useState<{ from: "her" | "him"; text: string }[]>([]);
  const [text, setText] = useState("");

  const send = (from: "her" | "him") => {
    if (!text.trim()) return;
    setLog((l) => [...l, { from, text: text.trim() }]);
    setText("");
    if (navigator.vibrate) navigator.vibrate(8);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-secondary/40 border border-border/60 p-6">
        <p className="eyebrow">Quick commands</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {prompts.map((p, i) => (
            <button key={i} onClick={() => setLog((l) => [...l, { from: "her", text: p }])} className="text-[11px] text-left px-3 py-2 border border-border hover:border-primary hover:text-primary transition-colors max-w-full">
              {p.length > 64 ? p.slice(0, 62) + "…" : p}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-background border border-border/60 p-6 flex flex-col">
        <p className="eyebrow">Console</p>
        <div className="mt-3 flex-1 min-h-[14rem] max-h-80 overflow-y-auto space-y-2 text-sm">
          {log.length === 0 && <p className="italic text-muted-foreground">Begin by tapping a command or typing below.</p>}
          {log.map((m, i) => (
            <div key={i} className={`p-2 ${m.from === "her" ? "bg-primary/10 border-l-2 border-primary" : "bg-secondary/60 border-l-2 border-border"}`}>
              <span className="eyebrow mr-2">{m.from === "her" ? "Her" : "Him"}</span>{m.text}
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type…" className="flex-1 bg-background border border-border px-3 py-2 text-sm outline-none focus:border-primary" />
          <button onClick={() => send("her")} className="px-3 py-2 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.2em]">Send as Her</button>
          <button onClick={() => send("him")} className="px-3 py-2 border border-border text-[10px] uppercase tracking-[0.2em]">Him</button>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------- STORY (branching) ---------------------------------------- */
const STORY = [
  { scene: "Tonight is the date. Where does it begin?", choices: ["A hotel rooftop bar", "His apartment, candlelit", "A drive through the city"] },
  { scene: "She sends the first photo. What's in it?", choices: ["Her lipstick mid-application", "Her bare shoulder in the mirror", "His view from your shared closet"] },
  { scene: "He asks for a song. What does she pick?", choices: ["Something slow and dangerous", "Something playful", "A track only you two know"] },
  { scene: "It is late. The text arrives.", choices: ["Wait up for me.", "Don't wait. Sleep.", "Come outside in ten."] },
];
export function StoryAdventure({ prompts }: { prompts: string[] }) {
  const [step, setStep] = useState(0);
  const [path, setPath] = useState<string[]>([]);
  const [line, setLine] = useState(prompts[0]);
  const here = STORY[step];

  const choose = (c: string) => {
    setPath((p) => [...p, c]);
    setLine(prompts[Math.floor(Math.random() * prompts.length)]);
    if (step < STORY.length - 1) setStep(step + 1);
    if (navigator.vibrate) navigator.vibrate(10);
  };

  const reset = () => { setStep(0); setPath([]); };

  return (
    <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
      <div className="bg-secondary/40 border border-border/60 p-8">
        <p className="eyebrow">Scene {step + 1} / {STORY.length}</p>
        <p className="mt-3 font-serif text-2xl leading-snug">{here.scene}</p>
        <div className="mt-6 space-y-2">
          {here.choices.map((c) => (
            <button key={c} onClick={() => choose(c)} className="block w-full text-left px-4 py-3 border border-border hover:border-primary hover:bg-primary/5 transition-all text-sm">
              {c}
            </button>
          ))}
        </div>
        {path.length === STORY.length && (
          <button onClick={reset} className="mt-6 inline-flex items-center gap-2 px-5 py-2 border border-primary text-primary text-xs uppercase tracking-[0.25em]"><Shuffle size={12} /> Start a new night</button>
        )}
      </div>
      <div>
        <p className="eyebrow">Your path so far</p>
        <ol className="mt-3 space-y-2 text-sm">
          {path.map((p, i) => (
            <li key={i} className="border-l-2 border-primary/40 pl-3 italic">{p}</li>
          ))}
        </ol>
        <p className="mt-8 font-serif italic text-xl leading-snug">“{line}”</p>
      </div>
    </div>
  );
}

/* ---------------------------------------- REMOTE CONTROL ---------------------------------------- */
export function RemoteControl({ prompts }: { prompts: string[] }) {
  const [intensity, setIntensity] = useState(0);
  const [pattern, setPattern] = useState<"steady" | "pulse" | "wave">("steady");
  const [line, setLine] = useState(prompts[0]);

  useEffect(() => {
    if (intensity === 0 || !navigator.vibrate) return;
    let pat: number[] = [];
    if (pattern === "steady") pat = [intensity * 30];
    else if (pattern === "pulse") pat = [intensity * 20, 80, intensity * 20];
    else pat = [intensity * 10, 40, intensity * 25, 40, intensity * 40];
    navigator.vibrate(pat);
  }, [intensity, pattern]);

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-secondary/40 border border-border/60 p-8">
        <p className="eyebrow">Intensity</p>
        <input type="range" min={0} max={10} value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} className="w-full mt-4 accent-primary" />
        <p className="font-serif text-5xl text-primary mt-2">{intensity}/10</p>
        <p className="eyebrow mt-6">Pattern</p>
        <div className="mt-3 flex gap-2">
          {(["steady", "pulse", "wave"] as const).map((p) => (
            <button key={p} onClick={() => setPattern(p)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.25em] border ${pattern === p ? "border-primary text-primary" : "border-border"}`}>{p}</button>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Vibration is sent to this device. Pair with an app-enabled toy for the full experience.</p>
      </div>
      <div>
        <p className="eyebrow">Whisper from the driver's seat</p>
        <p className="mt-3 font-serif italic text-2xl leading-snug">“{line}”</p>
        <button onClick={() => setLine(prompts[Math.floor(Math.random() * prompts.length)])} className="mt-5 inline-flex items-center gap-2 px-5 py-2 border border-primary text-primary text-xs uppercase tracking-[0.25em]"><Shuffle size={12} /> New whisper</button>
      </div>
    </div>
  );
}

/* ---------------------------------------- MEMORY MATCH ---------------------------------------- */
export function MemoryMatch({ prompts }: { prompts: string[] }) {
  const pairs = useMemo(() => {
    const seed = ["♠", "♥", "♦", "♣", "★", "✦", "❀", "✿"];
    const arr = [...seed, ...seed].map((s, i) => ({ id: i, s }));
    return arr.sort(() => Math.random() - 0.5);
  }, []);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [line, setLine] = useState(prompts[0]);

  const click = (i: number) => {
    if (flipped.includes(i) || matched.includes(i)) return;
    if (flipped.length === 2) return;
    const next = [...flipped, i];
    setFlipped(next);
    if (navigator.vibrate) navigator.vibrate(6);
    if (next.length === 2) {
      const [a, b] = next;
      if (pairs[a].s === pairs[b].s) {
        setMatched((m) => [...m, a, b]);
        setLine(prompts[Math.floor(Math.random() * prompts.length)]);
        setTimeout(() => setFlipped([]), 600);
      } else {
        setTimeout(() => setFlipped([]), 900);
      }
    }
  };

  return (
    <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-center">
      <div className="grid grid-cols-4 gap-2">
        {pairs.map((p, i) => {
          const show = flipped.includes(i) || matched.includes(i);
          return (
            <button
              key={p.id}
              onClick={() => click(i)}
              className={`aspect-square text-3xl font-serif border transition-all ${
                show ? "bg-primary/10 border-primary text-primary" : "bg-secondary border-border text-secondary"
              } ${matched.includes(i) ? "opacity-50" : ""}`}
            >
              {show ? p.s : "·"}
            </button>
          );
        })}
      </div>
      <div>
        <p className="eyebrow">Matches: {matched.length / 2} / 8</p>
        <p className="mt-4 font-serif italic text-xl leading-snug">“{line}”</p>
      </div>
    </div>
  );
}

/* ---------------------------------------- TRUTH OR DARE CARDS ---------------------------------------- */
const TD = {
  Truth: [
    "Describe the hottest cuckold fantasy you have about me.",
    "What's the most submissive thing you've thought about this week?",
    "Tell me a desire you've never named out loud.",
    "What part of me makes you weakest?",
  ],
  Dare: [
    "Wear your chastity cage out and send me a discreet photo from a public place.",
    "Edge for me right now. Three times. Report back.",
    "Kneel for sixty seconds and tell me what you're grateful for.",
    "Strip to one piece of clothing of my choice.",
  ],
  Wild: [
    "Call me while you're touching yourself in a risky spot and confess everything.",
    "Take a photo of yourself doing something only I would understand.",
    "Tell me a secret and I'll tell you mine.",
    "Make me a one-line poem about tonight.",
  ],
};
export function TruthDare() {
  const [pile, setPile] = useState<"Truth" | "Dare" | "Wild">("Truth");
  const [card, setCard] = useState<string | null>(null);
  const [intensity, setIntensity] = useState<"mild" | "spicy" | "extreme">("spicy");

  const draw = (p?: "Truth" | "Dare" | "Wild") => {
    const which = p ?? pile;
    setPile(which);
    const list = TD[which];
    setCard(list[Math.floor(Math.random() * list.length)]);
    if (navigator.vibrate) navigator.vibrate(10);
  };

  return (
    <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
      <div className="relative">
        <div className="aspect-[3/4] bg-gradient-to-br from-[#5b1422] to-[#1a0508] border border-primary/40 p-8 flex flex-col justify-between text-background">
          <p className="text-[10px] uppercase tracking-[0.35em] text-background/80">{card ? pile : "Velvet Desire"}</p>
          {card ? (
            <p className="font-serif italic text-2xl leading-snug">"{card}"</p>
          ) : (
            <p className="font-serif italic text-3xl leading-tight text-background/90">Draw a card to begin.</p>
          )}
          <p className="text-[10px] uppercase tracking-[0.3em] text-background/70 text-right">{intensity}</p>
        </div>
      </div>
      <div>
        <p className="eyebrow">Pick your pile</p>
        <div className="mt-3 flex gap-2">
          {(["Truth", "Dare", "Wild"] as const).map((p) => (
            <button key={p} onClick={() => draw(p)} className={`px-4 py-2 text-[11px] uppercase tracking-[0.25em] border ${pile === p ? "border-primary text-primary" : "border-border"}`}>{p}</button>
          ))}
        </div>
        <p className="eyebrow mt-6">Intensity</p>
        <div className="mt-3 flex gap-2">
          {(["mild", "spicy", "extreme"] as const).map((p) => (
            <button key={p} onClick={() => setIntensity(p)} className={`px-4 py-2 text-[11px] uppercase tracking-[0.25em] border ${intensity === p ? "border-primary text-primary" : "border-border"}`}>{p}</button>
          ))}
        </div>
        <button data-haptic="strong" onClick={() => draw()} className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90"><Heart size={14} /> Draw a card</button>
      </div>
    </div>
  );
}

/* ---------------------------------------- MASTER WHEEL ---------------------------------------- */
const MASTER_SEGMENTS: Record<string, string[]> = {
  "Pure Random Kink": ["Tease", "Bondage", "Praise", "Worship", "Edging", "Service", "Public", "Roleplay"],
  "Chastity-Focused": ["+1 day", "+3 days", "Ruined", "Approved edge", "Worship", "Tease only", "Roll dice", "Mercy"],
  "Cuckold Edition": ["Comparison", "Service", "Confession", "Reclaim", "Watch", "Cleanup", "Praise her", "Beg"],
  "Exhibitionist Roulette": ["Soft tease", "Quick flash", "Public photo", "Live audio", "Toy outside", "Window scene", "Confess loud", "Brave breath"],
  "Couples Custom Blend": ["One tease", "One trust", "One tender", "One brave", "One playful", "One slow", "One confession", "One kiss"],
};
export function MasterWheel({ prompts }: { prompts: string[] }) {
  const modes = Object.keys(MASTER_SEGMENTS);
  const [mode, setMode] = useState(modes[0]);
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {modes.map((m) => (
          <button key={m} onClick={() => setMode(m)} className={`px-4 py-2 text-[11px] uppercase tracking-[0.25em] border ${mode === m ? "border-primary text-primary bg-primary/5" : "border-border text-muted-foreground"}`}>{m}</button>
        ))}
      </div>
      <SpinWheel segments={MASTER_SEGMENTS[mode]} prompts={prompts} />
      <div className="mt-10 p-6 border border-primary/30 bg-primary/5">
        <p className="eyebrow">Aftercare prompt</p>
        <p className="mt-2 font-serif italic text-lg">Water, a soft touch, two slow breaths together. Tell each other one thing that felt good.</p>
      </div>
    </div>
  );
}

/* ---------------------------------------- WIDGET ROUTER ---------------------------------------- */
export function GameWidget({ game }: { game: Game }) {
  switch (game.widget) {
    case "dice":
      return <DiceRoller sides={game.category === "chastity" ? 30 : 20} prompts={game.prompts} />;
    case "wheel":
      return (
        <SpinWheel
          segments={
            game.slug === "chastity-roulette-wheel"
              ? ["+1 day", "+3 days", "+7 days", "Ruined", "Approved edge", "Mercy", "Worship", "Tease"]
              : game.slug === "exhibispin-wheel"
                ? ["Café", "Park", "Car", "Window", "Elevator", "Balcony", "Restroom", "Hotel lobby"]
                : ["Truth", "Praise", "Confess", "Service", "Reclaim", "Comparison", "Mercy", "Brag"]
          }
          prompts={game.prompts}
        />
      );
    case "counter":
      return <EdgingCounter prompts={game.prompts} />;
    case "timer-hunt":
      return <TimerHunt prompts={game.prompts} />;
    case "board":
      return (
        <BoardGame
          tiles={
            game.slug === "public-quest-board"
              ? ["Start", "Café", "Park", "Train", "Hotel", "Window", "Balcony", "Elevator", "Bookshop", "Bar", "Bridge", "Home"]
              : game.slug === "cuckold-monopoly-of-ownership"
                ? ["Start", "Her Pleasure", "Your Denial", "Bull's Territory", "Service Tile", "Confession", "Reclaim", "Worship", "Tease Tower", "Mercy", "Date Night", "Aftercare"]
                : ["Start", "Tease Tower", "Denial Dungeon", "Worship Plaza", "Mercy Lane", "Devotion Park", "Edging Bridge", "Release Resort", "Ruin Alley", "Cage Garden", "Kneel Square", "Aftercare Inn"]
          }
          prompts={game.prompts}
        />
      );
    case "command":
      return <CommandConsole prompts={game.prompts} />;
    case "story":
      return <StoryAdventure prompts={game.prompts} />;
    case "remote":
      return <RemoteControl prompts={game.prompts} />;
    case "memory":
      return <MemoryMatch prompts={game.prompts} />;
    case "cards":
      return <TruthDare />;
    case "master-wheel":
      return <MasterWheel prompts={game.prompts} />;
  }
}
