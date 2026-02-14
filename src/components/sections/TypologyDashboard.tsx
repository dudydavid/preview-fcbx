import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import {
  LONGITUDINAL_DATA,
  TYPOLOGY_INFO,
  METRIC_INFO,
  type ChildTypology,
  type MetricKey,
} from "@/data/longitudinalData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
} from "recharts";
import { Zap, Target, Brain, Gauge } from "lucide-react";

const TYPOLOGY_ICONS: Record<ChildTypology, typeof Zap> = {
  spark: Zap,
  hyperfocuser: Target,
  sprinter: Gauge,
};

const METRIC_ICONS: Record<MetricKey, typeof Brain> = {
  deep_focus: Brain,
  focus_stamina: Gauge,
  bounce_back: Zap,
  sweet_spot: Target,
};

const FocusManifesto = () => (
  <Reveal>
    <div className="relative border border-white/10 p-8 max-[767px]:p-5 mb-16 max-[767px]:mb-10" style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)" }}>
      {/* Corner crosshairs */}
      <span className="absolute -top-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
      <span className="absolute -top-1 -right-1 font-mono text-[10px] text-primary/40">+</span>
      <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
      <span className="absolute -bottom-1 -right-1 font-mono text-[10px] text-primary/40">+</span>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10">
        <h3 className="font-display text-4xl max-[767px]:text-2xl font-extrabold uppercase tracking-tight text-warm-accent mb-6" style={{ letterSpacing: "-0.02em" }}>
          THE SINGLE METRIC IS A GIMMICK
        </h3>

        <div className="space-y-4 font-body text-[15px] max-[767px]:text-[14px] text-white/70 leading-relaxed">
          <p>
            Focus is <span className="font-mono font-bold text-primary">NOT</span> a single number. Any claim otherwise is a{" "}
            <span className="font-mono font-bold text-warm-accent">dangerous oversimplification</span>.
          </p>
          <p>
            We refuse to hide your child behind{" "}
            <span className="font-mono font-bold text-primary">fabricated averages</span>. A single, clairvoyant metric simply does not exist.
          </p>

          <div className="py-4 space-y-1 font-mono text-[15px] max-[767px]:text-[13px]">
            <div>
              <span className="text-white/40">Low stamina?</span>{" "}
              <span className="font-bold text-success">Elite recovery.</span>
            </div>
            <div>
              <span className="text-white/40">Slow warm-up?</span>{" "}
              <span className="font-bold text-primary">Unbreakable flow.</span>
            </div>
          </div>

          <p>
            We don't invent progress. We track{" "}
            <span className="font-mono font-bold text-primary">four honest dimensions</span> of attention.
          </p>
          <p className="text-white/50">
            Every child is unique. They deserve to be seen for how they actually work.
          </p>
        </div>
      </div>

      {/* Subtle glow */}
      <div className="absolute -inset-px opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.1), transparent 50%, rgba(245,158,11,0.1))" }} />
    </div>
  </Reveal>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="border border-white/10 px-3 py-2 font-mono text-[11px]" style={{ background: "rgba(15,23,42,0.95)" }}>
      <div className="text-white/40 mb-1">SESSION_{label}</div>
      <div className="text-foreground font-bold">{payload[0].value.toFixed(1)}%</div>
    </div>
  );
};

