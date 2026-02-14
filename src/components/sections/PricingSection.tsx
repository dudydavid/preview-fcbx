import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Check } from "lucide-react";

const activationFeatures = [
  "FocusBox device",
  "First month included",
  "Guided onboarding",
  "Quick-start guide",
  "14-day return guarantee",
];

const subscriptionFeatures = [
  "Full parent app access",
  "Real-time focus dashboard",
  "Weekly PDF progress reports",
  "AI coaching recommendations",
  "Up to 5 child profiles",
  "Priority support",
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 min-[900px]:py-32 max-[767px]:py-16" style={{ background: "#F8FAFC" }}>
      <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5">
        {/* Header */}
        <div className="max-w-[680px] mx-auto text-center mb-10">
          <Reveal>
            <span className="font-body text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#2563EB" }}>
              SIMPLE PRICING
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="font-display text-foreground mt-6 mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
            >
              Start building focus today.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-body text-lg max-[767px]:text-[15px] text-muted-foreground">
              One device. One subscription. Everything included.
            </p>
          </Reveal>
        </div>

        {/* Toggle */}
        <Reveal delay={200}>
          <div className="flex items-center justify-center gap-1 mb-14">
            <div className="inline-flex rounded-pill p-1" style={{ background: "rgba(15,23,42,0.06)" }}>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-pill font-body text-sm font-semibold transition-all duration-200 ${
                  !isAnnual
                    ? "text-white shadow-card"
                    : "text-muted-foreground"
                }`}
                style={!isAnnual ? { background: "#0F172A" } : undefined}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-pill font-body text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isAnnual
                    ? "text-white shadow-card"
                    : "text-muted-foreground"
                }`}
                style={isAnnual ? { background: "#0F172A" } : undefined}
              >
                Annual
                <span className="px-2 py-0.5 rounded-pill text-white text-[11px] font-bold" style={{ background: "#F59E0B" }}>
                  SAVE 30%
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="max-w-[800px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-6 mb-8">
          {/* Activation Kit */}
          <Reveal delay={300}>
            <div className="bg-white rounded-[28px] p-10 max-[767px]:p-6 h-full flex flex-col" style={{ border: "1px solid #E2E8F0" }}>
              <span className="font-body text-[13px] font-semibold text-muted-foreground uppercase tracking-[0.08em]">
                ACTIVATION KIT
              </span>
              <div className="mt-4 mb-2 flex items-baseline gap-2">
                <span className="font-body text-[48px] max-[767px]:text-[36px] font-extrabold text-foreground leading-none">€49</span>
                <span className="font-body text-base text-muted-foreground">one-time</span>
              </div>
              <p className="font-body text-[15px] text-muted-foreground mb-8">
                Everything you need to get started.
              </p>
              <ul className="space-y-3.5 flex-1">
                {activationFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,185,129,0.1)" }}>
                      <Check size={13} style={{ color: "#10B981" }} strokeWidth={3} />
                    </div>
                    <span className="font-body text-[15px] text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Subscription */}
          <Reveal delay={400}>
            <div className="relative rounded-[28px] p-10 max-[767px]:p-6 h-full flex flex-col overflow-hidden" style={{ background: "#0F172A" }}>
              <span
                className="absolute top-6 right-6 px-3 py-1 rounded-pill text-white font-body text-xs font-bold"
                style={{ background: "#2563EB" }}
              >
                {isAnnual ? "BEST VALUE" : "FLEXIBLE"}
              </span>
              <span className="font-body text-[13px] font-semibold text-white/50 uppercase tracking-[0.08em]">
                {isAnnual ? "ANNUAL PLAN" : "MONTHLY PLAN"}
              </span>
              <div className="mt-4 mb-1 flex items-baseline gap-2">
                <span className="font-body text-[48px] max-[767px]:text-[36px] font-extrabold text-white leading-none">
                  {isAnnual ? "€17.49" : "€24.99"}
                </span>
                <span className="font-body text-base text-white/50">/month</span>
              </div>
              {isAnnual ? (
                <div className="mb-8">
                  <span className="font-body text-sm text-white/40 line-through">€24.99/month</span>
                  <span className="font-body text-sm text-white/50 ml-2">Billed annually at €209.93</span>
                </div>
              ) : (
                <p className="font-body text-sm text-white/50 mb-8">
                  Cancel anytime. No lock-in.
                </p>
              )}
              <ul className="space-y-3.5 flex-1 mb-8">
                {subscriptionFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(96,165,250,0.2)" }}>
                      <Check size={13} style={{ color: "#60A5FA" }} strokeWidth={3} />
                    </div>
                    <span className="font-body text-[15px] text-white">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3.5 rounded-pill bg-white font-body text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-heavy"
                style={{ color: "#0F172A" }}
              >
                Get Started Now
              </button>
            </div>
          </Reveal>
        </div>

        {/* Founding Family Banner */}
        <Reveal delay={500}>
          <div
            className="max-w-[800px] mx-auto rounded-2xl px-8 max-[767px]:px-5 py-5"
            style={{
              background: "rgba(37,99,235,0.06)",
              border: "1px solid rgba(37,99,235,0.12)",
            }}
          >
            <p className="font-body text-[15px] text-foreground leading-relaxed">
              🎁 <strong>Founding Family Bonus:</strong> First cohort members receive a Focus Coaching Scripts Pack, 30-Day Challenge Calendar, and priority one-on-one support at no extra cost.{" "}
              <span className="font-bold" style={{ color: "#2563EB" }}>Limited spots available.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PricingSection;
