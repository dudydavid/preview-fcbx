import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";
import { Shield, Lightbulb, TrendingUp } from "lucide-react";

const AboutHero = () => (
  <section className="pt-[72px]" style={{ background: "#F8FAFC" }}>
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 py-20 min-[900px]:py-28 max-[767px]:py-14">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-20 items-center">
        <div>
          <Reveal>
            <span className="font-body text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#2563EB" }}>
              OUR STORY
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="font-display text-foreground mt-6 mb-6"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.12 }}
            >
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
          <div className="rounded-[28px] max-[767px]:rounded-[20px] overflow-hidden shadow-heavy" style={{ aspectRatio: "4/3" }}>
            <img src="/placeholder.svg" alt="FocusBox team" className="w-full h-full object-cover" loading="lazy" width="600" height="450" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const MissionSection = () => (
  <section style={{ background: "#0F172A" }}>
    <div className="max-w-[800px] mx-auto px-6 max-[767px]:px-5 py-20 min-[900px]:py-[80px] max-[767px]:py-14 text-center">
      <Reveal>
        <p
          className="font-body italic font-medium text-white leading-[1.4]"
          style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
        >
          "Every child deserves to discover what they're capable of when distractions disappear. Our mission is to make focus a skill any child can build — without medication, without screens, and without shame."
        </p>
      </Reveal>
      <Reveal delay={100}>
        <p className="font-body text-sm text-white/40 mt-8">— The FocusBox Team</p>
      </Reveal>
    </div>
  </section>
);

const valuesData = [
  {
    Icon: Shield,
    gradient: "linear-gradient(135deg, #0F172A, #1E293B)",
    title: "Privacy Is Non-Negotiable",
    body: "Zero child personal data. Everything runs on aliases. GDPR-ready from day one. Your family's information is never sold, shared, or compromised. Not now. Not ever.",
  },
  {
    Icon: Lightbulb,
    gradient: "linear-gradient(135deg, #2563EB, #1D4ED8)",
    title: "Screen-Free by Design",
    body: "We believe the solution to digital distraction can't be another screen. FocusBox is a physical device — tactile, simple, and impossible to get distracted on. The phone stays in the parent's hands.",
  },
  {
    Icon: TrendingUp,
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    title: "Progress Over Perfection",
    body: "We don't chase perfect sessions. We celebrate showing up. Our entire system is designed around small, consistent improvements — because that's how real habits form and real confidence builds.",
  },
];

const ValuesSection = () => (
  <section className="py-24 min-[900px]:py-32 max-[767px]:py-16 bg-white">
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5">
      <div className="max-w-[680px] mx-auto text-center mb-16 max-[767px]:mb-10">
        <Reveal>
          <span className="font-body text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#2563EB" }}>
            WHAT WE BELIEVE
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-foreground mt-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            Principles that guide every decision.
          </h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
        {valuesData.map((v, i) => (
          <Reveal key={v.title} delay={200 + i * 100}>
            <div className="bg-white rounded-card p-9 max-[767px]:p-6 h-full" style={{ border: "1px solid #E2E8F0" }}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: v.gradient }}
              >
                <v.Icon size={22} className="text-white" />
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
  <section className="py-24 min-[900px]:py-32 max-[767px]:py-16" style={{ background: "#F8FAFC" }}>
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5">
      <div className="max-w-[680px] mx-auto text-center mb-16 max-[767px]:mb-10">
        <Reveal>
          <span className="font-body text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#2563EB" }}>
            OUR APPROACH
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-foreground mt-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            Not an app. Not a toy. A system.
          </h2>
        </Reveal>
      </div>
      <Reveal delay={200}>
        <div className="max-w-[960px] mx-auto bg-white rounded-[28px] p-10 max-[767px]:p-6 min-[900px]:p-12 shadow-card" style={{ border: "1px solid #E2E8F0" }}>
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="font-body text-base max-[767px]:text-[15px] text-muted-foreground leading-[1.7]">
                Most focus solutions are either too simple (a dumb timer with no feedback) or too complex (clinical tools that pathologize your child). FocusBox sits in the middle — rigorous enough to deliver real results, simple enough that a 7-year-old can use it independently.
              </p>
              <p className="font-body text-base max-[767px]:text-[15px] text-muted-foreground leading-[1.7]">
                The device handles the child's experience: structured sessions, adaptive prompts, built-in breaks. The app handles yours: dashboards, weekly reports, AI-powered coaching plans. Together, they create a feedback loop where improvement is visible, measurable, and motivating.
              </p>
              <p className="font-body text-base max-[767px]:text-[15px] text-muted-foreground leading-[1.7]">
                And because the device works completely offline with no internet or child-facing apps, you'll never worry about what your child is exposed to during focus time.
              </p>
            </div>
            <div className="rounded-[20px] overflow-hidden">
              <img src="/placeholder.svg" alt="App dashboard mockup" className="w-full h-full object-cover" loading="lazy" width="400" height="300" />
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
  <section className="py-24 min-[900px]:py-32 max-[767px]:py-16 bg-white">
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5">
      <div className="max-w-[680px] mx-auto text-center mb-6">
        <Reveal>
          <span className="font-body text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#2563EB" }}>
            THE TEAM
          </span>
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
              <div className="w-[120px] h-[120px] rounded-full border-4 shadow-card overflow-hidden mx-auto mb-5" style={{ borderColor: "#F8FAFC" }}>
                <img src="/placeholder.svg" alt={m.name} className="w-full h-full object-cover" loading="lazy" width="120" height="120" />
              </div>
              <h3 className="font-body text-lg font-bold text-foreground">{m.name}</h3>
              <p className="font-body text-sm font-medium" style={{ color: "#2563EB" }}>{m.role}</p>
              <p className="font-body text-sm text-muted-foreground italic mt-1">{m.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const AboutCTA = () => (
  <section
    className="relative py-24 min-[900px]:py-28 max-[767px]:py-16 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #0F172A, #1E293B)" }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.1), transparent 60%)" }}
    />
    <div className="max-w-[720px] mx-auto px-6 max-[767px]:px-5 text-center relative z-10">
      <Reveal>
        <h2
          className="font-display text-white mb-6"
          style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.12 }}
        >
          We're just getting started.
          <br />
          Come build with us.
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            to="/#pricing"
            className="inline-flex items-center px-8 py-4 rounded-pill font-body text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 text-white"
            style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", boxShadow: "0 4px 20px rgba(37,99,235,0.3)" }}
          >
            Join as a Founding Family
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-pill font-body text-sm font-bold text-white border-[1.5px] border-white/20 hover:border-white/50 transition-all duration-200"
          >
            Partner With Us
          </Link>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="font-body text-sm text-white/35">
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
