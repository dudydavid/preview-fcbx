import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { TrendingUp, CheckCircle } from "lucide-react";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ background: "var(--gradient-surface)" }}
  >
    {/* Dot grid */}
    <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />

    <div className="max-w-[1200px] mx-auto px-6 pt-[100px] pb-20 w-full">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-20 items-center">
        {/* Left: Text */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-foreground/[0.06] mb-8">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="font-body text-[13px] font-semibold text-foreground tracking-wide">
                NOW ACCEPTING FOUNDING FAMILIES
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="font-display leading-[1.08] text-foreground mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Your child's focus
              <br />
              <span className="text-accent">isn't broken.</span>
              <br />
              It just needs practice.
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
                className="inline-flex items-center px-7 py-3.5 rounded-pill text-white font-body text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--gradient-accent)",
                  boxShadow: "var(--shadow-amber)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(232,145,58,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-amber)";
                }}
              >
                Join Founding Families — €49
              </Link>
              <a
                href="/#how-it-works"
                className="inline-flex items-center px-7 py-3.5 rounded-pill font-body text-sm font-semibold text-foreground border-[1.5px] border-foreground/15 hover:border-foreground/30 transition-colors duration-200"
              >
                See How It Works →
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-8">
              {[
                { num: "100%", label: "Screen-free" },
                { num: "92%", label: "Gross margin" },
                { num: "€0", label: "Child data sold" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-body text-[22px] font-bold text-foreground">{stat.num}</div>
                  <div className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: Image */}
        <Reveal delay={200} className="relative">
          <div
            className="relative rounded-[32px] overflow-hidden shadow-heavy"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src="/placeholder.svg"
              alt="FocusBox device"
              className="w-full h-full object-cover bg-muted"
            />

            {/* Bottom glass card */}
            <div className="absolute bottom-4 left-4 right-4 glass-card rounded-[20px] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={20} className="text-success" />
              </div>
              <div>
                <div className="font-body text-sm font-semibold text-foreground">Weekly Focus Time</div>
                <div className="font-body text-xs font-medium text-success">↑ 34% improvement in 4 weeks</div>
              </div>
            </div>
          </div>

          {/* Floating notification */}
          <div className="absolute -top-4 -right-4 min-[900px]:-right-8 bg-card rounded-[20px] shadow-heavy p-4 flex items-center gap-3 animate-float">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle size={20} className="text-accent" />
            </div>
            <div>
              <div className="font-body text-sm font-semibold text-foreground">Session Complete!</div>
              <div className="font-body text-xs text-muted-foreground">25 min focused · Great job</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="relative bg-primary py-24 min-[900px]:py-32 overflow-hidden">
    {/* Dot grid */}
    <div className="absolute inset-0 dot-grid-light opacity-[0.04] pointer-events-none" />

    <div className="max-w-[720px] mx-auto px-6 text-center relative z-10">
      <Reveal>
        <span className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em]">
          THE PROBLEM NO ONE TALKS ABOUT
        </span>
      </Reveal>

      <Reveal delay={100}>
        <h2
          className="font-display text-white mt-6 mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
        >
          You've tried everything.
          <br />
          <span className="opacity-50">Nothing sticks.</span>
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="font-body text-lg text-white/70 leading-relaxed mb-16">
          The homework battles. The "just five more minutes" that never comes. The heartbreak of watching your bright, capable child struggle to sit still long enough to finish a single page. You know they can do it. They know it too. They just can't seem to start — and when they do, they can't hold on.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-5 mb-16">
        {[
          { num: "1 in 4", desc: "schools report severe student inattention impacting learning" },
          { num: "6%+", desc: "of school-age children face attention and executive function challenges" },
          { num: "73%", desc: "of parents seek non-medication solutions first" },
        ].map((stat, i) => (
          <Reveal key={stat.num} delay={300 + i * 100}>
            <div className="bg-white/5 border border-white/[0.08] rounded-[20px] p-8">
              <div className="font-body text-4xl font-bold text-accent mb-3">{stat.num}</div>
              <div className="font-body text-sm text-white/60 leading-relaxed">{stat.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={600}>
        <blockquote className="max-w-lg mx-auto">
          <p className="font-display italic text-2xl text-white/90 leading-relaxed mb-4">
            "I just want someone to tell me it's going to be okay — and then show me exactly how."
          </p>
          <cite className="font-body text-sm text-white/40 not-italic">
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
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
    </>
  );
};

export default Index;
