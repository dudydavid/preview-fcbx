import Reveal from "@/components/Reveal";

const Terms = () => (
  <section style={{ background: "#F7F6F3" }}>
    <div className="max-w-[800px] mx-auto px-6 pt-[140px] pb-20 text-center">
      <Reveal>
        <span className="font-body text-[13px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#E8913A" }}>
          LEGAL
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="font-display mt-4 mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#1B2A4A" }}>
          Terms of Service
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="font-body text-[16px]" style={{ color: "#64748B" }}>
          Coming soon. For questions, contact{" "}
          <a href="mailto:hello@focusbox.io" style={{ color: "#E8913A" }}>
            hello@focusbox.io
          </a>
        </p>
      </Reveal>
    </div>
  </section>
);

export default Terms;
