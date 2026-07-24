import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Signal = "green" | "yellow";
type Phase = "reading" | "checkin" | "revealed";

const READ_ARTICLE = [
  "Beneath almost every forest lies a network no one designed and few ever see. Threadlike fungi wrap themselves around tree roots and reach out through the soil, linking one tree to the next in a web that can stretch for kilometres. Ecologists sometimes call it the wood wide web.",
  "Through these fungal threads, trees trade sugar, water and nitrogen. A tall tree flush with sunlight can push surplus carbon down into the network, where a younger, shaded seedling can draw on it to survive. Dying trees have been recorded moving their remaining resources into their neighbours, as if settling accounts before they go.",
  "The fungi are not being charitable. They take a cut — up to a third of the sugar a tree produces — as payment for extending its reach. It is one of the oldest trade agreements on Earth, running quietly under our feet for around four hundred million years, long before anyone was around to notice it, and it is still being negotiated today.",
];

const VISIBLE_MS_BEFORE_CHECKIN = 20000;
const FLASH_ON_MS = 600;
const FLASH_GAP_MS = 300;

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
};

const generateSequence = (): Signal[] => {
  const len = 3 + Math.floor(Math.random() * 3); // 3-5
  return Array.from({ length: len }, () =>
    Math.random() > 0.5 ? "green" : "yellow"
  );
};

