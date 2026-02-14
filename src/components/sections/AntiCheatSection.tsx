import Reveal from "@/components/Reveal";
import { ShieldAlert } from "lucide-react";

const AntiCheatSection = () => (
  <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden" style={{ background: "#0F172A" }}>
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />

    <div className="max-w-[800px] mx-auto px-6 max-[767px]:px-5">
      <Reveal>
        <div className="border border-white/10 relative" style={{ background: "rgba(23, 37, 84, 0.4)" }}>
          {/* Corner markers */}
          <span className="absolute -top-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
          <span className="absolute -top-1 -right-1 font-mono text-[10px] text-primary/40">+</span>
          <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
          <span className="absolute -bottom-1 -right-1 font-mono text-[10px] text-primary/40">+</span>

          {/* Header bar */}
          <div className="border-b border-white/10 px-6 py-3 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-destructive" style={{ animation: "pulse-glow 2s infinite", boxShadow: "0 0 8px rgba(239, 68, 68, 0.5)" }} />
            <span className="font-mono text-[11px] text-destructive/80 uppercase tracking-wider">
              SYSTEM ALERT // FAIRNESS ENGINE v3.2
            </span>
          </div>

          <div className="p-8 max-[767px]:p-5 flex gap-6 max-[767px]:flex-col">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 border border-primary/30 flex items-center justify-center" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
                <ShieldAlert size={28} className="text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-display text-2xl max-[767px]:text-xl text-foreground mb-4">
                Gaming Detection Active
              </h3>
              <p className="font-body text-muted-foreground text-[15px] leading-relaxed mb-6">
                We were the kids who cheated. We know the tricks. Our "Fairness Engine" detects button mashing, pause cycling, and fake fast-finishing. We don't punish — we just filter the data.
              </p>

              {/* Detection list */}
              <div className="border border-white/10 p-4" style={{ background: "rgba(15, 23, 42, 0.5)" }}>
                <div className="font-mono text-[10px] text-primary/40 mb-3">DETECTION_PATTERNS:</div>
                <div className="font-mono text-[11px] space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-destructive">⊘</span>
                    <span className="text-white/50">Button mashing</span>
                    <span className="text-white/20 ml-auto">FILTERED</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-destructive">⊘</span>
                    <span className="text-white/50">Pause cycling</span>
                    <span className="text-white/20 ml-auto">FILTERED</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-destructive">⊘</span>
                    <span className="text-white/50">Fake fast-finishing</span>
                    <span className="text-white/20 ml-auto">FILTERED</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5">
                    <span className="text-success">✓</span>
                    <span className="text-success/70">Clean data passed to parent dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AntiCheatSection;
