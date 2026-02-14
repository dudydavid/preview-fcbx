import Reveal from "@/components/Reveal";
import { CheckCircle2, Clock, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const StepCard = ({ step, Icon, title, description, delay }: StepCardProps) => (
  <Reveal delay={delay}>
    <div className="border border-white/10 p-10 max-[767px]:p-6 transition-all duration-300 hover:border-primary/30 group h-full" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
      <span className="font-mono text-[11px] font-bold tracking-wider text-primary">{step}</span>
      <div className="w-[52px] h-[52px] border border-white/10 flex items-center justify-center mt-5 mb-5" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
        <Icon size={24} className="text-foreground" />
      </div>
      <h3 className="font-body text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </Reveal>
);

const HowItWorksSection = () => (
  <section id="how-it-works" className="relative py-24 min-[900px]:py-32 max-[767px]:py-16" style={{ background: "#0F172A" }}>
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 relative">
      {/* Header */}
      <div className="max-w-[680px] mx-auto text-center mb-16 max-[767px]:mb-10">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            HOW IT WORKS
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-display text-foreground mt-6 mb-0"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
          >
            Three steps to better focus.
            <br />
            <span className="text-muted-foreground">No complexity. No guesswork.</span>
          </h2>
        </Reveal>
      </div>

      {/* Three cards */}
      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
        <StepCard
          step="STEP 01"
          Icon={CheckCircle2}
          title="Set Up in Minutes"
          description="Pair the device via Bluetooth, create your child's profile, and choose a session length. The guided onboarding walks you through every step."
          delay={200}
        />
        <StepCard
          step="STEP 02"
          Icon={Clock}
          title="Daily Focus Sessions"
          description="Your child runs 5–45 minute sessions with the device. Adaptive prompts keep them engaged. Breaks are built in. No supervision required after setup."
          delay={300}
        />
        <StepCard
          step="STEP 03"
          Icon={TrendingUp}
          title="Watch Them Grow"
          description="Track focus minutes, session streaks, and improvement trends in your app. Get weekly PDF reports and monthly AI coaching plans tailored to your child."
          delay={400}
        />
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
