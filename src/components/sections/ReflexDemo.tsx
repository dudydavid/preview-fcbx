import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import { toast } from "sonner";

type LEDColor = "green" | "yellow";
type GameState = "idle" | "showing" | "input" | "success" | "fail" | "break";

const ReflexDemo = () => {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [sequence, setSequence] = useState<LEDColor[]>([]);
  const [activeFlash, setActiveFlash] = useState<LEDColor | null>(null);
  const [userInput, setUserInput] = useState<LEDColor[]>([]);
  const [inputIndex, setInputIndex] = useState(0);
  const [successFlashCount, setSuccessFlashCount] = useState(0);
  const [shake, setShake] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  useEffect(() => () => clearTimeouts(), [clearTimeouts]);

  const generateSequence = (): LEDColor[] => {
    const len = 3 + Math.floor(Math.random() * 3); // 3-5
    return Array.from({ length: len }, () => (Math.random() > 0.4 ? "green" : "yellow"));
  };

  const playSequence = useCallback((seq: LEDColor[]) => {
    setGameState("showing");
    seq.forEach((color, i) => {
      const onTime = setTimeout(() => setActiveFlash(color), i * 600);
      const offTime = setTimeout(() => setActiveFlash(null), i * 600 + 400);
      timeoutsRef.current.push(onTime, offTime);
    });
    const doneTime = setTimeout(() => {
      setGameState("input");
      setInputIndex(0);
      setUserInput([]);
    }, seq.length * 600 + 200);
    timeoutsRef.current.push(doneTime);
  }, []);

  const startGame = useCallback(() => {
    clearTimeouts();
    setSuccessFlashCount(0);
    setShake(false);
    const seq = generateSequence();
    setSequence(seq);
    playSequence(seq);
  }, [clearTimeouts, playSequence]);

  const flashSuccess = useCallback(() => {
    setGameState("success");
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setSuccessFlashCount(count);
      if (count >= 6) {
        clearInterval(interval);
        toast("CHECK_VALIDATED: HIGH_ENGAGEMENT_DETECTED", {
          description: "Perfect! Your brain is in the zone. This is how we build the Focus Muscle.",
          duration: 4000,
        });
        setTimeout(() => setGameState("idle"), 2000);
      }
    }, 200);
    timeoutsRef.current.push(interval as unknown as ReturnType<typeof setTimeout>);
  }, []);

  const handleButtonPress = useCallback(
    (color: LEDColor) => {
      if (gameState !== "input") return;

      const expected = sequence[inputIndex];
      if (color === expected) {
        setUserInput((prev) => [...prev, color]);
        // Brief flash feedback
        setActiveFlash(color);
        setTimeout(() => setActiveFlash(null), 150);

        if (inputIndex + 1 >= sequence.length) {
          flashSuccess();
        } else {
          setInputIndex((prev) => prev + 1);
        }
      } else {
        setGameState("fail");
        setShake(true);
        setTimeout(() => setShake(false), 500);
        toast("CALIBRATION_REQUIRED", {
          description: "Let's try that again! Focus is a practice, not a test.",
          duration: 3000,
        });
        setTimeout(() => setGameState("idle"), 2000);
      }
    },
    [gameState, sequence, inputIndex, flashSuccess]
  );

  const handleBreak = useCallback(() => {
    if (gameState !== "input" && gameState !== "showing") return;
    clearTimeouts();
    setActiveFlash(null);
    setGameState("break");
    toast("BREAK_REQUESTED", {
      description: "Break requested. FocusBox is a no-pressure system.",
      duration: 3000,
    });
    setTimeout(() => setGameState("idle"), 2500);
  }, [gameState, clearTimeouts]);

  const isGreenLit = activeFlash === "green" || (gameState === "success" && successFlashCount % 2 === 1);
  const isYellowLit = activeFlash === "yellow";
  const redPulse = gameState === "idle" || gameState === "input";

  const statusText = (() => {
    switch (gameState) {
      case "idle": return "SYSTEM_READY";
      case "showing": return "TRANSMITTING_SEQUENCE...";
      case "input": return `AWAITING_INPUT [${inputIndex + 1}/${sequence.length}]`;
      case "success": return "CHECK_VALIDATED ✓";
      case "fail": return "CALIBRATION_REQUIRED";
      case "break": return "SAFETY_HALT_ACTIVE";
    }
  })();

  return (
    <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden" style={{ background: "#0F172A" }}>
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Device */}
          <Reveal>
            <motion.div
              className="relative"
              animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {/* Device frame */}
              <div
                className="relative border border-white/20 p-8 max-[767px]:p-5"
                style={{ background: "rgba(15, 23, 42, 0.8)" }}
              >
                {/* Corner markers */}
                <span className="absolute -top-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
                <span className="absolute -top-1 -right-1 font-mono text-[10px] text-primary/40">+</span>
                <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
                <span className="absolute -bottom-1 -right-1 font-mono text-[10px] text-primary/40">+</span>

                {/* Label */}
                <div className="font-mono text-[10px] text-primary/40 mb-4 tracking-wider">
                  FOCUSBOX_v2.1 // ENGAGEMENT ENGINE
                </div>

                {/* Timer Display */}
                <div className="border border-white/10 p-4 mb-6" style={{ background: "rgba(23, 37, 84, 0.5)" }}>
                  <div className="font-mono text-[10px] text-primary/30 mb-2 uppercase tracking-wider">Timer Display</div>
                  <div className="font-mono text-4xl max-[767px]:text-3xl text-primary font-bold tracking-wider text-center" style={{ textShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}>
                    14:22
                  </div>
                </div>

                {/* LED Array - 3 LEDs */}
                <div className="border border-white/10 p-4 mb-6" style={{ background: "rgba(23, 37, 84, 0.3)" }}>
                  <div className="font-mono text-[10px] text-primary/30 mb-3 uppercase tracking-wider">LED Array</div>
                  <div className="flex justify-center gap-10 max-[767px]:gap-6">
                    {/* Green LED */}
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        className="w-7 h-7 rounded-full border"
                        animate={{
                          borderColor: isGreenLit ? "#10B981" : "rgba(16, 185, 129, 0.3)",
                          background: isGreenLit ? "#10B981" : "transparent",
                          boxShadow: isGreenLit
                            ? "0 0 24px rgba(16, 185, 129, 0.7), 0 0 48px rgba(16, 185, 129, 0.3)"
                            : "0 0 0px transparent",
                        }}
                        transition={{ duration: 0.1 }}
                      />
                      <span className="font-mono text-[9px] text-white/30">GREEN</span>
                    </div>
                    {/* Yellow LED */}
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        className="w-7 h-7 rounded-full border"
                        animate={{
                          borderColor: isYellowLit ? "#F59E0B" : "rgba(245, 158, 11, 0.3)",
                          background: isYellowLit ? "#F59E0B" : "transparent",
                          boxShadow: isYellowLit
                            ? "0 0 24px rgba(245, 158, 11, 0.7), 0 0 48px rgba(245, 158, 11, 0.3)"
                            : "0 0 0px transparent",
                        }}
                        transition={{ duration: 0.1 }}
                      />
                      <span className="font-mono text-[9px] text-white/30">YELLOW</span>
                    </div>
                    {/* Red LED - always on, pulsing */}
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        className="w-7 h-7 rounded-full border"
                        animate={{
                          borderColor: gameState === "break" ? "#EF4444" : "rgba(239, 68, 68, 0.5)",
                          background: gameState === "break" ? "#EF4444" : "rgba(239, 68, 68, 0.6)",
                          boxShadow: redPulse
                            ? [
                                "0 0 8px rgba(239, 68, 68, 0.3)",
                                "0 0 16px rgba(239, 68, 68, 0.5)",
                                "0 0 8px rgba(239, 68, 68, 0.3)",
                              ]
                            : gameState === "break"
                            ? "0 0 30px rgba(239, 68, 68, 0.8)"
                            : "0 0 8px rgba(239, 68, 68, 0.3)",
                        }}
                        transition={{ duration: redPulse ? 2 : 0.2, repeat: redPulse ? Infinity : 0 }}
                      />
                      <span className="font-mono text-[9px] text-white/30">RED</span>
                    </div>
                  </div>
                </div>

                {/* Tactile Buttons */}
                <div className="border border-white/10 p-4" style={{ background: "rgba(23, 37, 84, 0.3)" }}>
                  <div className="font-mono text-[10px] text-primary/30 mb-3 uppercase tracking-wider">Tactile Buttons</div>
                  <div className="flex justify-center gap-4 max-[767px]:gap-3">
                    {/* YES (Green) */}
                    <button
                      onClick={() => handleButtonPress("green")}
                      disabled={gameState !== "input"}
                      className="flex flex-col items-center gap-1.5 group"
                    >
                      <motion.div
                        className="w-16 h-11 max-[767px]:w-13 max-[767px]:h-9 border flex items-center justify-center cursor-pointer select-none"
                        style={{
                          borderColor: activeFlash === "green" && gameState === "showing"
                            ? "rgba(16, 185, 129, 0.6)"
                            : "rgba(255, 255, 255, 0.2)",
                          background: activeFlash === "green" && gameState === "showing"
                            ? "rgba(16, 185, 129, 0.15)"
                            : "transparent",
                        }}
                        whileTap={gameState === "input" ? { scale: 0.92, y: 3 } : {}}
                        whileHover={gameState === "input" ? { borderColor: "rgba(16, 185, 129, 0.5)" } : {}}
                        transition={{ duration: 0.1 }}
                      >
                        <span className="font-mono text-[10px] text-white/60 group-disabled:text-white/20">YES</span>
                      </motion.div>
                      <span className="font-mono text-[8px] text-white/20">LEFT</span>
                    </button>

                    {/* CONTINUE (Yellow) */}
                    <button
                      onClick={() => handleButtonPress("yellow")}
                      disabled={gameState !== "input"}
                      className="flex flex-col items-center gap-1.5 group"
                    >
                      <motion.div
                        className="w-16 h-11 max-[767px]:w-13 max-[767px]:h-9 border flex items-center justify-center cursor-pointer select-none"
                        style={{
                          borderColor: activeFlash === "yellow" && gameState === "showing"
                            ? "rgba(245, 158, 11, 0.6)"
                            : "rgba(255, 255, 255, 0.2)",
                          background: activeFlash === "yellow" && gameState === "showing"
                            ? "rgba(245, 158, 11, 0.15)"
                            : "transparent",
                        }}
                        whileTap={gameState === "input" ? { scale: 0.92, y: 3 } : {}}
                        whileHover={gameState === "input" ? { borderColor: "rgba(245, 158, 11, 0.5)" } : {}}
                        transition={{ duration: 0.1 }}
                      >
                        <span className="font-mono text-[10px] text-white/60 group-disabled:text-white/20">CONT</span>
                      </motion.div>
                      <span className="font-mono text-[8px] text-white/20">MIDDLE</span>
                    </button>

                    {/* BREAK (Red) - always active as safety halt */}
                    <button
                      onClick={handleBreak}
                      disabled={gameState !== "input" && gameState !== "showing"}
                      className="flex flex-col items-center gap-1.5 group"
                    >
                      <motion.div
                        className="w-16 h-11 max-[767px]:w-13 max-[767px]:h-9 border flex items-center justify-center cursor-pointer select-none"
                        style={{
                          borderColor: "rgba(239, 68, 68, 0.4)",
                          background: "rgba(239, 68, 68, 0.05)",
                        }}
                        whileTap={
                          gameState === "input" || gameState === "showing"
                            ? { scale: 0.92, y: 3, background: "rgba(239, 68, 68, 0.3)" }
                            : {}
                        }
                        transition={{ duration: 0.1 }}
                      >
                        <span className="font-mono text-[10px] text-red-400/70 group-disabled:text-red-400/20">BREAK</span>
                      </motion.div>
                      <span className="font-mono text-[8px] text-white/20">RIGHT</span>
                    </button>
                  </div>
                </div>

                {/* Status bar */}
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                  <span className="font-mono text-[10px] text-primary/50">{statusText}</span>
                  <div className="flex gap-1">
                    {sequence.map((c, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background:
                            i < userInput.length
                              ? userInput[i] === sequence[i]
                                ? "#10B981"
                                : "#EF4444"
                              : "rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Start button */}
              <div className="mt-6 text-center">
                <button
                  onClick={startGame}
                  disabled={gameState !== "idle"}
                  className="font-mono text-sm px-8 py-3 border border-white/20 text-foreground transition-all duration-200 hover:bg-foreground hover:text-background disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  {gameState === "idle"
                    ? "START ENGAGEMENT CHECK"
                    : gameState === "success"
                    ? "✓ VALIDATED"
                    : gameState === "fail"
                    ? "RETRY AVAILABLE..."
                    : gameState === "break"
                    ? "HALTED"
                    : "ACTIVE..."}
                </button>
              </div>

              {/* Investor annotations */}
              <div className="mt-6 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-[9px] text-primary/50 mt-0.5 shrink-0">▸ [Proprietary Logic]</span>
                  <span className="font-mono text-[10px] text-white/30">Engagement Velocity vs. Latency Tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-[9px] text-red-400/50 mt-0.5 shrink-0">▸ [Safety Protocol]</span>
                  <span className="font-mono text-[10px] text-white/30">Red-Channel dedicated to Halt / Low-Battery</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-[9px] text-success/50 mt-0.5 shrink-0">▸ [Cognitive Science]</span>
                  <span className="font-mono text-[10px] text-white/30">Whack-a-mole mechanics trigger pattern-recognition, not rote memory</span>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Right: Copy */}
          <Reveal delay={200}>
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-accent mb-4 block">
                REFLEX CHECK // COGNITIVE PROBE
              </span>
              <h2
                className="font-display text-foreground mb-6"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
              >
                We don't test memory.
                <br />
                <span className="text-primary">We test engagement.</span>
              </h2>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
                A rapid-fire reflex check that wakes up the brain without breaking the flow. Watch the LED sequence, then replicate it. Fast. Snappy. Three buttons, zero hesitation.
              </p>

              <div className="border border-white/10 p-4 mb-6">
                <div className="font-mono text-[10px] text-primary/40 mb-2">PROTOCOL_SPEC:</div>
                <div className="font-mono text-[12px] text-white/50 space-y-1">
                  <div><span className="text-success">▸</span> OBSERVE — Random LED sequence (3–5 flashes)</div>
                  <div><span className="text-warm-accent">▸</span> REPLICATE — Press buttons in correct order</div>
                  <div><span className="text-primary">▸</span> VALIDATE — System confirms engagement level</div>
                  <div><span className="text-red-400">▸</span> BREAK — Red button halts at any time. No penalty.</div>
                </div>
              </div>

              <div className="border border-white/10 p-4">
                <div className="font-mono text-[10px] text-primary/40 mb-2">SEQUENCE_LOG:</div>
                <div className="font-mono text-[12px] text-white/40 space-y-1">
                  <AnimatePresence mode="wait">
                    {gameState === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <span className="text-white/20">Awaiting start command...</span>
                      </motion.div>
                    )}
                    {gameState === "showing" && (
                      <motion.div key="showing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <span className="text-primary">Transmitting {sequence.length}-step sequence...</span>
                      </motion.div>
                    )}
                    {gameState === "input" && (
                      <motion.div key="input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <span className="text-warm-accent">Input phase: {inputIndex}/{sequence.length} received</span>
                      </motion.div>
                    )}
                    {gameState === "success" && (
                      <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <span className="text-success">✓ HIGH_ENGAGEMENT_DETECTED</span>
                      </motion.div>
                    )}
                    {gameState === "fail" && (
                      <motion.div key="fail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <span className="text-red-400">↻ CALIBRATION_REQUIRED — Retrying...</span>
                      </motion.div>
                    )}
                    {gameState === "break" && (
                      <motion.div key="break" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <span className="text-red-400">■ SAFETY_HALT — No-pressure system active</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ReflexDemo;
