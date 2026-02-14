import Reveal from "@/components/Reveal";

const FounderStorySection = () => (
  <section className="relative py-24 min-[900px]:py-32 max-[767px]:py-16 overflow-hidden" style={{ background: "#172554" }}>
    <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />

    <div className="max-w-[1200px] mx-auto px-6 max-[767px]:px-5">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <Reveal>
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-accent mb-4 block">
              ORIGIN // THE RESTLESS GENERATION
            </span>
            <h2
              className="font-display text-foreground mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
            >
              We were the
              <br />
              <span className="text-primary">restless generation.</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground text-[15px] leading-relaxed">
              <p>
                Toys bored us. Video games amazed us, then bored us too. Our parents bought tutors and lectured us to "just focus."
              </p>
              <p>
                But focus isn't a choice; it's a discipline. And discipline is hard to build when you're fighting alone.
              </p>
              <p>
                We built FocusBox because we needed a spotter. A tool that accepts that we will get distracted, but gently guides us back.
              </p>
            </div>

            {/* Signature block */}
            <div className="border border-white/10 p-4 mt-8" style={{ background: "rgba(15, 23, 42, 0.5)" }}>
              <div className="font-mono text-[10px] text-primary/40 mb-2">FOUNDERS_NOTE:</div>
              <div className="font-mono text-[11px] text-white/40">
                "We didn't build this for kids like us.
                <br />
                We built this for the parents of kids like us."
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Visual */}
        <Reveal delay={200}>
          <div className="border border-white/10 relative overflow-hidden" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
            {/* Corner markers */}
            <span className="absolute -top-1 -left-1 font-mono text-[10px] text-primary/40 z-10">+</span>
            <span className="absolute -top-1 -right-1 font-mono text-[10px] text-primary/40 z-10">+</span>
            <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-primary/40 z-10">+</span>
            <span className="absolute -bottom-1 -right-1 font-mono text-[10px] text-primary/40 z-10">+</span>

            {/* Simulated messy desk scene with CSS */}
            <div className="aspect-[4/3] relative" style={{ background: "linear-gradient(135deg, #1E293B, #0F172A)" }}>
              <div className="absolute inset-0 scanlines pointer-events-none" />

              {/* Abstract desk elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Notebook lines */}
                  <div className="space-y-3 mb-6">
                    <div className="w-48 h-[1px] mx-auto" style={{ background: "rgba(37, 99, 235, 0.2)" }} />
                    <div className="w-40 h-[1px] mx-auto" style={{ background: "rgba(37, 99, 235, 0.15)" }} />
                    <div className="w-44 h-[1px] mx-auto" style={{ background: "rgba(37, 99, 235, 0.2)" }} />
                    <div className="w-36 h-[1px] mx-auto" style={{ background: "rgba(37, 99, 235, 0.12)" }} />
                    <div className="w-48 h-[1px] mx-auto" style={{ background: "rgba(37, 99, 235, 0.18)" }} />
                  </div>

                  {/* Scattered elements */}
                  <div className="font-mono text-[9px] text-white/10 space-y-2">
                    <div>// unfinished_homework.txt</div>
                    <div>// crumpled_paper_03.obj</div>
                    <div>// broken_pencil.stl</div>
                    <div>// TODO: focus</div>
                  </div>
                </div>
              </div>

              {/* Film grain noise overlay */}
              <div className="absolute inset-0" style={{ background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")", opacity: 0.5 }} />
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="font-mono text-[10px] text-primary/30">
                IMG_REF: founder_desk_001.raw // PROCESSED: grayscale + grain
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FounderStorySection;
