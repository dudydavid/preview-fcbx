import Reveal from "@/components/Reveal";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Label,
} from "recharts";

const data = [
  { time: "0:00", focus: 90 },
  { time: "1:00", focus: 88 },
  { time: "2:00", focus: 85 },
  { time: "3:00", focus: 82 },
  { time: "4:00", focus: 78 },
  { time: "5:00", focus: 55 },
  { time: "6:00", focus: 32 },
  { time: "7:00", focus: 30 },
  { time: "8:00", focus: 38 },
  { time: "9:00", focus: 52 },
  { time: "10:00", focus: 65 },
  { time: "11:00", focus: 74 },
  { time: "12:00", focus: 80 },
  { time: "13:00", focus: 83 },
  { time: "14:00", focus: 85 },
];

const RecoveryChart = () => (
  <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden" style={{ background: "#172554" }}>
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />

    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <Reveal>
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-accent mb-4 block">
              BLACK BOX DATA // RECOVERY CURVE
            </span>
            <h2
              className="font-display text-foreground mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
            >
              Most apps lie.
              <br />
              <span className="text-primary">We capture the struggle.</span>
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              Most apps show a straight line. FocusBox captures the "Recovery Score" — measuring how fast your child bounces back after a break. The goal isn't to never lose focus; it's to learn how to return.
            </p>
            <div className="border border-white/10 p-4">
              <div className="font-mono text-[10px] text-primary/40 mb-2">METRICS_OUTPUT:</div>
              <div className="font-mono text-[12px] space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/40">Recovery Score</span>
                  <span className="text-success font-bold">92/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Time to Recovery</span>
                  <span className="text-primary font-bold">4m 30s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Peak Focus</span>
                  <span className="text-white/70 font-bold">90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Lowest Point</span>
                  <span className="text-destructive font-bold">30%</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Chart */}
        <Reveal delay={200}>
          <div className="border border-white/10 p-6 max-[767px]:p-3 relative" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
            {/* Corner markers */}
            <span className="absolute -top-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
            <span className="absolute -top-1 -right-1 font-mono text-[10px] text-primary/40">+</span>
            <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
            <span className="absolute -bottom-1 -right-1 font-mono text-[10px] text-primary/40">+</span>

            <div className="font-mono text-[10px] text-primary/40 mb-4 tracking-wider">
              FOCUSBOX // SESSION_ANALYSIS // REALTIME
            </div>

            <div className="w-full" style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
                  <CartesianGrid stroke="rgba(37, 99, 235, 0.1)" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="time"
                    tick={{ fill: "rgba(148, 163, 184, 0.5)", fontSize: 10, fontFamily: "'JetBrains Mono'" }}
                    stroke="rgba(37, 99, 235, 0.2)"
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: "rgba(148, 163, 184, 0.5)", fontSize: 10, fontFamily: "'JetBrains Mono'" }}
                    stroke="rgba(37, 99, 235, 0.2)"
                  />
                  <ReferenceLine y={30} stroke="rgba(239, 68, 68, 0.4)" strokeDasharray="4 4">
                    <Label
                      value="⚠ Distraction Event"
                      position="insideTopRight"
                      fill="rgba(239, 68, 68, 0.6)"
                      fontSize={10}
                      fontFamily="'JetBrains Mono'"
                    />
                  </ReferenceLine>
                  <ReferenceLine y={85} stroke="rgba(16, 185, 129, 0.4)" strokeDasharray="4 4">
                    <Label
                      value="✓ Recovery: 92/100"
                      position="insideBottomRight"
                      fill="rgba(16, 185, 129, 0.6)"
                      fontSize={10}
                      fontFamily="'JetBrains Mono'"
                    />
                  </ReferenceLine>
                  <Line
                    type="monotone"
                    dataKey="focus"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: "#10B981", stroke: "rgba(16, 185, 129, 0.3)", strokeWidth: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default RecoveryChart;
