import Reveal from "@/components/Reveal";
import { Shield, FileText, Brain, WifiOff, Users, Sparkles } from "lucide-react";

const privacyTags = ["No child PII", "GDPR-ready", "Alias-only", "Encrypted"];

const FeaturesSection = () => (
  <section id="features" className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden" style={{ background: "#172554" }}>
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />
    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5 relative">
      {/* Header */}
      <div className="max-w-[680px] mx-auto text-center mb-16 max-[767px]:mb-10">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            FEATURES
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-display text-foreground mt-6"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
          >
            Everything a parent needs.
            <br />
            <span className="text-muted-foreground">Nothing a child doesn't.</span>
          </h2>
        </Reveal>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 min-[768px]:grid-cols-12 gap-[1px]" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
        {/* ROW 1 */}
        <Reveal delay={200} className="min-[768px]:col-span-7">
          <div
            className="relative p-10 max-[767px]:p-6 min-h-[360px] max-[767px]:min-h-0 flex flex-col justify-end overflow-hidden"
            style={{ background: "#0F172A" }}
          >
            <div
              className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
              style={{ background: "radial-gradient(circle at top right, rgba(37,99,235,0.15), transparent 70%)" }}
            />
            <div className="relative z-10">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/60">
                DISTRACTION-FREE DEVICE
              </span>
              <h3 className="font-display text-[28px] max-[767px]:text-[22px] text-foreground mt-3 mb-4 leading-tight" style={{ fontWeight: 700 }}>
                Purpose-built hardware that keeps kids on task
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed max-w-[420px]">
                E-ink display. Tactile buttons. Adaptive prompts that adjust to your child's rhythm. No internet connection. No games. No notifications. Just a calm, guided focus experience.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300} className="min-[768px]:col-span-5">
          <div className="p-10 max-[767px]:p-6 min-h-[360px] max-[767px]:min-h-0 flex flex-col" style={{ background: "#0F172A" }}>
            <div className="w-14 h-14 border border-success/30 flex items-center justify-center mb-6" style={{ background: "rgba(16, 185, 129, 0.1)" }}>
              <Shield size={26} className="text-success" />
            </div>
            <h3 className="font-body text-xl font-bold text-foreground mb-3">Privacy by Design</h3>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed mb-6 flex-1">
              Zero child PII stored. All profiles use aliases. Fully GDPR-ready with one-click data export and deletion. Your child's information stays yours — always.
            </p>
            <div className="flex flex-wrap gap-2">
              {privacyTags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 border border-success/20 font-mono text-[10px] font-semibold text-success/70 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ROW 2 */}
        <Reveal delay={400} className="min-[768px]:col-span-5">
          <div className="p-10 max-[767px]:p-6 min-h-[280px] max-[767px]:min-h-0 flex flex-col" style={{ background: "#0F172A" }}>
            <div className="w-14 h-14 border border-purple-500/30 flex items-center justify-center mb-6" style={{ background: "rgba(102, 126, 234, 0.1)" }}>
              <FileText size={26} className="text-purple-400" />
            </div>
            <h3 className="font-body text-xl font-bold text-foreground mb-3">Weekly Progress Reports</h3>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
              A clear PDF lands in your inbox every Sunday. Focus minutes, session consistency, improvement trends — everything you need to see that it's working. Easy to share with teachers or co-parents.
            </p>
          </div>
        </Reveal>

        <Reveal delay={500} className="min-[768px]:col-span-7">
          <div className="relative p-10 max-[767px]:p-6 min-h-[280px] max-[767px]:min-h-0 flex flex-col justify-end overflow-hidden" style={{ background: "rgba(37, 99, 235, 0.15)" }}>
            <div className="absolute -top-12 -right-12 w-[200px] h-[200px] rounded-full pointer-events-none" style={{ background: "rgba(37, 99, 235, 0.1)" }} />
            <div className="relative z-10">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/60">
                INTELLIGENT COACHING
              </span>
              <h3 className="font-display text-[28px] max-[767px]:text-[22px] text-foreground mt-3 mb-4 leading-tight" style={{ fontWeight: 700 }}>
                Personalized recommendations that evolve with your child
              </h3>
              <p className="font-body text-[15px] text-white/50 leading-relaxed max-w-[420px]">
                Our AI engine analyzes focus patterns across sessions, generating monthly coaching plans reviewed by child development experts. Suggestions get smarter as your child progresses.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ROW 3 */}
        {[
          { Icon: WifiOff, title: "Works Offline", desc: "Device stores 7+ days of sessions locally. No internet needed during focus time. Data syncs when ready." },
          { Icon: Users, title: "Up to 5 Profiles", desc: "One device, multiple children. Each gets their own dashboard, reports, and personalized coaching plan." },
          { Icon: Sparkles, title: "Adaptive Engine", desc: "Proprietary algorithms adjust session difficulty in real-time based on your child's engagement signals." },
        ].map((card, i) => (
          <Reveal key={card.title} delay={600 + i * 100} className="min-[768px]:col-span-4">
            <div className="p-10 max-[767px]:p-6 min-h-[260px] max-[767px]:min-h-0 text-center flex flex-col items-center" style={{ background: "#0F172A" }}>
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-5" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                <card.Icon size={28} className="text-foreground" />
              </div>
              <h3 className="font-body text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
