import Reveal from "@/components/Reveal";

const stats = [
  { num: "€49", label: "Device pays for itself on activation" },
  { num: "~92%", label: "Gross margin on subscription" },
  { num: "< 1 mo", label: "Customer payback period" },
  { num: "€0", label: "Customer acquisition cost (pilot)" },
];

const InvestorStripSection = () => (
  <section className="py-16 min-[900px]:py-20 max-[767px]:py-12" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
    <div className="max-w-[960px] mx-auto px-6 max-[767px]:px-5">
      <Reveal>
        <p className="font-body text-[13px] font-semibold text-muted-foreground uppercase tracking-[0.08em] text-center mb-10" style={{ color: "#94A3B8" }}>
          FOR INVESTORS & PARTNERS
        </p>
      </Reveal>

      <div className="grid grid-cols-2 min-[900px]:grid-cols-4 gap-8 mb-10">
        {stats.map((s, i) => (
          <Reveal key={s.num} delay={100 + i * 80}>
            <div className="text-center">
              <div className="font-body text-[28px] max-[767px]:text-[22px] font-extrabold text-foreground">{s.num}</div>
              <div className="font-body text-[13px] mt-1" style={{ color: "#94A3B8" }}>{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={450}>
        <div className="text-center">
          <a
            href="mailto:invest@focusbox.io"
            className="inline-flex items-center px-7 py-3 rounded-pill font-body text-sm font-semibold text-foreground transition-all duration-200 hover:border-foreground"
            style={{ border: "1.5px solid #E2E8F0" }}
          >
            Request Investor Brief →
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default InvestorStripSection;
