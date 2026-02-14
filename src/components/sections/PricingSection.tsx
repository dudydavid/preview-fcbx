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
    <section id="pricing" className="relative py-24 min-[900px]:py-32 max-[767px]:py-16" style={{ background: "#0F172A" }}>
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 relative">
        {/* Header */}
        <div className="max-w-[680px] mx-auto text-center mb-10">
          <Reveal>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
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
            <div className="inline-flex border border-white/10">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 font-mono text-[12px] uppercase tracking-wider transition-all duration-200 ${
                  !isAnnual ? "bg-foreground text-background" : "text-muted-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 font-mono text-[12px] uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                  isAnnual ? "bg-foreground text-background" : "text-muted-foreground"
                }`}
              >
                Annual
                <span className="px-2 py-0.5 text-white font-mono text-[10px] font-bold" style={{ background: "#F59E0B" }}>
                  -30%
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="max-w-[800px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-[1px] mb-8" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
          {/* Activation Kit */}
          <Reveal delay={300}>
            <div className="p-10 max-[767px]:p-6 h-full flex flex-col" style={{ background: "#0F172A" }}>
              <span className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                ACTIVATION KIT
              </span>
              <div className="mt-4 mb-2 flex items-baseline gap-2">
                <span className="font-mono text-[48px] max-[767px]:text-[36px] font-extrabold text-foreground leading-none">€49</span>
                <span className="font-mono text-[13px] text-muted-foreground">one-time</span>
              </div>
              <p className="font-body text-[15px] text-muted-foreground mb-8">
                Everything you need to get started.
              </p>
              <ul className="space-y-3.5 flex-1">
                {activationFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 border border-success/30 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16, 185, 129, 0.1)" }}>
                      <Check size={12} className="text-success" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[15px] text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Subscription */}
          <Reveal delay={400}>
            <div className="relative p-10 max-[767px]:p-6 h-full flex flex-col overflow-hidden" style={{ background: "#172554" }}>
              <span className="absolute top-6 right-6 px-3 py-1 border border-primary/30 text-primary font-mono text-[10px] font-bold uppercase tracking-wider" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
                {isAnnual ? "BEST VALUE" : "FLEXIBLE"}
              </span>
              <span className="font-mono text-[11px] font-semibold text-white/40 uppercase tracking-wider">
                {isAnnual ? "ANNUAL PLAN" : "MONTHLY PLAN"}
              </span>
              <div className="mt-4 mb-1 flex items-baseline gap-2">
                <span className="font-mono text-[48px] max-[767px]:text-[36px] font-extrabold text-foreground leading-none">
                  {isAnnual ? "€17.49" : "€24.99"}
                </span>
                <span className="font-mono text-[13px] text-white/40">/month</span>
              </div>
              {isAnnual ? (
                <div className="mb-8">
                  <span className="font-mono text-[12px] text-white/30 line-through">€24.99/month</span>
                  <span className="font-mono text-[12px] text-white/40 ml-2">Billed annually at €209.93</span>
                </div>
              ) : (
                <p className="font-mono text-[12px] text-white/40 mb-8">
                  Cancel anytime. No lock-in.
                </p>
              )}
              <ul className="space-y-3.5 flex-1 mb-8">
                {subscriptionFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 border border-primary/30 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
                      <Check size={12} className="text-primary" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[15px] text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 border border-white/20 bg-foreground text-background font-mono text-[12px] uppercase tracking-wider font-bold transition-all duration-200 hover:bg-primary hover:text-white">
                Get Started Now
              </button>
            </div>
          </Reveal>
        </div>

        {/* Founding Family Banner */}
        <Reveal delay={500}>
          <div className="max-w-[800px] mx-auto border border-primary/20 px-8 max-[767px]:px-5 py-5" style={{ background: "rgba(37, 99, 235, 0.05)" }}>
            <p className="font-body text-[15px] text-foreground leading-relaxed">
              🎁 <strong>Founding Family Bonus:</strong> First cohort members receive a Focus Coaching Scripts Pack, 30-Day Challenge Calendar, and priority one-on-one support at no extra cost.{" "}
              <span className="font-bold text-primary">Limited spots available.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PricingSection;
