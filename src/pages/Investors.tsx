import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import {
  CheckCircle,
  XCircle,
  MinusCircle,
  Database,
  Cpu,
  ShieldCheck,
  Users,
  CircleDot,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SECTION 1 — HERO                                                  */
/* ------------------------------------------------------------------ */
const HeroSection = () => (
  <section className="relative overflow-hidden" style={{ background: "#1B2A4A" }}>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 60% 0%, rgba(232,145,58,0.10), transparent 60%)",
      }}
    />
    <div className="max-w-[800px] mx-auto px-6 pt-[140px] pb-24 text-center relative z-10">
      <Reveal>
        <p className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em] mb-6">
          INVESTOR OVERVIEW
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1
          className="font-display text-white mb-6"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          The childhood focus category
          <br />
          doesn't exist yet.
          <span className="block" style={{ opacity: 0.6 }}>
            We're creating it.
          </span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="font-body text-lg max-w-[600px] mx-auto leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          FocusBox is building the first integrated hardware + software + AI coaching platform for children's focus training. Unit-profitable from day one. Launching with a controlled pilot cohort in Q1 2026.
        </p>
      </Reveal>
      <Reveal delay={240}>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:invest@focusbox.io"
            className="inline-flex items-center px-8 py-4 rounded-pill bg-accent text-accent-foreground font-body text-sm font-bold shadow-amber transition-all duration-200 hover:-translate-y-0.5"
          >
            Request Full Investor Brief
          </a>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 rounded-pill font-body text-sm font-semibold text-white border-[1.5px] border-white/20 hover:border-white/40 transition-colors duration-200"
          >
            See the Product
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 2 — KEY METRICS                                           */
/* ------------------------------------------------------------------ */
const metrics = [
  { num: "€49", label: "Activation fee covers device cost" },
  { num: "~92%", label: "Gross margin on subscription" },
  { num: "< 1 month", label: "Customer payback period" },
  { num: "€24.99/mo", label: "Subscription revenue per user" },
  { num: "€0", label: "Customer acquisition cost (pilot)" },
  { num: "85%+", label: "Target gross margin at scale" },
];

