import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { Mail, Briefcase } from "lucide-react";

const inputCls =
  "w-full border border-white/10 bg-transparent px-[18px] py-[14px] font-body text-[15px] max-[767px]:text-[16px] text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]";

const HeroSection = () => (
  <section className="relative" style={{ background: "#0F172A" }}>
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />
    <div className="max-w-[640px] mx-auto px-6 max-[767px]:px-5 pt-[140px] pb-16 max-[767px]:pb-10 text-center relative">
      <Reveal>
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary mb-5">
          GET IN TOUCH
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="font-display text-foreground mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.12 }}>
          Say hello.
        </h1>
      </Reveal>
      <Reveal delay={140}>
        <p className="font-body text-[17px] max-[767px]:text-[15px] text-muted-foreground leading-relaxed max-w-lg mx-auto">
          If you want to follow the build, host a pilot, or just ask a question,
          write to us. To join the waitlist, use the form on the home page.
        </p>
      </Reveal>
    </div>
  </section>
);

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this up to a real endpoint. Not connected to any third-party
    // service and no data is stored.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <h3 className="font-body text-2xl font-bold text-foreground mb-2">
          Thanks — message noted.
        </h3>
        <p className="font-body text-[15px] text-muted-foreground mb-6">
          We read everything ourselves. We&apos;ll reply when we can.
        </p>
        <Link to="/" className="font-mono text-[12px] font-semibold text-primary uppercase tracking-wider">
          Back to Home →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h3 className="font-body text-xl font-bold text-foreground mb-1">Send a message</h3>
        <p className="font-body text-[15px] text-muted-foreground mb-6">
          No payment, no commitment.
        </p>
      </div>
      <label htmlFor="c-name" className="sr-only">Full name</label>
      <input id="c-name" type="text" placeholder="Full Name" required className={inputCls} />
      <label htmlFor="c-email" className="sr-only">Email address</label>
      <input id="c-email" type="email" placeholder="Email Address" required className={inputCls} />
      <label htmlFor="c-msg" className="sr-only">Message</label>
      <textarea id="c-msg" rows={4} placeholder="What would you like to say? (optional)" className={inputCls} style={{ resize: "none" }} />
      <button
        type="submit"
        className="w-full py-4 border border-primary text-foreground font-mono text-[12px] uppercase tracking-wider font-bold transition-all duration-200 hover:bg-primary hover:text-white"
        style={{ background: "rgba(37, 99, 235, 0.15)" }}
      >
        Send Message
      </button>
    </form>
  );
};

const FormSection = () => (
  <section style={{ background: "#172554" }} className="relative">
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />
    <div className="max-w-[640px] mx-auto px-6 max-[767px]:px-5 py-20 max-[767px]:py-14 relative">
      <Reveal>
        <div className="border border-white/10 p-10 max-[767px]:p-6" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
          <ContactForm />
        </div>
      </Reveal>
    </div>
  </section>
);

const AltContactSection = () => (
  <section style={{ background: "#0F172A" }} className="relative">
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />
    <div className="max-w-[640px] mx-auto px-6 max-[767px]:px-5 py-16 max-[767px]:py-10 text-center relative">
      <Reveal>
        <h2 className="font-body text-lg font-bold text-foreground mb-6">Prefer email?</h2>
      </Reveal>
      <div className="grid min-[600px]:grid-cols-2 gap-[1px]" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
        <Reveal delay={80}>
          <div className="p-7 max-[767px]:p-5 text-center" style={{ background: "#0F172A" }}>
            <Mail size={32} className="mx-auto mb-3 text-primary" />
            <p className="font-body text-[15px] font-bold text-foreground mb-1">General</p>
            <a href="mailto:hello@focusbox.io" className="font-mono text-[12px] text-primary">hello@focusbox.io</a>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="p-7 max-[767px]:p-5 text-center" style={{ background: "#0F172A" }}>
            <Briefcase size={32} className="text-foreground mx-auto mb-3" />
            <p className="font-body text-[15px] font-bold text-foreground mb-1">Pilots &amp; Partners</p>
            <a href="mailto:hello@focusbox.io" className="font-mono text-[12px] text-foreground/60">hello@focusbox.io</a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <>
    <PageMeta
      title="Contact FocusBox"
      description="Get in touch with the two students building FocusBox, a screen-free focus trainer for children aged 7–12, currently at prototype stage."
    />
    <HeroSection />
    <FormSection />
    <AltContactSection />
  </>
);

export default Contact;