const TypologyDashboard = () => {
  const [selectedTypology, setSelectedTypology] = useState<ChildTypology>("spark");
  const [selectedMetric, setSelectedMetric] = useState<MetricKey>("deep_focus");

  const data = LONGITUDINAL_DATA[selectedTypology];
  const metricInfo = METRIC_INFO[selectedMetric];
  const typologyInfo = TYPOLOGY_INFO[selectedTypology];

  const { day1, day30, delta } = useMemo(() => {
    const d = LONGITUDINAL_DATA[selectedTypology];
    const d1 = d[0][selectedMetric];
    const d30 = d[d.length - 1][selectedMetric];
    return { day1: d1, day30: d30, delta: d30 - d1 };
  }, [selectedTypology, selectedMetric]);

  // Build comparison data with baseline area
  const comparisonData = useMemo(() => {
    return data.map((d) => ({
      session: d.session,
      value: d[selectedMetric],
      baseline: day1,
    }));
  }, [data, selectedMetric, day1]);

  return (
    <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden" style={{ background: "#0F172A" }}>
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-12 max-[767px]:mb-8">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-accent">
              MULTI-METRIC TYPOLOGY ENGINE
            </span>
            <h2 className="font-display mt-4 mb-4 text-foreground" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
              Your child is not a number.
            </h2>
            <p className="font-body text-muted-foreground max-w-[560px] mx-auto text-[15px]">
              Select your child's pattern. Explore four dimensions of focus. See their real trajectory.
            </p>
          </div>
        </Reveal>

        {/* Focus Manifesto */}
        <FocusManifesto />

        {/* Typology Selector */}
        <Reveal delay={100}>
          <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-4 mb-12 max-[767px]:mb-8">
            {(Object.keys(TYPOLOGY_INFO) as ChildTypology[]).map((key) => {
              const info = TYPOLOGY_INFO[key];
              const Icon = TYPOLOGY_ICONS[key];
              const isActive = selectedTypology === key;

              return (
                <motion.button
                  key={key}
                  onClick={() => setSelectedTypology(key)}
                  className={`relative text-left p-6 max-[767px]:p-4 border transition-all duration-200 ${
                    isActive
                      ? "border-primary bg-primary/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  style={{ background: isActive ? "rgba(37,99,235,0.08)" : "rgba(255,255,255,0.02)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Corner markers */}
                  <span className="absolute -top-1 -left-1 font-mono text-[8px] text-primary/30">+</span>
                  <span className="absolute -top-1 -right-1 font-mono text-[8px] text-primary/30">+</span>

                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 border flex items-center justify-center ${isActive ? "border-primary/50 bg-primary/10" : "border-white/10"}`}>
                      <Icon size={16} className={isActive ? "text-primary" : "text-white/40"} />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] font-bold text-foreground">{info.name}</div>
                      <div className="font-mono text-[9px] text-white/30 uppercase">{info.label}</div>
                    </div>
                  </div>
                  <p className="font-body text-[13px] text-white/50 leading-relaxed">{info.description}</p>

                  {isActive && (
                    <motion.div
                      layoutId="typology-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        {/* Metric Selector */}
        <Reveal delay={200}>
          <div className="flex flex-wrap gap-2 mb-8 max-[767px]:mb-6">
            {(Object.keys(METRIC_INFO) as MetricKey[]).map((key) => {
              const info = METRIC_INFO[key];
              const Icon = METRIC_ICONS[key];
              const isActive = selectedMetric === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedMetric(key)}
                  className={`flex items-center gap-2 px-4 py-2 border font-mono text-[11px] uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "border-white/30 text-foreground"
                      : "border-white/10 text-white/40 hover:text-white/60 hover:border-white/20"
                  }`}
                  style={{
                    background: isActive ? `${info.color}15` : "transparent",
                    borderColor: isActive ? `${info.color}40` : undefined,
                  }}
                >
                  <Icon size={12} style={{ color: isActive ? info.color : undefined }} />
                  {info.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Metric Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMetric}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mb-8 max-[767px]:mb-6"
          >
            <div className="border border-white/10 p-5 max-[767px]:p-4" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="flex items-start gap-4 max-[767px]:flex-col max-[767px]:gap-2">
                <div className="flex-1">
                  <div className="font-mono text-[10px] text-white/30 uppercase mb-1">{metricInfo.analogy}</div>
                  <p className="font-body text-[14px] text-white/60 leading-relaxed">{metricInfo.description}</p>
                </div>
                <div className="flex gap-6 font-mono text-right max-[767px]:text-left max-[767px]:flex-row max-[767px]:gap-8">
                  <div>
                    <div className="text-[9px] text-white/30 uppercase">DAY 1</div>
                    <div className="text-[18px] font-bold text-white/50">{day1.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-white/30 uppercase">DAY 30</div>
                    <div className="text-[18px] font-bold text-foreground">{day30.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-white/30 uppercase">DELTA</div>
                    <div className="text-[18px] font-bold text-success">+{delta.toFixed(1)}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Chart */}
        <Reveal delay={300}>
          <div className="relative border border-white/10 p-6 max-[767px]:p-3" style={{ background: "rgba(255,255,255,0.02)" }}>
            <span className="absolute -top-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
            <span className="absolute -top-1 -right-1 font-mono text-[10px] text-primary/40">+</span>
            <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
            <span className="absolute -bottom-1 -right-1 font-mono text-[10px] text-primary/40">+</span>

            <div className="font-mono text-[9px] text-white/20 mb-4 flex items-center justify-between">
              <span>LONGITUDINAL_ANALYSIS // {typologyInfo.name.toUpperCase()} // {metricInfo.name.toUpperCase()}</span>
              <span>30_SESSION_WINDOW</span>
            </div>

            <div className="w-full overflow-x-auto -mx-3 px-3" style={{ WebkitOverflowScrolling: "touch" }}>
              <div className="min-w-[600px]">
                <ResponsiveContainer width="100%" height={320}>
                  <AreaChart data={comparisonData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="metricGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={metricInfo.color} stopOpacity={0.3} />
                        <stop offset="100%" stopColor={metricInfo.color} stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis
                      dataKey="session"
                      tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "JetBrains Mono, monospace" }}
                      axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[0, 100]}
                      tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "JetBrains Mono, monospace" }}
                      axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                      tickLine={false}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine
                      y={day1}
                      stroke="rgba(255,255,255,0.15)"
                      strokeDasharray="6 4"
                      label={{
                        value: `BASELINE: ${day1.toFixed(1)}%`,
                        position: "insideTopRight",
                        fill: "rgba(255,255,255,0.25)",
                        fontSize: 9,
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={metricInfo.color}
                      strokeWidth={2}
                      fill="url(#metricGradient)"
                      dot={false}
                      activeDot={{
                        r: 4,
                        fill: metricInfo.color,
                        stroke: "#0F172A",
                        strokeWidth: 2,
                      }}
                      style={{ filter: `drop-shadow(0 0 6px ${metricInfo.color}40)` }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom tech bar */}
            <div className="border-t border-white/10 mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] text-white/20">
              <span>REAL-WORLD_SIM // 10,000+ ATTENTION_VARIABILITY_DATAPOINTS</span>
              <span className="text-success/50">ENGINE_STATUS: ACTIVE</span>
            </div>
          </div>
        </Reveal>

        {/* Technical callout */}
        <Reveal delay={400}>
          <div className="mt-8 max-[767px]:mt-6 border border-white/10 p-5 max-[767px]:p-4" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="font-mono text-[10px] text-primary/40 uppercase mb-3 tracking-wider">
              ARCHITECTURAL NOTE
            </div>
            <p className="font-body text-[14px] text-white/50 leading-relaxed">
              Real-world simulation based on <span className="font-mono font-bold text-primary">10,000+ data points</span> of attention variability logic. We aren't a clinical laboratory — we are a team of students who have lived through these challenges. We've built a rigorous architectural foundation and a mathematical engine designed to adapt, learn, and grow as we scale.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TypologyDashboard;
