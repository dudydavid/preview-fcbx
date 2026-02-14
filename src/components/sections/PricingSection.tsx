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
    <section id="pricing" className="py-24 min-[900px]:py-32 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-[680px] mx-auto text-center mb-10">
          <Reveal>
            <span className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em]">
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
            <p className="font-body text-lg text-muted-foreground">
              One device. One subscription. Everything included.
            </p>
          </Reveal>
        </div>

        {/* Toggle */}
        <Reveal delay={200}>
          <div className="flex items-center justify-center gap-1 mb-14">
            <div className="inline-flex rounded-pill bg-foreground/[0.06] p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-pill font-body text-sm font-semibold transition-all duration-200 ${
                  !isAnnual
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "text-muted-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-pill font-body text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isAnnual
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "text-muted-foreground"
                }`}
              >
                Annual
                <span className="px-2 py-0.5 rounded-pill bg-accent text-white text-[11px] font-bold">
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
            <div className="bg-card rounded-[28px] p-10 border border-border shadow-card h-full flex flex-col">
              <span className="font-body text-[13px] font-semibold text-muted-foreground uppercase tracking-[0.1em]">
                ACTIVATION KIT
              </span>
              <div className="mt-4 mb-2 flex items-baseline gap-2">
                <span className="font-body text-[48px] font-extrabold text-foreground leading-none">€49</span>
                <span className="font-body text-base text-muted-foreground">one-time</span>
              </div>
              <p className="font-body text-[15px] text-muted-foreground mb-8">
                Everything you need to get started.
              </p>
              <ul className="space-y-3.5 flex-1">
                {activationFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <Check size={13} className="text-success" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[15px] text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Subscription */}
          <Reveal delay={400}>
            <div className="relative bg-primary rounded-[28px] p-10 h-full flex flex-col overflow-hidden">
              <span
                className="absolute top-6 right-6 px-3 py-1 rounded-pill bg-accent text-white font-body text-xs font-bold"
              >
                {isAnnual ? "BEST VALUE" : "FLEXIBLE"}
              </span>
              <span className="font-body text-[13px] font-semibold text-white/50 uppercase tracking-[0.1em]">
                {isAnnual ? "ANNUAL PLAN" : "MONTHLY PLAN"}
              </span>
              <div className="mt-4 mb-1 flex items-baseline gap-2">
                <span className="font-body text-[48px] font-extrabold text-white leading-none">
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
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check size={13} className="text-accent" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[15px] text-white">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3.5 rounded-pill bg-white text-primary font-body text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-heavy"
              >
                Get Started Now
              </button>
            </div>
          </Reveal>
        </div>

        {/* Founding Family Banner */}
        <Reveal delay={500}>
          <div
            className="max-w-[800px] mx-auto rounded-2xl px-8 py-5 border"
            style={{
              background: "rgba(232,145,58,0.08)",
              borderColor: "rgba(232,145,58,0.15)",
            }}
          >
            <p className="font-body text-[15px] text-foreground leading-relaxed">
              🎁 <strong>Founding Family Bonus:</strong> First cohort members receive a Focus Coaching Scripts Pack, 30-Day Challenge Calendar, and priority one-on-one support at no extra cost.{" "}
              <span className="font-bold text-accent">Limited spots available.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PricingSection;
