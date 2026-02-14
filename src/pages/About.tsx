import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";
import { Shield, Lightbulb, TrendingUp } from "lucide-react";

const AboutHero = () => (
  <section className="pt-[72px] relative" style={{ background: "#0F172A" }}>
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 py-20 min-[900px]:py-28 max-[767px]:py-14 relative">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-20 items-center">
        <div>
          <Reveal>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
              OUR STORY
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-foreground mt-6 mb-6" style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.12 }}>
              We built FocusBox because we needed it ourselves.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-[17px] max-[767px]:text-[15px] text-muted-foreground leading-[1.7] max-w-[520px]">
              FocusBox was created by a team of student founders who grew up struggling with focus. We know what it feels like to stare at a textbook for an hour and absorb nothing. We know the frustration our parents felt watching us fall behind — not because we weren't smart enough, but because we couldn't sit still long enough.
              <br /><br />
              We built the tool we wish we'd had as kids. And we built the dashboard our parents deserved.
            </p>
          </Reveal>
        </div>
        <Reveal delay={300}>
          <div className="border border-white/10 overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
            <span className="absolute -top-1 -left-1 font-mono text-[10px] text-primary/40 z-10">+</span>
            <span className="absolute -top-1 -right-1 font-mono text-[10px] text-primary/40 z-10">+</span>
            <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-primary/40 z-10">+</span>
            <span className="absolute -bottom-1 -right-1 font-mono text-[10px] text-primary/40 z-10">+</span>
            <img src="/placeholder.svg" alt="FocusBox team" className="w-full h-full object-cover" loading="lazy" width="600" height="450" />
            <div className="absolute inset-0 scanlines pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const MissionSection = () => (
  <section style={{ background: "#172554" }} className="relative">
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />
    <div className="max-w-[800px] mx-auto px-6 max-[767px]:px-5 py-20 min-[900px]:py-[80px] max-[767px]:py-14 text-center relative">
      <Reveal>
        <div className="border border-white/10 p-8 max-[767px]:p-6" style={{ background: "rgba(15, 23, 42, 0.5)" }}>
          <p className="font-body italic font-medium text-foreground/90 leading-[1.4]" style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
            "Every child deserves to discover what they're capable of when distractions disappear. Our mission is to make focus a skill any child can build — without medication, without screens, and without shame."
          </p>
          <p className="font-mono text-[11px] text-white/30 mt-8 uppercase tracking-wider">— The FocusBox Team</p>
        </div>
      </Reveal>
    </div>
  </section>
);

const valuesData = [
  {
    Icon: Shield,
    title: "Privacy Is Non-Negotiable",
    body: "Zero child personal data. Everything runs on aliases. GDPR-ready from day one. Your family's information is never sold, shared, or compromised. Not now. Not ever.",
  },
  {
    Icon: Lightbulb,
    title: "Screen-Free by Design",
    body: "We believe the solution to digital distraction can't be another screen. FocusBox is a physical device — tactile, simple, and impossible to get distracted on.",
  },
  {
    Icon: TrendingUp,
    title: "Progress Over Perfection",
    body: "We don't chase perfect sessions. We celebrate showing up. Our entire system is designed around small, consistent improvements.",
  },
];

