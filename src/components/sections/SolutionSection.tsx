import Reveal from "@/components/Reveal";
import { Monitor, Smartphone } from "lucide-react";

const SolutionSection = () => (
  <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden" style={{ background: "#F8FAFC" }}>
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5">
      {/* Header */}
      <div className="max-w-[680px] mx-auto text-center mb-16 max-[767px]:mb-10">
        <Reveal>
          <span className="font-body text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#2563EB" }}>
            THE SOLUTION
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-display text-foreground mt-6 mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
          >
            Focus is a muscle.
            <br />
            FocusBox is the gym.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-body text-lg max-[767px]:text-[15px] text-muted-foreground leading-relaxed">
            A dedicated physical device sits on your child's desk. No apps. No screens. No distractions. Just structured focus sessions that grow with them — and a powerful parent app that turns every session into visible progress.
          </p>
        </Reveal>
      </div>

      {/* Two cards */}
      <div className="max-w-[960px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-6">
        <Reveal delay={300}>
          <div className="bg-white rounded-[28px] p-10 max-[767px]:p-6 shadow-card h-full" style={{ border: "1px solid #E2E8F0" }}>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "linear-gradient(135deg, #0F172A, #1E293B)" }}
            >
              <Monitor size={26} className="text-white" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4" style={{ fontWeight: 700 }}>For Your Child</h3>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
              A friendly, tactile device with an e-ink screen and simple buttons. Guides them through focus sessions with gentle prompts. No Wi-Fi. No games. No temptation. Just their work and the timer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="bg-white rounded-[28px] p-10 max-[767px]:p-6 shadow-card h-full" style={{ border: "1px solid #E2E8F0" }}>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }}
            >
              <Smartphone size={26} className="text-white" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4" style={{ fontWeight: 700 }}>For You</h3>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
              A companion app with real-time dashboards, weekly PDF progress reports delivered to your inbox, and AI-powered coaching recommendations personalized to your child's unique patterns.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default SolutionSection;
