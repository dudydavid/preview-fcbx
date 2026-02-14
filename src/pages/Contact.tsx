import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import {
  Mail,
  Briefcase,
  Shield,
  Clock,
  Lock,
  Heart,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SECTION 1 — HERO                                                  */
/* ------------------------------------------------------------------ */
const HeroSection = () => (
  <section className="bg-secondary">
    <div className="max-w-[640px] mx-auto px-6 pt-[140px] pb-16 text-center">
      <Reveal>
        <p className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em] mb-5">
          GET IN TOUCH
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1
          className="font-display text-foreground mb-5"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.12 }}
        >
          Let's make this happen.
        </h1>
      </Reveal>
      <Reveal delay={140}>
        <p className="font-body text-[17px] text-muted-foreground leading-relaxed max-w-lg mx-auto">
          Whether you're a parent ready to transform your child's focus, or an
          investor who sees the opportunity — we'd love to hear from you.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  Shared styles                                                     */
/* ------------------------------------------------------------------ */
const inputCls =
  "w-full rounded-[14px] border-[1.5px] border-foreground/12 bg-card px-[18px] py-[14px] font-body text-[15px] text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-accent focus:shadow-[0_0_0_3px_rgba(232,145,58,0.12)]";

const selectWrapCls = "relative";

/* ------------------------------------------------------------------ */
/*  PARENT FORM                                                       */
/* ------------------------------------------------------------------ */
const ParentForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState("");
  const [agreed, setAgreed] = useState(false);

  if (submitted)
    return (
      <div className="flex flex-col items-center py-12 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-success" />
        </div>
        <h3 className="font-body text-2xl font-bold text-foreground mb-2">
          You're on the list!
        </h3>
        <p className="font-body text-[15px] text-muted-foreground mb-6">
          We'll be in touch within 48 hours. Check your inbox.
        </p>
        <Link
          to="/"
          className="font-body text-[15px] font-semibold text-accent hover:underline"
        >
          Back to Home →
        </Link>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div>
        <h3 className="font-body text-xl font-bold text-foreground mb-1">
          Join the Founding Families
        </h3>
        <p className="font-body text-[15px] text-muted-foreground mb-6">
          Limited spots in our first cohort. We'll reach out within 48 hours.
        </p>
      </div>

      <input
        type="text"
        placeholder="Full Name"
        required
        className={inputCls}
      />
      <input
        type="email"
        placeholder="Email Address"
        required
        className={inputCls}
      />

      {/* Country */}
      <div className={selectWrapCls}>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          className={`${inputCls} appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            Country
          </option>
          <option value="Serbia">Serbia</option>
          <option value="Romania">Romania</option>
          <option value="Other">Other</option>
        </select>
        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
      </div>
      {country === "Other" && (
        <input
          type="text"
          placeholder="Your country"
          required
          className={inputCls}
        />
      )}

      {/* Age range */}
      <div className={selectWrapCls}>
        <select required className={`${inputCls} appearance-none cursor-pointer`} defaultValue="">
          <option value="" disabled>
            Child's Age Range
          </option>
          <option value="5-7">5–7</option>
          <option value="8-10">8–10</option>
          <option value="11-12">11–12</option>
          <option value="13+">13+</option>
          <option value="multiple">Multiple children</option>
        </select>
        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
      </div>

      <textarea
        rows={3}
        placeholder="What's your biggest challenge with your child's focus? (optional)"
        className={inputCls}
        style={{ resize: "none" }}
      />

      {/* Checkbox */}
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
          className="mt-1 h-[18px] w-[18px] accent-accent rounded"
        />
        <span className="font-body text-[13px] text-muted-foreground leading-snug">
          I agree to receive updates about FocusBox. No spam, ever. Unsubscribe
          anytime.
        </span>
      </label>

      <button
        type="submit"
        className="w-full py-4 rounded-pill font-body text-[16px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-amber"
        style={{
          background: "linear-gradient(135deg, #E8913A, #D4782E)",
        }}
      >
        Request My Spot
      </button>
    </form>
  );
};

/* ------------------------------------------------------------------ */
/*  INVESTOR FORM                                                     */
/* ------------------------------------------------------------------ */
const InvestorForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  if (submitted)
    return (
      <div className="flex flex-col items-center py-12 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-success" />
        </div>
        <h3 className="font-body text-2xl font-bold text-foreground mb-2">
          Brief on its way!
        </h3>
        <p className="font-body text-[15px] text-muted-foreground mb-6">
          Check your inbox within 24 hours.
        </p>
        <Link
          to="/"
          className="font-body text-[15px] font-semibold text-accent hover:underline"
        >
          Back to Home →
        </Link>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div>
        <h3 className="font-body text-xl font-bold text-foreground mb-1">
          Request the Investor Brief
        </h3>
        <p className="font-body text-[15px] text-muted-foreground mb-6">
          We'll send our full investor package within 24 hours.
        </p>
      </div>

      <input
        type="text"
        placeholder="Full Name"
        required
        className={inputCls}
      />
      <input
        type="email"
        placeholder="Email Address"
        required
        className={inputCls}
      />
      <input
        type="text"
        placeholder="Organization / Fund Name"
        required
        className={inputCls}
      />
      <input
        type="text"
        placeholder="Role / Title (optional)"
        className={inputCls}
      />
      <textarea
        rows={3}
        placeholder="What caught your interest? (optional)"
        className={inputCls}
        style={{ resize: "none" }}
      />

      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
          className="mt-1 h-[18px] w-[18px] accent-accent rounded"
        />
        <span className="font-body text-[13px] text-muted-foreground leading-snug">
          I agree to receive investor updates from FocusBox.
        </span>
      </label>

      <button
        type="submit"
        className="w-full py-4 rounded-pill font-body text-[16px] font-bold text-primary-foreground bg-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-heavy"
      >
        Request Investor Brief
      </button>
    </form>
  );
};

/* ------------------------------------------------------------------ */
/*  SECTION 2 — DUAL-PATH FORMS                                      */
/* ------------------------------------------------------------------ */
const FormSection = () => {
  const [tab, setTab] = useState<"parent" | "investor">("parent");

  return (
    <section className="bg-background">
      <div className="max-w-[640px] mx-auto px-6 py-20">
        {/* Toggle */}
        <Reveal>
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-pill bg-secondary p-1">
              <button
                onClick={() => setTab("parent")}
                className={`px-6 py-2.5 rounded-pill font-body text-sm font-semibold transition-all duration-200 ${
                  tab === "parent"
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "text-muted-foreground"
                }`}
              >
                I'm a Parent
              </button>
              <button
                onClick={() => setTab("investor")}
                className={`px-6 py-2.5 rounded-pill font-body text-sm font-semibold transition-all duration-200 ${
                  tab === "investor"
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "text-muted-foreground"
                }`}
              >
                I'm an Investor / Partner
              </button>
            </div>
          </div>
        </Reveal>

        {/* Form card */}
        <Reveal delay={100}>
          <div className="bg-secondary rounded-[24px] p-10 min-[768px]:p-10 max-[767px]:p-7">
            <div
              key={tab}
              className="animate-in fade-in duration-300"
            >
              {tab === "parent" ? <ParentForm /> : <InvestorForm />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  SECTION 3 — ALTERNATIVE CONTACT                                   */
/* ------------------------------------------------------------------ */
const AltContactSection = () => (
  <section className="bg-secondary">
    <div className="max-w-[640px] mx-auto px-6 py-16 text-center">
      <Reveal>
        <h3 className="font-body text-lg font-bold text-foreground mb-6">
          Prefer email?
        </h3>
      </Reveal>
      <div className="grid min-[600px]:grid-cols-2 gap-5">
        <Reveal delay={80}>
          <div className="bg-card rounded-[20px] p-7 text-center">
            <Mail size={32} className="text-accent mx-auto mb-3" />
            <p className="font-body text-[15px] font-bold text-foreground mb-1">
              Parents & Families
            </p>
            <a
              href="mailto:hello@focusbox.io"
              className="font-body text-[15px] text-accent hover:underline"
            >
              hello@focusbox.io
            </a>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="bg-card rounded-[20px] p-7 text-center">
            <Briefcase size={32} className="text-foreground mx-auto mb-3" />
            <p className="font-body text-[15px] font-bold text-foreground mb-1">
              Investors & Partners
            </p>
            <a
              href="mailto:invest@focusbox.io"
              className="font-body text-[15px] text-foreground hover:underline"
            >
              invest@focusbox.io
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  SECTION 4 — TRUST STRIP                                           */
/* ------------------------------------------------------------------ */
const trustItems = [
  { icon: Shield, text: "Privacy-first. Always." },
  { icon: Clock, text: "48-hour response time" },
  { icon: Lock, text: "Your data stays yours" },
  { icon: Heart, text: "Built by parents, for parents" },
];

const TrustStrip = () => (
  <section className="bg-background border-t border-border">
    <div className="max-w-[800px] mx-auto px-6 py-12">
      <div className="grid grid-cols-2 min-[768px]:grid-cols-4 gap-6">
        {trustItems.map((t, i) => (
          <Reveal key={t.text} delay={60 + i * 60}>
            <div className="flex flex-col items-center text-center gap-2">
              <t.icon size={20} className="text-muted-foreground" />
              <span className="font-body text-[14px] text-muted-foreground">
                {t.text}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
const Contact = () => (
  <>
    <HeroSection />
    <FormSection />
    <AltContactSection />
    <TrustStrip />
  </>
);

export default Contact;
