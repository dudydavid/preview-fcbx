import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import ImageSlot from "@/components/ImageSlot";

interface Beat {
  date: string;
  heading: string;
  body: React.ReactNode;
  image?: boolean;
}

const beats: Beat[] = [
  {
    date: "BEFORE",
    heading: "Neither of us could focus.",
    body: "This is not a market we researched. It is a problem we both had, through most of school. One of us learned to work around it late and the hard way. The other still fights it. That is the whole reason this exists.",
  },
  {
    date: "SEPTEMBER 2025",
    heading: "A business camp in Timișoara.",
    body: "We met there. [FOUNDER-2] had been thinking about the idea for about two months. By the end of the week we had agreed to build it together, without much sense of what that would involve.",
  },
  {
    date: "THE YEAR AFTER",
    heading: "450 kilometres, every day.",
    body: "[FOUNDER-1] is in Romania. [FOUNDER-2] is in Serbia. We built the entire thing over WhatsApp — specification, hardware design, the measurement model, the app — around two different school timetables. We did not meet again in person for 327 days.",
  },
  {
    date: "[MONTH TBC]",
    heading: "A school said yes.",
    body: "A school in Vršac approved a three-to-four-week pilot. Executives at two companies told us to keep going. We had somewhere to test, and permission to test there.",
  },
  {
    date: "[MONTH TBC]",
    heading: "Then everything went at once.",
    body: "The engineering team building the device left the project. Without them the school ended the initiative. We lost the lab, the 3D printer, the funding and the test window in the same week. The school that had agreed to host the pilot was still waiting for us. We had nothing to bring them.",
  },
  {
    date: "[MONTH TBC]",
    heading: "He built it anyway.",
    body: "[FOUNDER-2] studies accounting and had never touched a circuit board. He built the prototype alone. It is ugly, the PCB is damaged, and the buttons work. It is on the front page of this site because it is the most honest thing we own.",
  },
  {
    date: "[MONTH TBC]",
    heading: "The olympiad was a funding strategy.",
    body: "[FOUNDER-1] entered the national English olympiad for the money. First place at the international round carried a 3,050 RON scholarship — an actual salary, enough to buy components and keep going. He came second. No international round, but second still meant a merit scholarship of 750 RON a month. Then Romania discontinued the merit scholarship programme. The money was gone before it arrived.",
  },
  {
    date: "[MONTH TBC]",
    heading: "So we started a company to fund the company.",
    body: "We began building and selling websites — cold calls, door to door, two sites live in Romania. It pays for components. Then customs holds the components, or they arrive damaged, and we spend a month arguing for a refund. That part is not in any pitch deck, and it is most of what the last year actually was.",
  },
  {
    date: "[MONTH TBC]",
    heading: "327 days later, we met again.",
    body: null,
    image: true,
  },
  {
    date: "NOW",
    heading: "Where this stands.",
    body: "We have a prototype, booklet prototypes, an incomplete app, a full specification, and an audit that told us most of our measurement model needed rebuilding. We do not have production hardware, customers, or proof that any of it works. The school is still waiting. We intend to show up.",
  },
];

const TimelineBeat = ({ beat, index }: { beat: Beat; index: number }) => (
  <Reveal delay={index === 0 ? 0 : 80}>
    <div className="py-12 min-[900px]:py-16 border-b border-white/5">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mb-4">
        {beat.date}
      </div>
      <h2 className="font-display text-foreground mb-5" style={{ fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.2 }}>
        {beat.heading}
      </h2>
      {beat.body && (
        <p className="font-body text-[16px] min-[900px]:text-lg text-muted-foreground leading-[1.7] max-w-[680px]">
          {beat.body}
        </p>
      )}
      {beat.image && (
        <div className="max-w-[560px] mt-2">
          <ImageSlot
            src="/media/founders.jpg"
            alt="The two founders"
            caption="[TO BE FILLED]"
          />
        </div>
      )}
    </div>
  </Reveal>
);

const About = () => (
  <>
    <PageMeta
      title="About FocusBox — We have been trying to build this for a year."
      description="The year behind a screen-free focus trainer for children: two students, 450 kilometres apart, a cancelled pilot, a hand-built prototype, and an audit that sent us back to rebuild."
    />
    <section className="relative" style={{ background: "#0F172A" }}>
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div className="max-w-[760px] mx-auto px-6 max-[767px]:px-5 pt-[140px] pb-8 relative">
        <Reveal>
          <h1
            className="font-display text-foreground"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.12 }}
          >
            We have been trying to build this for a year.
          </h1>
        </Reveal>
      </div>
    </section>

    <section className="relative" style={{ background: "#0F172A" }}>
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div className="max-w-[760px] mx-auto px-6 max-[767px]:px-5 pb-16 relative">
        {beats.map((beat, i) => (
          <TimelineBeat key={`${beat.date}-${i}`} beat={beat} index={i} />
        ))}

        {/* Founder block */}
        <Reveal>
          <div className="pt-16 space-y-8">
            <div>
              <h3 className="font-body text-lg font-bold text-foreground mb-2">
                [FOUNDER-1] — Romania.
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-[680px]">
                Designed the BLE protocol, the backend specification and the
                measurement model, with no prior engineering experience. Second
                place, national English olympiad.
              </p>
            </div>
            <div>
              <h3 className="font-body text-lg font-bold text-foreground mb-2">
                [FOUNDER-2] — Serbia.
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-[680px]">
                Built the hardware prototype. Named Serbia&apos;s Best Young
                Business Leader, 2025 — for other work, not for this.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default About;
