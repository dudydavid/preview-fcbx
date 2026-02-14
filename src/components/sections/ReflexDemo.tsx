import { useState, useEffect, useCallback } from "react";
import Reveal from "@/components/Reveal";

const ReflexDemo = () => {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(-1); // -1 = idle, 0-5 = animation steps
  const [ripple, setRipple] = useState(false);
  const [greenLit, setGreenLit] = useState(false);
  const [yellowLit, setYellowLit] = useState(false);
  const [leftPressed, setLeftPressed] = useState(false);
  const [middlePressed, setMiddlePressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);

  const resetAll = useCallback(() => {
    setRipple(false);
    setGreenLit(false);
    setYellowLit(false);
    setLeftPressed(false);
    setMiddlePressed(false);
    setRightPressed(false);
    setStep(-1);
  }, []);

  const runSequence = useCallback(() => {
    resetAll();
    setStarted(true);

    // Step 0: Ripple beep
    setTimeout(() => {
      setStep(0);
      setRipple(true);
    }, 200);

    // Step 1: Green flash + Left press
    setTimeout(() => {
      setStep(1);
      setRipple(false);
      setGreenLit(true);
      setLeftPressed(true);
    }, 600);

    // Step 2: Clear
    setTimeout(() => {
      setGreenLit(false);
      setLeftPressed(false);
    }, 800);

    // Step 3: Yellow flash + Middle press
    setTimeout(() => {
      setStep(2);
      setYellowLit(true);
      setMiddlePressed(true);
    }, 1000);

    // Step 4: Clear
    setTimeout(() => {
      setYellowLit(false);
      setMiddlePressed(false);
    }, 1200);

    // Step 5: Green flash + Left press again
    setTimeout(() => {
      setStep(3);
      setGreenLit(true);
      setLeftPressed(true);
    }, 1400);

    // Step 6: Clear all and done
    setTimeout(() => {
      setGreenLit(false);
      setLeftPressed(false);
      setStep(4);
    }, 1800);

    // Reset to allow re-run
    setTimeout(() => {
      setStarted(false);
      setStep(-1);
    }, 3000);
  }, [resetAll]);

  return (
    <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden" style={{ background: "#0F172A" }}>
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-center">
          {/* Left: Device schematic */}
          <Reveal>
            <div className="relative">
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
                  FOCUSBOX_v2.1 // HARDWARE SCHEMATIC
                </div>

                {/* Timer Display */}
                <div className="border border-white/10 p-4 mb-6" style={{ background: "rgba(23, 37, 84, 0.5)" }}>
                  <div className="font-mono text-[10px] text-primary/30 mb-2 uppercase tracking-wider">Timer Display</div>
                  <div className="font-mono text-4xl max-[767px]:text-3xl text-primary font-bold tracking-wider text-center" style={{ textShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}>
                    14:22
                  </div>
                </div>

                {/* LED Array */}
                <div className="border border-white/10 p-4 mb-6" style={{ background: "rgba(23, 37, 84, 0.3)" }}>
                  <div className="font-mono text-[10px] text-primary/30 mb-3 uppercase tracking-wider">LED Array</div>
                  <div className="flex justify-center gap-12">
                    {/* Green LED */}
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-full border transition-all duration-200"
                        style={{
                          borderColor: greenLit ? "#10B981" : "rgba(16, 185, 129, 0.3)",
                          background: greenLit ? "#10B981" : "transparent",
                          boxShadow: greenLit ? "0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.3)" : "none",
                        }}
                      />
                      <span className="font-mono text-[9px] text-white/30">GREEN</span>
                    </div>
                    {/* Yellow LED */}
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-full border transition-all duration-200"
                        style={{
                          borderColor: yellowLit ? "#F59E0B" : "rgba(245, 158, 11, 0.3)",
                          background: yellowLit ? "#F59E0B" : "transparent",
                          boxShadow: yellowLit ? "0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(245, 158, 11, 0.3)" : "none",
                        }}
                      />
                      <span className="font-mono text-[9px] text-white/30">YELLOW</span>
                    </div>
                  </div>
                </div>

                {/* Tactile Buttons */}
                <div className="border border-white/10 p-4" style={{ background: "rgba(23, 37, 84, 0.3)" }}>
                  <div className="font-mono text-[10px] text-primary/30 mb-3 uppercase tracking-wider">Tactile Buttons</div>
                  <div className="flex justify-center gap-4 max-[767px]:gap-3">
                    {[
                      { label: "LEFT", sub: "Yes", pressed: leftPressed },
                      { label: "MID", sub: "Break", pressed: middlePressed },
                      { label: "RIGHT", sub: "Continue", pressed: rightPressed },
                    ].map((btn) => (
                      <div
                        key={btn.label}
                        className="flex flex-col items-center gap-1.5"
                      >
                        <div
                          className="w-14 h-10 max-[767px]:w-12 max-[767px]:h-8 border flex items-center justify-center transition-all duration-150"
                          style={{
                            borderColor: btn.pressed ? "#2563EB" : "rgba(255, 255, 255, 0.2)",
                            background: btn.pressed ? "rgba(37, 99, 235, 0.3)" : "transparent",
                            transform: btn.pressed ? "translateY(2px)" : "translateY(0)",
                            boxShadow: btn.pressed ? "0 0 15px rgba(37, 99, 235, 0.4)" : "none",
                          }}
                        >
                          <span className="font-mono text-[10px] text-white/60">{btn.label}</span>
                        </div>
                        <span className="font-mono text-[8px] text-white/20">{btn.sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ripple effect */}
                {ripple && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        width: 200,
                        height: 200,
                        border: "1px solid rgba(37, 99, 235, 0.4)",
                        animation: "pulse-glow 0.6s ease-out",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Start button */}
              <div className="mt-6 text-center">
                <button
                  onClick={runSequence}
                  disabled={started}
                  className="font-mono text-sm px-8 py-3 border border-white/20 text-foreground transition-all duration-200 hover:bg-white hover:text-background disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  {started ? (step === 4 ? "✓ SEQUENCE COMPLETE" : "RUNNING...") : "TEST YOUR REFLEX"}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Right: Copy */}
          <Reveal delay={200}>
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-accent mb-4 block">
                REFLEX CHECK // ENGAGEMENT TEST
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
                A rapid-fire reflex check that wakes up the brain without breaking the flow. Green → Yellow → Green. Fast. Snappy. Three buttons, zero hesitation.
              </p>
              <div className="border border-white/10 p-4">
                <div className="font-mono text-[10px] text-primary/40 mb-2">SEQUENCE_LOG:</div>
                <div className="font-mono text-[12px] text-white/50 space-y-1">
                  <div><span className="text-success">▸</span> BEEP — Visual ripple from device</div>
                  <div><span className="text-warm-accent">▸</span> FLASH — LED sequence: G → Y → G</div>
                  <div><span className="text-primary">▸</span> ACTION — Button response: L → M → L</div>
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
