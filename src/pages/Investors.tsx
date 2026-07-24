import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";

const Investors = () => (
  <>
    <PageMeta
      title="FocusBox — Investors & Partners"
      description="FocusBox is a screen-free focus trainer for children aged 7–12, currently at prototype stage. Nothing has shipped. To talk to us, get in touch."
    />
    <section className="relative min-h-[70vh] flex items-center" style={{ background: "#0F172A" }}>
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div className="max-w-[720px] mx-auto px-6 max-[767px]:px-5 py-24 relative">
        <Reveal>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary mb-6">
            INVESTORS &amp; PARTNERS
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p
            className="font-display text-foreground leading-[1.2]"
            style={{ fontSize: "clamp(24px, 3.4vw, 40px)" }}
          >
            We are at prototype stage. Nothing has shipped, and we make no
            projections here. If you want to understand where this actually
            stands, read the story and then get in touch.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a
              href="mailto:hello@focusbox.io"
              className="inline-flex items-center px-7 py-3.5 border border-primary text-foreground font-mono text-[12px] uppercase tracking-wider transition-all duration-200 hover:bg-primary hover:text-white"
              style={{ background: "rgba(37, 99, 235, 0.15)" }}
            >
              hello@focusbox.io
            </a>
            <Link
              to="/about"
              className="inline-flex items-center px-7 py-3.5 border border-white/10 text-foreground/60 font-mono text-[12px] uppercase tracking-wider transition-all duration-200 hover:border-white/30 hover:text-foreground"
            >
              Read the whole story →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Investors;