const InterruptionDemo = () => {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const visibleAccumRef = useRef(0);
  const lastTickRef = useRef<number | null>(null);
  const rafRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [phase, setPhase] = useState<Phase>("reading");
  const [sequence, setSequence] = useState<Signal[]>([]);
  const [litSignal, setLitSignal] = useState<Signal | null>(null);
  const [showingDone, setShowingDone] = useState(false);
  const [inputIndex, setInputIndex] = useState(0);
  const [announce, setAnnounce] = useState("");

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const beginCheckin = useCallback(() => {
    const seq = generateSequence();
    setSequence(seq);
    setInputIndex(0);
    setLitSignal(null);
    setShowingDone(false);
    setPhase("checkin");

    if (reducedMotion) {
      // No flashing: present the sequence as a written, ordered list.
      setShowingDone(true);
      setAnnounce(
        `Check-in. Reproduce this sequence: ${seq
          .map((s, i) => `${i + 1} ${s}`)
          .join(", ")}.`
      );
      return;
    }

    setAnnounce("Check-in. Watch the sequence, then reproduce it.");
    seq.forEach((color, i) => {
      const on = setTimeout(() => {
        setLitSignal(color);
        setAnnounce(`Signal ${i + 1}: ${color}`);
      }, i * (FLASH_ON_MS + FLASH_GAP_MS));
      const off = setTimeout(
        () => setLitSignal(null),
        i * (FLASH_ON_MS + FLASH_GAP_MS) + FLASH_ON_MS
      );
      timeoutsRef.current.push(on, off);
    });
    const done = setTimeout(() => {
      setShowingDone(true);
      setAnnounce("Your turn. Reproduce the sequence using the two buttons.");
    }, seq.length * (FLASH_ON_MS + FLASH_GAP_MS) + 200);
    timeoutsRef.current.push(done);
  }, [reducedMotion]);

  // Accumulate visible time; trigger check-in once past threshold.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lastTickRef.current = Date.now();
          if (!rafRef.current) {
            rafRef.current = setInterval(() => {
              if (lastTickRef.current != null) {
                const now = Date.now();
                visibleAccumRef.current += now - lastTickRef.current;
                lastTickRef.current = now;
              }
              if (
                visibleAccumRef.current >= VISIBLE_MS_BEFORE_CHECKIN &&
                phase === "reading"
              ) {
                if (rafRef.current) {
                  clearInterval(rafRef.current);
                  rafRef.current = null;
                }
                beginCheckin();
              }
            }, 250);
          }
        } else {
          lastTickRef.current = null;
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) clearInterval(rafRef.current);
    };
  }, [phase, beginCheckin]);

  useEffect(() => () => clearTimeouts(), [clearTimeouts]);

  const finish = useCallback(() => {
    clearTimeouts();
    setLitSignal(null);
    setPhase("revealed");
    setAnnounce("Check-in complete. The text is back.");
  }, [clearTimeouts]);

  const handlePress = useCallback(
    (color: Signal) => {
      if (phase !== "checkin" || !showingDone) return;
      // Outcome is identical whether the reproduction is right or wrong.
      const next = inputIndex + 1;
      setInputIndex(next);
      if (next >= sequence.length) {
        finish();
      }
    },
    [phase, showingDone, inputIndex, sequence.length, finish]
  );

  const skip = useCallback(() => {
    if (phase === "revealed") return;
    finish();
  }, [phase, finish]);

  const blurred = phase === "checkin";

  return (
    <section
      ref={sectionRef}
      className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />

      <div className="max-w-[760px] mx-auto px-6 max-[767px]:px-5 relative">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-accent">
            TRY IT
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-display text-foreground mt-6 mb-10"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            This is the hard part. Here, feel it.
          </h2>
        </Reveal>

        {/* Skip control — always available while the demo is active */}
        {phase !== "revealed" && (
          <div className="flex justify-end mb-4">
            <button
              type="button"
              onClick={skip}
              className="font-mono text-[11px] uppercase tracking-wider text-foreground/50 border border-white/10 px-4 py-2 transition-colors duration-200 hover:border-white/30 hover:text-foreground"
            >
              Skip this
            </button>
          </div>
        )}

        <div className="relative">
          {/* Readable article */}
          <div
            className="border border-white/10 p-8 max-[767px]:p-6 space-y-5 transition-[filter] duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              filter: blurred ? "blur(6px)" : "none",
              userSelect: blurred ? "none" : "auto",
            }}
            aria-hidden={blurred}
          >
            <div className="font-mono text-[10px] text-primary/40 tracking-wider">
              READING // THE WOOD WIDE WEB
            </div>
            {READ_ARTICLE.map((para, i) => (
              <p
                key={i}
                className="font-body text-[15px] min-[900px]:text-base text-muted-foreground leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Check-in overlay */}
          {phase === "checkin" && (
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div
                className="w-full max-w-[420px] border border-primary/30 p-6 max-[767px]:p-5"
                style={{ background: "rgba(15, 23, 42, 0.96)" }}
                role="group"
                aria-label="Focus check-in"
              >
                <div className="font-mono text-[10px] text-primary/50 mb-4 tracking-wider uppercase">
                  Check-in
                </div>

                {reducedMotion ? (
                  <ol className="mb-6 space-y-2">
                    {sequence.map((s, i) => (
                      <li
                        key={i}
                        className="font-mono text-[13px] text-foreground flex items-center gap-3"
                      >
                        <span className="text-white/30">{i + 1}.</span>
                        <span
                          style={{
                            color: s === "green" ? "#10B981" : "#F59E0B",
                          }}
                        >
                          {s.toUpperCase()}
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <div className="flex items-center justify-center gap-6 mb-6 h-16">
                    <div
                      className="w-10 h-10 rounded-full border transition-all duration-100"
                      style={{
                        borderColor:
                          litSignal === "green"
                            ? "#10B981"
                            : "rgba(16,185,129,0.3)",
                        background:
                          litSignal === "green" ? "#10B981" : "transparent",
                        boxShadow:
                          litSignal === "green"
                            ? "0 0 24px rgba(16,185,129,0.7)"
                            : "none",
                      }}
                    />
                    <div
                      className="w-10 h-10 rounded-full border transition-all duration-100"
                      style={{
                        borderColor:
                          litSignal === "yellow"
                            ? "#F59E0B"
                            : "rgba(245,158,11,0.3)",
                        background:
                          litSignal === "yellow" ? "#F59E0B" : "transparent",
                        boxShadow:
                          litSignal === "yellow"
                            ? "0 0 24px rgba(245,158,11,0.7)"
                            : "none",
                      }}
                    />
                  </div>
                )}

                <p className="font-mono text-[11px] text-muted-foreground text-center mb-4">
                  {showingDone
                    ? "Reproduce the sequence"
                    : "Watch the sequence…"}
                </p>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => handlePress("green")}
                    disabled={!showingDone}
                    className="flex-1 py-4 border font-mono text-[12px] uppercase tracking-wider transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      borderColor: "rgba(16,185,129,0.5)",
                      color: "#10B981",
                      background: "rgba(16,185,129,0.08)",
                    }}
                  >
                    Green
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePress("yellow")}
                    disabled={!showingDone}
                    className="flex-1 py-4 border font-mono text-[12px] uppercase tracking-wider transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      borderColor: "rgba(245,158,11,0.5)",
                      color: "#F59E0B",
                      background: "rgba(245,158,11,0.08)",
                    }}
                  >
                    Yellow
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Live region for screen readers */}
        <div aria-live="polite" className="sr-only">
          {announce}
        </div>

        {/* Copy revealed afterwards */}
        {phase === "revealed" && (
          <div className="mt-10 space-y-5 border-t border-white/10 pt-10">
            <p className="font-body text-lg max-[767px]:text-base text-foreground leading-relaxed">
              That flicker of irritation is the entire design problem.
            </p>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
              Every check-in costs the child something — and it costs more the
              deeper they were concentrating. Interrupt too often and you become
              the distraction you were built to remove. Interrupt too rarely and
              you learn nothing about them.
            </p>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
              Getting that interval right, for each individual child, is what our
              timing model exists to do. It is also the part we have spent the
              most time getting wrong.
            </p>
            <p className="font-mono text-[11px] text-white/30 pt-2">
              On the real device this is three LEDs and three buttons. No screen.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InterruptionDemo;
