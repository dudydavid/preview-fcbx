import Reveal from "@/components/Reveal";

const stats = [
  { num: "€49", label: "Device pays for itself on activation" },
  { num: "~92%", label: "Gross margin on subscription" },
  { num: "< 1 mo", label: "Customer payback period" },
  { num: "€0", label: "Customer acquisition cost (pilot)" },
];

const InvestorStripSection = () => (
  <section className="py-16 min-[900px]:py-20 max-[767px]:py-12 border-t border-white/10" style={{ background: "#0F172A" }}>
    <div className="max-w-[960px] mx-auto px-6 max-[767px]:px-5">
      <Reveal>
        <p className="font-mono text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.12em] text-center mb-10">
          FOR INVESTORS & PARTNERS
        </p>
      </Reveal>

      <div className="grid grid-cols-2 min-[900px]:grid-cols-4 gap-8 mb-10">
        {stats.map((s, i) => (
          <Reveal key={s.num} delay={100 + i * 80}>
            <div className="text-center">
              <div className="font-mono text-[28px] max-[767px]:text-[22px] font-extrabold text-foreground">{s.num}</div>
              <div className="font-mono text-[11px] mt-1 text-muted-foreground">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={450}>
        <div className="text-center">
          <a
            href="mailto:invest@focusbox.io"
            className="inline-flex items-center px-7 py-3 font-mono text-[12px] uppercase tracking-wider font-semibold text-foreground transition-all duration-200 border border-white/10 hover:border-white/30 hover:bg-foreground hover:text-background"
          >
            Request Investor Brief →
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default InvestorStripSection;
