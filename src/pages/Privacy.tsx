import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

const sections = [
  { title: "1. Who We Are", content: "FocusBox is operated by FocusBox d.o.o., a company registered in Serbia. We provide a parent-managed focus training system consisting of a physical device and a companion mobile application. For any questions about this policy or your data, contact us at privacy@focusbox.io." },
  { title: "2. What Data We Collect", content: "When you create an account, we collect your email address and a password (stored as a cryptographic hash — we never see or store your actual password). When you set up your child's profile, you create an alias — a nickname of your choosing. We do not collect your child's real name, age, date of birth, school, photograph, or any other personally identifiable information. During focus sessions, the device records timestamped session events: session start and end times, duration, button interactions, and engagement metrics. This data is linked only to the alias, not to any personal identity." },
  { title: "3. What We Do NOT Collect", content: "We do not collect your child's real name, age, photo, location, school, or any biometric data. We do not use cookies for advertising. We do not track your browsing activity outside of our app. We do not record audio, video, or images of any kind." },
  { title: "4. How We Use Your Data", content: "We use your data to operate the FocusBox system: to sync sessions between the device and app, to generate dashboards and progress charts, to produce weekly PDF reports, and to power AI-generated coaching recommendations. We use aggregated, anonymized data across all users to improve our product." },
  { title: "5. Who We Share Data With", content: "We do not sell your data to anyone. Ever. We share data only with: our cloud infrastructure provider (for hosting and storage), our AI processing partner (anonymized numeric aggregates only), and our email service provider (to deliver reports to your inbox). All partners are bound by data processing agreements." },
  { title: "6. Data Storage and Security", content: "Your data is encrypted in transit and at rest. We use industry-standard security practices including HTTPS, encrypted databases, and access controls. Our infrastructure is hosted on GDPR-compliant servers." },
  { title: "7. Your Rights (GDPR and Beyond)", content: "You may request a full export of your data at any time from the app. We will deliver a ZIP file containing your data in JSON, CSV, and PDF formats within 24 hours. You may request deletion of your account and all associated data at any time. We will anonymize your personal data within 24 hours and complete purging from live systems within 48 hours." },
  { title: "8. Children's Privacy", content: "FocusBox is designed for use by parents and guardians. Children interact only with the physical device — they do not create accounts, provide personal information, or use the mobile app. Our system is architected to comply with the principles of COPPA and GDPR provisions for minors." },
  { title: "9. Changes to This Policy", content: "We may update this policy as our product evolves. If we make material changes, we will notify you via email and update the date at the top of this page." },
  { title: "10. Contact Us", content: "For any privacy questions, data requests, or concerns: privacy@focusbox.io. We aim to respond within 48 hours." },
];

const Privacy = () => {
  return (
    <>
      <PageMeta
        title="Privacy Policy — FocusBox"
        description="How FocusBox handles your data. Zero child PII. Full export and deletion rights. GDPR-ready."
      />
      <section className="relative" style={{ background: "#0F172A" }}>
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-6 max-[767px]:px-5 pt-[140px] pb-[60px] text-center relative">
          <Reveal>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">LEGAL</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-4 mb-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>Privacy Policy</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-mono text-[12px] text-muted-foreground mb-8">Last updated: February 2026</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="text-left border border-white/10 p-6 mx-auto max-w-[640px]" style={{ background: "rgba(23, 37, 84, 0.4)" }}>
              <p className="font-mono text-[10px] text-primary/40 mb-2">TLDR:</p>
              <p className="font-body text-[15px] leading-relaxed text-muted-foreground">
                We collect minimal data. We store zero personal information about your child. Everything runs on anonymous aliases. We never sell your data. You can export or delete everything at any time. That's it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "#172554" }} className="relative">
        <div className="absolute inset-0 blueprint-grid-dense pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-6 max-[767px]:px-5 py-20 max-[767px]:py-14 relative">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i === 0 ? 0 : 50}>
              <div className={i > 0 ? "mt-12 pt-12" : ""} style={i > 0 ? { borderTop: "1px solid rgba(255, 255, 255, 0.06)" } : undefined}>
                <h2 className="font-body text-[20px] font-bold mb-4 text-foreground">{section.title}</h2>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">{section.content}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={100}>
            <div className="mt-16 border border-white/10 p-6 text-center" style={{ background: "rgba(15, 23, 42, 0.5)" }}>
              <p className="font-body text-[18px] font-bold mb-1 text-foreground">Questions about your data?</p>
              <p className="font-body text-[15px] text-muted-foreground mb-3">We're here to help. Reach out anytime.</p>
              <a href="mailto:privacy@focusbox.io" className="font-mono text-[12px] font-semibold text-primary inline-flex items-center gap-1 uppercase tracking-wider">Contact Privacy Team →</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Privacy;
