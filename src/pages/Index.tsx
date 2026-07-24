import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import ImageSlot from "@/components/ImageSlot";
import InterruptionDemo from "@/components/sections/InterruptionDemo";

/* ------------------------------------------------------------------ */
/* 2.1 Hero                                                            */
/* ------------------------------------------------------------------ */

const heroStats = [
  { num: "7–12", label: "Age range we design for" },
  { num: "0", label: "Screens for the child" },
  { num: "0", label: "Personal data collected about the child" },
];

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ background: "linear-gradient(180deg, #0F172A, #172554)" }}
  >
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />

    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 pt-[120px] pb-20 w-full">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-16 items-center">
        <div>
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 mb-8"
              style={{ background: "rgba(37, 99, 235, 0.06)" }}
            >
              <span className="font-mono text-[11px] font-semibold text-foreground tracking-wider uppercase">
                PROTOTYPE STAGE — PILOT SCHOOL CONFIRMED — NOT YET SHIPPING
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="font-display leading-[1.08] text-foreground mb-6"
              style={{ fontSize: "clamp(34px, 4.6vw, 58px)" }}
            >
              A screen-free focus trainer for children aged 7–12.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-body text-lg text-muted-foreground max-w-[500px] mb-8 leading-relaxed">
              A small device on the desk. A dashboard for the parent. No screen
              for the child, and nothing to get lost in. We are two students
              building it, and we have been at it for a year.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#waitlist"
                className="inline-flex items-center px-7 py-3.5 text-foreground font-mono text-[12px] uppercase tracking-wider transition-all duration-200 hover:bg-foreground hover:text-background border border-primary"
                style={{ background: "rgba(37, 99, 235, 0.15)" }}
              >
                Join the waitlist
              </a>
              <Link
                to="/about"
                className="inline-flex items-center px-7 py-3.5 font-mono text-[12px] uppercase tracking-wider text-foreground/60 border border-white/10 transition-all duration-200 hover:border-white/30 hover:text-foreground"
              >
                Read how we got here →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-8 max-[767px]:gap-6">
              {heroStats.map((stat) => (
                <div key={stat.label} className="max-w-[150px]">
                  <div className="font-mono text-[22px] max-[767px]:text-[18px] font-bold text-foreground">
                    {stat.num}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider mt-1 text-muted-foreground leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <ImageSlot
            src="/media/prototype-v1.jpg"
            alt="Hand-built FocusBox prototype"
            label="PROTOTYPE"
            caption="Prototype v1. Hand-built after our engineering team left. The buttons work. It isn't pretty."
          />
        </Reveal>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 2.2 The problem                                                     */
/* ------------------------------------------------------------------ */

const problemStats = [
  {
    num: "26%",
    desc: "of schools report student inattention severely affecting learning",
  },
  {
    num: "6%+",
    desc: "of school-age children face attention and executive-function challenges",
  },
];

const ProblemSection = () => (
  <section
    className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden"
    style={{ background: "#172554" }}
  >
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />

    <div className="max-w-[760px] mx-auto px-6 max-[767px]:px-5 relative z-10">
      <Reveal>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-accent">
          THE PROBLEM
        </span>
      </Reveal>

      <Reveal delay={100}>
        <h2
          className="font-display text-foreground mt-6 mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
        >
          Children are asked to focus. Almost none are taught how.
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="font-body text-lg max-[767px]:text-[15px] text-muted-foreground leading-relaxed mb-12">
          Sitting still is treated as a character trait. A child either has it or
          doesn&apos;t, and the ones who don&apos;t get labelled early — lazy,
          disruptive, not trying. The truth is more useful than that: attention is
          a skill that develops unevenly, and it can be practised. It just needs
          the same thing any other skill needs — short, repeated, measured effort,
          and someone who notices when it improves.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-5 mb-10">
        {problemStats.map((stat, i) => (
          <Reveal key={stat.num} delay={300 + i * 100}>
            <div
              className="p-8 max-[767px]:p-6 border border-white/10 h-full"
              style={{ background: "rgba(255, 255, 255, 0.02)" }}
            >
              <div className="font-mono text-4xl max-[767px]:text-3xl font-bold mb-3 text-primary">
                {stat.num}
              </div>
              <div className="font-body text-sm text-white/50 leading-relaxed mb-4">
                {stat.desc}
              </div>
              <div className="font-mono text-[11px] text-white/30 tracking-wider">
                SOURCE: [TO BE FILLED]
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={500}>
        <p className="font-body text-[15px] text-muted-foreground/80 leading-relaxed">
          We are not clinicians and FocusBox is not a treatment. It&apos;s
          practice equipment.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 2.4 How a session works                                             */
/* ------------------------------------------------------------------ */

const sessionSteps = [
  {
    title: "Set the session.",
    body: "A parent picks a length between 5 and 45 minutes. The child presses start themselves — no phone required.",
  },
  {
    title: "Work begins.",
    body: "The device counts down. Nothing to swipe, nothing to open, nothing to notice.",
  },
  {
    title: "Check-ins arrive at irregular intervals.",
    body: "A short light sequence to reproduce. Irregular so it can't be anticipated. Spaced so it stays cheap.",
  },
  {
    title: "The session is recorded.",
    body: "Length, completion, responses, breaks taken. The child sees a finished timer. The parent sees the record.",
  },
];

const MechanismSection = () => (
  <section
    className="relative py-24 min-[900px]:py-32 max-[767px]:py-16"
    style={{ background: "#0F172A" }}
  >
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />
    <div className="max-w-[1000px] mx-auto px-6 max-[767px]:px-5 relative">
      <div className="max-w-[720px] mb-14 max-[767px]:mb-10">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            THE MECHANISM
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-display text-foreground mt-6"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            Twenty minutes, four check-ins, one honest record.
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-[1px] mb-16" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
        {sessionSteps.map((step, i) => (
          <Reveal key={step.title} delay={150 + i * 80}>
            <div className="p-8 max-[767px]:p-6 h-full" style={{ background: "#0F172A" }}>
              <span className="font-mono text-[11px] font-bold tracking-wider text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-body text-xl font-bold text-foreground mt-4 mb-3">
                {step.title}
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="border border-white/10 p-8 max-[767px]:p-6" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-body text-lg font-bold text-foreground mb-3">
                The material is ours too.
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
                The child works from booklets we design, so practice and
                measurement fit together instead of competing. Prototypes exist;
                they&apos;re the next thing we test.
              </p>
            </div>
            <ImageSlot
              src="/media/booklets.jpg"
              alt="FocusBox booklet prototypes"
              label="PROTOTYPE"
              caption="Booklet prototypes."
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 2.5 What the parent sees                                            */
/* ------------------------------------------------------------------ */

const ParentSection = () => (
  <section
    className="relative py-24 min-[900px]:py-32 max-[767px]:py-16"
    style={{ background: "#172554" }}
  >
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />
    <div className="max-w-[1000px] mx-auto px-6 max-[767px]:px-5 relative">
      <div className="max-w-[720px] mb-14 max-[767px]:mb-10">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            FOR THE PARENT
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-display text-foreground mt-6"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            Progress you can actually look at.
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 items-start mb-12">
        <Reveal>
          <ImageSlot
            src="/media/app-dashboard.png"
            alt="Parent dashboard design mockup"
            label="DESIGN MOCKUP"
            caption="Parent dashboard — design mockup, not a shipped product."
          />
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <div>
              <h3 className="font-body text-lg font-bold text-foreground mb-2">
                The dashboard.
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
                Sessions, minutes, consistency. Plain trends — no score pretending
                to be a diagnosis.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <h3 className="font-body text-lg font-bold text-foreground mb-2">
                The weekly report.
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
                One page, emailed. Written to be handed to a teacher or a
                co-parent.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <h3 className="font-body text-lg font-bold text-foreground mb-2">
                Direct Behavior Rating.
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
                Thirty seconds after a session, a parent or teacher rates
                engagement, organisation and disruption. It&apos;s the oldest and
                best-validated instrument we could find, it&apos;s how we check
                whether the device agrees with reality, and it&apos;s adapted from
                a US school programme called I-Connect.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={200}>
        <div className="border-t border-white/10 pt-6 space-y-1">
          <p className="font-body text-[13px] text-white/40 leading-relaxed">
            Recommendations follow best practices, not clinical advice.
          </p>
          <p className="font-body text-[13px] text-white/40 leading-relaxed">
            Metrics are conservative estimates, not a clinical assessment.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 2.6 Where we actually are                                           */
/* ------------------------------------------------------------------ */

const builtItems = [
  "Working prototype — buttons functional, PCB damaged, hand-assembled",
  "Booklet prototypes",
  "Parent app prototype — dashboards, incomplete",
  "Full BLE protocol and backend specification",
  "Informal Direct Behavior Rating trial with five 11-year-olds",
  "Commissioned literature review and formula audit",
];

const notBuiltItems = [
  "No production hardware",
  "No paying customers",
  "No efficacy data",
  "Four of five measurement formulas being rebuilt after our own audit failed them",
];

const StatusSection = () => (
  <section
    className="relative py-24 min-[900px]:py-32 max-[767px]:py-16"
    style={{ background: "#0F172A" }}
  >
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />
    <div className="max-w-[1000px] mx-auto px-6 max-[767px]:px-5 relative">
      <div className="max-w-[720px] mb-14 max-[767px]:mb-10">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            STATUS
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-display text-foreground mt-6"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            What exists, and what doesn&apos;t.
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-6">
        <Reveal>
          <div className="border border-white/10 p-8 max-[767px]:p-6 h-full" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
            <div className="font-mono text-[11px] uppercase tracking-wider text-success mb-6">
              Built
            </div>
            <ul className="space-y-4">
              {builtItems.map((item) => (
                <li key={item} className="flex gap-3 font-body text-[15px] text-muted-foreground leading-relaxed">
                  <span className="font-mono text-success mt-0.5 shrink-0">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-white/10 p-8 max-[767px]:p-6 h-full" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
            <div className="font-mono text-[11px] uppercase tracking-wider text-warm-accent mb-6">
              Not built
            </div>
            <ul className="space-y-4">
              {notBuiltItems.map((item) => (
                <li key={item} className="flex gap-3 font-body text-[15px] text-muted-foreground leading-relaxed">
                  <span className="font-mono text-warm-accent mt-0.5 shrink-0">−</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <p className="font-body text-[15px] text-muted-foreground leading-relaxed max-w-[820px] mt-10">
          We commissioned an independent review of our own measurement model. It
          found that four of our five formulas needed serious revision — one of
          them awarded a perfect score for behaviour it had never actually
          measured. We could have shipped anyway. We are rebuilding them instead,
          and we will publish what changes.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 2.7 Story teaser + waitlist                                         */
/* ------------------------------------------------------------------ */

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this up to a real waitlist endpoint. Intentionally not
    // connected to any third-party service and no data is stored.
    setSubmitted(true);
  };

  return (
    <div
      id="waitlist"
      className="border border-white/10 p-8 max-[767px]:p-6 mt-16 scroll-mt-24"
      style={{ background: "rgba(15, 23, 42, 0.6)" }}
    >
      <h3 className="font-body text-xl font-bold text-foreground mb-3">
        Join the waitlist.
      </h3>
      <p className="font-body text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-[560px]">
        We&apos;ll tell you when the first cohort opens. No payment, no
        commitment, and we won&apos;t email you about anything else.
      </p>

      {submitted ? (
        <div
          className="border border-success/30 p-5 font-mono text-[13px] text-success"
          style={{ background: "rgba(16, 185, 129, 0.08)" }}
          role="status"
        >
          You&apos;re on the list. We&apos;ll be in touch when the first cohort
          opens.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col min-[600px]:flex-row gap-3 max-w-[560px]">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 border border-white/10 bg-transparent px-4 py-3.5 font-body text-[15px] text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
          />
          <button
            type="submit"
            className="px-7 py-3.5 border border-primary text-foreground font-mono text-[12px] uppercase tracking-wider transition-all duration-200 hover:bg-primary hover:text-white"
            style={{ background: "rgba(37, 99, 235, 0.15)" }}
          >
            Join the waitlist
          </button>
        </form>
      )}
    </div>
  );
};

const StorySection = () => (
  <section
    className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden"
    style={{ background: "#172554" }}
  >
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />
    <div className="max-w-[760px] mx-auto px-6 max-[767px]:px-5 relative">
      <Reveal>
        <h2
          className="font-display text-foreground mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
        >
          We didn&apos;t get here in a straight line.
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="space-y-5 font-body text-[15px] min-[900px]:text-base text-muted-foreground leading-relaxed">
          <p>
            We met at a business camp in Timișoara in September 2025. We live 450
            kilometres apart, in different countries. We worked on this every day
            over WhatsApp and did not see each other again for 327 days.
          </p>
          <p>
            A school approved our pilot and then cancelled it. Our engineering
            team walked out. We lost the lab, the funding and the equipment in the
            same week. One of us — an accounting student who had never touched a
            circuit — built the prototype alone anyway. Then we started a web
            design agency to pay for components ourselves.
          </p>
          <p>We are still going.</p>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <Link
          to="/about"
          className="inline-flex items-center mt-8 font-mono text-[12px] uppercase tracking-wider text-primary hover:text-foreground transition-colors duration-200"
        >
          Read the whole story →
        </Link>
      </Reveal>

      <Reveal delay={300}>
        <WaitlistForm />
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */

const Index = () => {
  return (
    <>
      <PageMeta
        title="FocusBox — A Screen-Free Focus Trainer for Children Aged 7–12"
        description="A screen-free focus trainer for children aged 7–12. A device for the child, a dashboard for the parent. Built by two students. Currently at prototype stage."
      />
      <HeroSection />
      <ProblemSection />
      <InterruptionDemo />
      <MechanismSection />
      <ParentSection />
      <StatusSection />
      <StorySection />
    </>
  );
};

export default Index;
