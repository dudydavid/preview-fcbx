import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "After two weeks, my daughter started sitting down for homework without being asked. I cried the first time it happened.",
    name: "Ana M.",
    role: "Mother of 2, Belgrade",
  },
  {
    quote: "We tried apps, we tried timers, we tried rewards charts. FocusBox is the first thing that actually stuck. The weekly reports keep ME motivated too.",
    name: "Jovana R.",
    role: "Parent, Novi Sad",
  },
  {
    quote: "My son has always struggled with focus. Seeing his progress chart go up week over week — that's something no tutor ever gave us.",
    name: "Marko P.",
    role: "Father of 1, Belgrade",
  },
];

const SocialProofSection = () => (
  <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16" style={{ background: "#0F172A" }}>
    <div className="absolute inset-0 blueprint-grid pointer-events-none" />
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 relative">
      <div className="max-w-[680px] mx-auto text-center mb-16 max-[767px]:mb-10">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            FROM OUR FOUNDING FAMILIES
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-display text-foreground mt-6"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
          >
            Real parents. Real progress.
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={200 + i * 100}>
            <div className="border border-white/10 p-9 max-[767px]:p-6 flex flex-col h-full" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="#F59E0B" stroke="none" />
                ))}
              </div>
              <p className="font-body text-base italic font-medium text-foreground/80 leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div>
                <div className="font-mono text-[13px] font-bold text-foreground">{t.name}</div>
                <div className="font-mono text-[11px] text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