const ValuesSection = () => (
  <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16" style={{ background: "#0F172A" }}>
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 relative">
      <div className="max-w-[680px] mx-auto text-center mb-16 max-[767px]:mb-10">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">WHAT WE BELIEVE</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-foreground mt-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            Principles that guide every decision.
          </h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-[1px]" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
        {valuesData.map((v, i) => (
          <Reveal key={v.title} delay={200 + i * 100}>
            <div className="p-9 max-[767px]:p-6 h-full" style={{ background: "#0F172A" }}>
              <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mb-6" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
                <v.Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-body text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ApproachSection = () => (
  <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16" style={{ background: "#172554" }}>
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 relative">
      <div className="max-w-[680px] mx-auto text-center mb-16 max-[767px]:mb-10">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">OUR APPROACH</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-foreground mt-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            Not an app. Not a toy. A system.
          </h2>
        </Reveal>
      </div>
      <Reveal delay={200}>
        <div className="max-w-[960px] mx-auto border border-white/10 p-10 max-[767px]:p-6 min-[900px]:p-12" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="font-body text-base max-[767px]:text-[15px] text-muted-foreground leading-[1.7]">
                Most focus solutions are either too simple (a dumb timer with no feedback) or too complex (clinical tools that pathologize your child). FocusBox sits in the middle.
              </p>
              <p className="font-body text-base max-[767px]:text-[15px] text-muted-foreground leading-[1.7]">
                The device handles the child's experience: structured sessions, adaptive prompts, built-in breaks. The app handles yours: dashboards, weekly reports, AI-powered coaching plans.
              </p>
              <p className="font-body text-base max-[767px]:text-[15px] text-muted-foreground leading-[1.7]">
                And because the device works completely offline with no internet or child-facing apps, you'll never worry about what your child is exposed to during focus time.
              </p>
            </div>
            <div className="border border-white/10 overflow-hidden relative">
              <img src="/placeholder.svg" alt="App dashboard mockup" className="w-full h-full object-cover" loading="lazy" width="400" height="300" />
              <div className="absolute inset-0 scanlines pointer-events-none" />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const teamMembers = [
  { name: "Founder 1", role: "CEO & Product", bio: "Built the first prototype in a dorm room at 3 AM." },
  { name: "Founder 2", role: "CTO & Engineering", bio: "Turns napkin sketches into shipping firmware." },
  { name: "Founder 3", role: "Growth & Operations", bio: "Gets families excited before the product even arrives." },
];

const TeamSection = () => (
  <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16" style={{ background: "#0F172A" }}>
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 relative">
      <div className="max-w-[680px] mx-auto text-center mb-6">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">THE TEAM</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-foreground mt-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            Young. Hungry. Been there.
          </h2>
        </Reveal>
      </div>
      <Reveal delay={150}>
        <p className="font-body text-[17px] max-[767px]:text-[15px] text-muted-foreground text-center max-w-[640px] mx-auto mb-16 max-[767px]:mb-10 leading-[1.7]">
          We're student founders who turned a personal pain into a product. We don't have decades of corporate experience — we have something better: we remember exactly what it feels like to be the kid who can't focus.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 min-[600px]:grid-cols-3 gap-10 max-w-[800px] mx-auto">
        {teamMembers.map((m, i) => (
          <Reveal key={m.name} delay={200 + i * 100}>
            <div className="text-center">
              <div className="w-[120px] h-[120px] border border-white/10 overflow-hidden mx-auto mb-5">
                <img src="/placeholder.svg" alt={m.name} className="w-full h-full object-cover" loading="lazy" width="120" height="120" />
              </div>
              <h3 className="font-body text-lg font-bold text-foreground">{m.name}</h3>
              <p className="font-mono text-[11px] font-medium text-primary">{m.role}</p>
              <p className="font-body text-sm text-muted-foreground italic mt-1">{m.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const AboutCTA = () => (
  <section className="relative py-24 min-[900px]:py-28 max-[767px]:py-16 overflow-hidden" style={{ background: "#172554" }}>
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.15), transparent 60%)" }} />
    <div className="max-w-[720px] mx-auto px-6 max-[767px]:px-5 text-center relative z-10">
      <Reveal>
        <h2 className="font-display text-foreground mb-6" style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.12 }}>
          We're just getting started.
          <br />
          Come build with us.
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            to="/#pricing"
            className="inline-flex items-center px-8 py-4 border border-primary text-foreground font-mono text-[12px] uppercase tracking-wider font-bold transition-all duration-200 hover:bg-primary hover:text-white"
            style={{ background: "rgba(37, 99, 235, 0.15)" }}
          >
            Join as a Founding Family
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border border-white/20 text-foreground font-mono text-[12px] uppercase tracking-wider font-semibold hover:border-white/40 transition-all duration-200"
          >
            Partner With Us
          </Link>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="font-mono text-[11px] text-white/25 tracking-wider">
          14-day return guarantee · Cancel anytime · No child data collected
        </p>
      </Reveal>
    </div>
  </section>
);

const About = () => (
  <>
    <PageMeta
      title="About FocusBox — Our Story"
      description="Built by student founders who grew up struggling with focus. FocusBox is the tool we wished we had as kids and the dashboard our parents deserved."
    />
    <AboutHero />
    <MissionSection />
    <ValuesSection />
    <ApproachSection />
    <TeamSection />
    <AboutCTA />
  </>
);

export default About;
