import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";
import { TrendingUp, CheckCircle } from "lucide-react";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import InvestorStripSection from "@/components/sections/InvestorStripSection";
import ReflexDemo from "@/components/sections/ReflexDemo";
import RecoveryChart from "@/components/sections/RecoveryChart";
import AntiCheatSection from "@/components/sections/AntiCheatSection";
import FounderStorySection from "@/components/sections/FounderStorySection";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(180deg, #0F172A, #172554)" }}>
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />

    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 pt-[100px] pb-20 w-full">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-20 items-center">
        {/* Left: Text */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 mb-8" style={{ background: "rgba(37, 99, 235, 0.06)" }}>
              <span className="w-2 h-2 rounded-full bg-success" style={{ boxShadow: "0 0 8px rgba(16, 185, 129, 0.5)" }} />
              <span className="font-mono text-[11px] font-semibold text-foreground tracking-wider uppercase">
                NOW ACCEPTING FOUNDING FAMILIES
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="font-display leading-[1.08] text-foreground mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Discipline is a muscle.
              <br />
              <span className="text-primary">This is the gym.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-body text-lg text-muted-foreground max-w-[480px] mb-8 leading-relaxed">
              FocusBox is a screen-free focus trainer for children aged 6–12. A simple device on their desk. A powerful app in your hands. Watch their concentration grow — one session at a time.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3.5 text-foreground font-mono text-[12px] uppercase tracking-wider transition-all duration-200 hover:bg-foreground hover:text-background border border-primary"
                style={{ background: "rgba(37, 99, 235, 0.15)" }}
              >
                Join Founding Families — €49
              </Link>
              <a
                href="/#how-it-works"
                className="inline-flex items-center px-7 py-3.5 font-mono text-[12px] uppercase tracking-wider text-foreground/60 border border-white/10 transition-all duration-200 hover:border-white/30 hover:text-foreground"
              >
                See How It Works →
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-8 max-[767px]:gap-6">
              {[
                { num: "100%", label: "Screen-free" },
                { num: "92%", label: "Gross margin" },
                { num: "€0", label: "Data sold" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-mono text-[22px] max-[767px]:text-[18px] font-bold text-foreground">{stat.num}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider mt-1 text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: Exploded Device View */}
        <Reveal delay={200} className="relative">
          <div className="relative border border-white/10" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
            {/* Corner markers */}
            <span className="absolute -top-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
            <span className="absolute -top-1 -right-1 font-mono text-[10px] text-primary/40">+</span>
            <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-primary/40">+</span>
            <span className="absolute -bottom-1 -right-1 font-mono text-[10px] text-primary/40">+</span>

            <div className="p-6">
              <div className="font-mono text-[10px] text-primary/40 mb-6 tracking-wider">
                FOCUSBOX // EXPLODED VIEW // v2.1
              </div>

              {/* Exploded layers */}
              <div className="space-y-4 py-8">
                {/* Layer 1: Case */}
                <div className="animate-float" style={{ animationDelay: "0s" }}>
                  <div className="border border-white/20 p-4 mx-auto max-w-[280px]" style={{ background: "rgba(37, 99, 235, 0.05)" }}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-white/30">LAYER_01</span>
                      <span className="font-mono text-[9px] text-primary/50">POLYCARBONATE SHELL</span>
                    </div>
                    <div className="h-8 border border-white/10 mt-2" style={{ background: "linear-gradient(90deg, rgba(37, 99, 235, 0.1), transparent)" }} />
                  </div>
                </div>

                {/* Layer 2: PCB */}
                <div className="animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="border border-primary/30 p-4 mx-auto max-w-[260px]" style={{ background: "rgba(37, 99, 235, 0.08)" }}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-white/30">LAYER_02</span>
                      <span className="font-mono text-[9px] text-success/50">PCB + MICROCONTROLLER</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1 mt-2">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="h-3 border border-primary/20" style={{ background: i % 3 === 0 ? "rgba(37, 99, 235, 0.2)" : "transparent" }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Layer 3: E-ink Screen */}
                <div className="animate-float" style={{ animationDelay: "1s" }}>
                  <div className="border border-white/20 p-4 mx-auto max-w-[240px]" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-white/30">LAYER_03</span>
                      <span className="font-mono text-[9px] text-warm-accent/50">E-INK DISPLAY</span>
                    </div>
                    <div className="h-12 border border-white/10 mt-2 flex items-center justify-center">
                      <span className="font-mono text-[16px] text-primary/60" style={{ textShadow: "0 0 10px rgba(37, 99, 235, 0.3)" }}>14:22</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom info bar */}
            <div className="border-t border-white/10 px-6 py-3 flex items-center justify-between">
              <span className="font-mono text-[9px] text-white/20">UNIT_COST: €11.20</span>
              <span className="font-mono text-[9px] text-success/50">STATUS: PRODUCTION</span>
            </div>
          </div>

          {/* Floating data card - hidden on mobile */}
          <div className="hidden min-[768px]:flex absolute -top-4 -right-4 min-[900px]:-right-8 border border-white/10 p-4 items-center gap-3 animate-float" style={{ background: "rgba(15, 23, 42, 0.9)" }}>
            <div className="w-10 h-10 border border-success/30 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16, 185, 129, 0.1)" }}>
              <TrendingUp size={20} className="text-success" />
            </div>
            <div>
              <div className="font-mono text-[11px] font-semibold text-foreground">+34% FOCUS</div>
              <div className="font-mono text-[9px] text-success/70">4-week avg improvement</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden" style={{ background: "#172554" }}>
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />

    <div className="max-w-[720px] mx-auto px-6 max-[767px]:px-5 text-center relative z-10">
      <Reveal>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-accent">
          THE PROBLEM NO ONE TALKS ABOUT
        </span>
      </Reveal>

      <Reveal delay={100}>
        <h2
          className="font-display text-foreground mt-6 mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
        >
          You've tried everything.
          <br />
          <span className="text-foreground/30">Nothing sticks.</span>
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="font-body text-lg max-[767px]:text-[15px] text-muted-foreground leading-relaxed mb-16 max-[767px]:mb-10">
          The homework battles. The "just five more minutes" that never comes. The heartbreak of watching your bright, capable child struggle to sit still long enough to finish a single page. You know they can do it. They know it too. They just can't seem to start — and when they do, they can't hold on.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-5 max-[767px]:gap-4 mb-16 max-[767px]:mb-10">
        {[
          { num: "1 in 4", desc: "schools report severe student inattention impacting learning" },
          { num: "6%+", desc: "of school-age children face attention and executive function challenges" },
          { num: "73%", desc: "of parents seek non-medication solutions first" },
        ].map((stat, i) => (
          <Reveal key={stat.num} delay={300 + i * 100}>
            <div className="p-8 max-[767px]:p-6 border border-white/10" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
              <div className="font-mono text-4xl max-[767px]:text-3xl font-bold mb-3 text-primary">{stat.num}</div>
              <div className="font-body text-sm text-white/40 leading-relaxed">{stat.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={600}>
        <blockquote className="max-w-lg mx-auto border border-white/10 p-6" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
          <p className="font-body text-xl max-[767px]:text-lg italic font-medium text-white/80 leading-relaxed mb-4">
            "I just want someone to tell me it's going to be okay — and then show me exactly how."
          </p>
          <cite className="font-mono text-[11px] text-white/30 not-italic uppercase tracking-wider">
            — What every parent tells us
          </cite>
        </blockquote>
      </Reveal>
    </div>
  </section>
);

const Index = () => {
  return (
    <>
      <PageMeta
        title="FocusBox — Screen-Free Focus Training for Children"
        description="A dedicated device and parent app that helps children aged 6-12 build focus through daily practice. Weekly progress reports, AI coaching, and zero screen time. Join the Founding Families."
      />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ReflexDemo />
      <RecoveryChart />
      <AntiCheatSection />
      <HowItWorksSection />
      <FeaturesSection />
      <FounderStorySection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <InvestorStripSection />
    </>
  );
};

export default Index;
