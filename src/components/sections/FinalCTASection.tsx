import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";

const FinalCTASection = () => (
  <section
    className="relative py-24 min-[900px]:py-28 max-[767px]:py-16 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #0F172A, #1E293B)" }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.1), transparent 60%)",
      }}
    />
    <div className="max-w-[720px] mx-auto px-6 max-[767px]:px-5 text-center relative z-10">
      <Reveal>
        <h2
          className="font-display text-white mb-6"
          style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.12 }}
        >
          Your child's potential
          <br />
          deserves a fighting chance.
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="font-body text-lg max-[767px]:text-[15px] text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
          Join the Founding Families and be among the first to watch focus transform from a daily struggle into a daily win.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 rounded-pill bg-white font-body text-sm font-bold shadow-heavy transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          style={{ color: "#0F172A" }}
        >
          Start for €49 — First Month Included
        </Link>
      </Reveal>
      <Reveal delay={300}>
        <p className="font-body text-sm text-white/35 mt-6">
          14-day return guarantee · Cancel anytime · No child data collected
        </p>
      </Reveal>
    </div>
  </section>
);

export default FinalCTASection;
