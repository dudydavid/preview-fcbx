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
  <section className="py-24 min-[900px]:py-32 bg-card">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="max-w-[680px] mx-auto text-center mb-16">
        <Reveal>
          <span className="font-body text-[13px] font-semibold text-accent uppercase tracking-[0.1em]">
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
            <div className="bg-background rounded-card p-9 flex flex-col h-full">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="#E8913A" stroke="none" />
                ))}
              </div>
              <p className="font-body text-base italic text-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div>
                <div className="font-body text-[15px] font-bold text-foreground">{t.name}</div>
                <div className="font-body text-[13px] text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