const MetricsSection = () => (
  <section className="py-20 min-[900px]:py-24 bg-secondary">
    <div className="max-w-[960px] mx-auto px-6">
      <Reveal>
        <p className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em] text-center mb-3">
          THE NUMBERS
        </p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-foreground text-center mb-14" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          Unit economics that work from unit one.
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 min-[900px]:grid-cols-3 gap-5">
        {metrics.map((m, i) => (
          <Reveal key={m.num + i} delay={100 + i * 70}>
            <div className="bg-card rounded-[20px] p-8 text-center shadow-card">
              <div className="font-body text-[32px] font-extrabold text-foreground">{m.num}</div>
              <div className="font-body text-[13px] text-muted-foreground mt-2">{m.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 3 — MARKET OPPORTUNITY                                    */
/* ------------------------------------------------------------------ */
const marketBlocks = [
  {
    title: "Post-Pandemic Attention Crisis",
    body: "In a 2024 U.S. survey, 26% of schools reported student inattention had a severe negative impact on learning outcomes. Global awareness of attention and executive function challenges in children is at an all-time high.",
  },
  {
    title: "Demand for Non-Clinical Solutions",
    body: "Parents increasingly seek non-medication interventions. The behavioral health and cognitive training market for children is growing rapidly, validated by FDA approval of digital therapeutics in this space.",
  },
  {
    title: "Technology Readiness",
    body: "Inexpensive IoT hardware, BLE connectivity, and AI inference engines have matured to the point where personalized, at-home cognitive training is commercially viable for the first time.",
  },
];

const MarketSection = () => (
  <section className="py-20 min-[900px]:py-24 bg-background">
    <div className="max-w-[960px] mx-auto px-6">
      <Reveal>
        <p className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em] text-center mb-3">
          THE OPPORTUNITY
        </p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-foreground text-center mb-14" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          A massive, underserved market.
        </h2>
      </Reveal>

      <div className="grid min-[900px]:grid-cols-2 gap-12 items-start">
        {/* Left — text */}
        <div className="flex flex-col gap-6">
          {marketBlocks.map((b, i) => (
            <Reveal key={b.title} delay={100 + i * 80}>
              <div>
                <h3 className="font-body text-lg font-bold text-foreground mb-2">{b.title}</h3>
                <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right — TAM visual */}
        <Reveal delay={300}>
          <div className="bg-secondary rounded-[24px] p-10">
            <div className="flex flex-col items-center gap-0">
              {/* Concentric rounded rects */}
              <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-[28px] border-2 border-foreground/10 flex items-start justify-center pt-4">
                  <span className="font-body text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">TAM</span>
                </div>
                <div className="absolute inset-[18%] rounded-[22px] border-2 border-foreground/15 flex items-start justify-center pt-4">
                  <span className="font-body text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">SAM</span>
                </div>
                <div className="absolute inset-[36%] rounded-[16px] bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                  <span className="font-body text-[12px] font-bold text-accent uppercase tracking-wider">SOM</span>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <p className="font-body text-[13px] text-muted-foreground"><span className="font-semibold text-foreground">TAM:</span> Global childhood focus & behavioral training</p>
              <p className="font-body text-[13px] text-muted-foreground"><span className="font-semibold text-foreground">SAM:</span> European parents of children 6-12 seeking non-clinical focus tools</p>
              <p className="font-body text-[13px] text-muted-foreground"><span className="font-semibold text-foreground">SOM:</span> Serbian + regional pilot families in Year 1</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 4 — COMPETITIVE POSITIONING                               */
/* ------------------------------------------------------------------ */
type CellVal = "yes" | "no" | "partial" | "na";
const compRows: { factor: string; fb: CellVal; analog: CellVal; wearable: CellVal; apps: CellVal }[] = [
  { factor: "Guided Sessions", fb: "yes", analog: "no", wearable: "no", apps: "yes" },
  { factor: "Offline & Screen-Free", fb: "yes", analog: "yes", wearable: "no", apps: "no" },
  { factor: "Parent Analytics", fb: "yes", analog: "no", wearable: "partial", apps: "partial" },
  { factor: "AI Coaching Plans", fb: "yes", analog: "no", wearable: "no", apps: "no" },
  { factor: "Privacy-First (No Child PII)", fb: "yes", analog: "na", wearable: "no", apps: "partial" },
  { factor: "Hardware + Software Moat", fb: "yes", analog: "no", wearable: "partial", apps: "no" },
  { factor: "Affordable (< €25/mo)", fb: "yes", analog: "yes", wearable: "no", apps: "partial" },
];

const CellIcon = ({ v }: { v: CellVal }) => {
  if (v === "yes") return <CheckCircle size={18} className="text-success mx-auto" />;
  if (v === "no") return <XCircle size={18} className="text-destructive mx-auto" />;
  if (v === "partial") return <MinusCircle size={18} className="text-accent mx-auto" />;
  return <MinusCircle size={18} className="text-muted-foreground/40 mx-auto" />;
};

const CompetitiveSection = () => (
  <section className="py-20 min-[900px]:py-24 bg-secondary">
    <div className="max-w-[1000px] mx-auto px-6">
      <Reveal>
        <p className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em] text-center mb-3">
          COMPETITIVE LANDSCAPE
        </p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-foreground text-center mb-14" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          No one owns this intersection.
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <div className="bg-card rounded-[24px] shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr style={{ background: "#1B2A4A" }}>
                  <th className="text-left px-5 py-4 font-body text-[13px] font-semibold uppercase text-white/80 tracking-wide">Factor</th>
                  <th className="px-5 py-4 font-body text-[13px] font-semibold uppercase text-accent tracking-wide text-center border-l-2 border-accent/30">FocusBox</th>
                  <th className="px-5 py-4 font-body text-[13px] font-semibold uppercase text-white/60 tracking-wide text-center">Analog Timers</th>
                  <th className="px-5 py-4 font-body text-[13px] font-semibold uppercase text-white/60 tracking-wide text-center">Wearables</th>
                  <th className="px-5 py-4 font-body text-[13px] font-semibold uppercase text-white/60 tracking-wide text-center">Focus Apps</th>
                </tr>
              </thead>
              <tbody>
                {compRows.map((r, i) => (
                  <tr key={r.factor} className={i % 2 === 0 ? "bg-secondary/50" : "bg-card"}>
                    <td className="px-5 py-4 font-body text-[14px] font-medium text-foreground">{r.factor}</td>
                    <td className="px-5 py-4 text-center border-l-2 border-accent/10">{CellIcon({ v: r.fb })}</td>
                    <td className="px-5 py-4 text-center">{CellIcon({ v: r.analog })}</td>
                    <td className="px-5 py-4 text-center">{CellIcon({ v: r.wearable })}</td>
                    <td className="px-5 py-4 text-center">{CellIcon({ v: r.apps })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 5 — MOAT & FLYWHEEL                                      */
/* ------------------------------------------------------------------ */
const moats = [
  {
    icon: Database,
    gradient: "linear-gradient(135deg, #1B2A4A, #2D4A7A)",
    title: "Data Network Effects",
    body: "Every session contributes anonymized focus performance data. More data improves our adaptive engine and AI recommendations. Competitors starting later will never match our dataset depth.",
  },
  {
    icon: Cpu,
    gradient: "linear-gradient(135deg, #E8913A, #D4782E)",
    title: "Integrated Hardware + Software",
    body: "A turnkey device-plus-app system is fundamentally harder to replicate than either component alone. The device prevents distraction in ways no app can. The app delivers intelligence no timer can.",
  },
  {
    icon: ShieldCheck,
    gradient: "linear-gradient(135deg, #48BB78, #38A169)",
    title: "Trust & Privacy Architecture",
    body: "Our alias-only, zero-child-PII architecture is a structural advantage in an era of increasing data regulation. Parents choose us because we're safe. Regulators leave us alone because we're compliant by design.",
  },
  {
    icon: Users,
    gradient: "linear-gradient(135deg, #667EEA, #764BA2)",
    title: "Community Distribution",
    body: "School partnerships and parent network referrals create grassroots credibility that paid marketing cannot buy. Our Founding Families become evangelists — and each new school relationship compounds our distribution.",
  },
];

const MoatSection = () => (
  <section className="py-20 min-[900px]:py-24 bg-background">
    <div className="max-w-[900px] mx-auto px-6">
      <Reveal>
        <p className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em] text-center mb-3">
          THE MOAT
        </p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-foreground text-center mb-14" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          Four layers of defensibility.
        </h2>
      </Reveal>
      <div className="grid min-[768px]:grid-cols-2 gap-5">
        {moats.map((m, i) => (
          <Reveal key={m.title} delay={100 + i * 80}>
            <div className="bg-card rounded-[24px] p-9 border border-border h-full">
              <div
                className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5"
                style={{ background: m.gradient }}
              >
                <m.icon size={26} className="text-white" />
              </div>
              <h3 className="font-body text-xl font-bold text-foreground mb-3">{m.title}</h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{m.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 6 — ROADMAP                                               */
/* ------------------------------------------------------------------ */
const phases = [
  {
    label: "NOW — PILOT",
    active: true,
    body: "Founding Families cohort (20 families, Serbia). Device + app MVP. Weekly reports. Validating core engagement loop and unit economics.",
  },
  {
    label: "NEXT — SCALE",
    active: false,
    body: "Expand to 200+ families. Launch in 2-3 European markets. Activate AI recommendation engine for all users. Begin school partnership program.",
  },
  {
    label: "VISION — PLATFORM",
    active: false,
    body: "Category ownership: FocusBox becomes the default focus training system for homes and schools. Optimized learning manuals shipped as part of the box. Multi-language. B2B school dashboards. Proprietary dataset powering continuous product improvement.",
  },
];

const RoadmapSection = () => (
  <section className="py-20 min-[900px]:py-24 bg-secondary">
    <div className="max-w-[960px] mx-auto px-6">
      <Reveal>
        <p className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em] text-center mb-3">
          ROADMAP
        </p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-foreground text-center mb-14" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          Where we are. Where we're going.
        </h2>
      </Reveal>

      {/* Desktop: horizontal, Mobile: vertical */}
      <div className="flex flex-col min-[900px]:flex-row gap-0 items-stretch">
        {phases.map((p, i) => (
          <Reveal key={p.label} delay={120 + i * 100} className="flex-1 flex flex-col min-[900px]:flex-row items-stretch">
            <div
              className={`bg-card rounded-[20px] p-8 flex-1 border-l-[3px] ${
                p.active ? "border-l-accent" : "border-l-muted"
              }`}
            >
              <p
                className={`font-body text-[13px] font-bold uppercase tracking-wider mb-3 ${
                  p.active ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {p.label}
              </p>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
            {/* Connector */}
            {i < phases.length - 1 && (
              <>
                <div className="hidden min-[900px]:flex items-center justify-center w-8 shrink-0">
                  <div className="w-8 h-[2px] bg-accent" />
                </div>
                <div className="flex min-[900px]:hidden items-center justify-center h-6">
                  <div className="h-6 w-[2px] bg-accent" />
                </div>
              </>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 7 — CTA                                                   */
/* ------------------------------------------------------------------ */
const InvestorCTA = () => (
  <section
    className="relative py-24 min-[900px]:py-28 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #1B2A4A, #0F1A30)" }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(232,145,58,0.12), transparent 60%)" }}
    />
    <div className="max-w-[720px] mx-auto px-6 text-center relative z-10">
      <Reveal>
        <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.12 }}>
          We're raising to own the category.
          <br />
          Let's talk.
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="mailto:invest@focusbox.io"
            className="inline-flex items-center px-8 py-4 rounded-pill bg-accent text-accent-foreground font-body text-sm font-bold shadow-amber transition-all duration-200 hover:-translate-y-0.5"
          >
            Request Investor Brief
          </a>
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-4 rounded-pill font-body text-sm font-semibold text-white border-[1.5px] border-white/20 hover:border-white/40 transition-colors duration-200"
          >
            Meet the Team
          </Link>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          Seed round · Hardware + SaaS · EdTech
        </p>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
const Investors = () => (
  <>
    <PageMeta
      title="FocusBox for Investors — The Childhood Focus Category"
      description="Unit-profitable from day one. Hardware + SaaS + AI coaching platform for children's focus training. See the opportunity."
    />
    <HeroSection />
    <MetricsSection />
    <MarketSection />
    <CompetitiveSection />
    <MoatSection />
    <RoadmapSection />
    <InvestorCTA />
  </>
);

export default Investors;
