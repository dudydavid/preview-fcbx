import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

const sections = [
  { title: "1. Who We Are", content: "FocusBox is operated by FocusBox d.o.o., a company registered in Serbia. We provide a parent-managed focus training system consisting of a physical device and a companion mobile application. For any questions about this policy or your data, contact us at privacy@focusbox.io." },
  { title: "2. What Data We Collect", content: "When you create an account, we collect your email address and a password (stored as a cryptographic hash — we never see or store your actual password). When you set up your child's profile, you create an alias — a nickname of your choosing. We do not collect your child's real name, age, date of birth, school, photograph, or any other personally identifiable information. During focus sessions, the device records timestamped session events: session start and end times, duration, button interactions, and engagement metrics. This data is linked only to the alias, not to any personal identity. If you opt in to weekly reports, we store and email those reports to the email address you provide. If the AI recommendation feature is active, we send anonymized, aggregated session statistics (numeric data only, no names or identifiers) to our AI processing partner to generate coaching suggestions." },
  { title: "3. What We Do NOT Collect", content: "We do not collect your child's real name, age, photo, location, school, or any biometric data. We do not use cookies for advertising. We do not track your browsing activity outside of our app. We do not record audio, video, or images of any kind." },
  { title: "4. How We Use Your Data", content: "We use your data to operate the FocusBox system: to sync sessions between the device and app, to generate dashboards and progress charts, to produce weekly PDF reports, and to power AI-generated coaching recommendations. We use aggregated, anonymized data across all users to improve our product — for example, to refine how our adaptive prompts work. This aggregated data cannot be traced back to any individual." },
  { title: "5. Who We Share Data With", content: "We do not sell your data to anyone. Ever. We share data only with: our cloud infrastructure provider (for hosting and storage), our AI processing partner (anonymized numeric aggregates only, for generating recommendations), and our email service provider (to deliver reports to your inbox). All partners are bound by data processing agreements. If required by law, we may disclose data to legal authorities — but given that we store minimal personal data and zero child PII, there is very little to disclose." },
  { title: "6. Data Storage and Security", content: "Your data is encrypted in transit and at rest. We use industry-standard security practices including HTTPS, encrypted databases, and access controls. Our infrastructure is hosted on GDPR-compliant servers. Access to user data is restricted to essential team members only." },
  { title: "7. Your Rights (GDPR and Beyond)", content: "Regardless of where you live, we extend the following rights to all users. You may request a full export of your data at any time from the app (Settings → Privacy → Export). We will deliver a ZIP file containing your data in JSON, CSV, and PDF formats within 24 hours. You may request deletion of your account and all associated data at any time (Settings → Privacy → Delete Account). We will anonymize your personal data within 24 hours and complete purging from live systems within 48 hours. Backup systems may retain encrypted remnants for up to 14 days before automatic purge. Upon deletion, we retain only anonymized weekly aggregate statistics (no personal identifiers) for product improvement purposes. You may withdraw consent for data processing at any time by contacting us or deleting your account." },
  { title: "8. Children's Privacy", content: "FocusBox is designed for use by parents and guardians. Children interact only with the physical device — they do not create accounts, provide personal information, or use the mobile app. Our system is architected to comply with the principles of COPPA and GDPR provisions for minors by simply not collecting child personal data in the first place." },
  { title: "9. Changes to This Policy", content: "We may update this policy as our product evolves. If we make material changes, we will notify you via email and update the date at the top of this page. Continued use of FocusBox after changes constitutes acceptance of the updated policy." },
  { title: "10. Contact Us", content: "For any privacy questions, data requests, or concerns: privacy@focusbox.io. We aim to respond within 48 hours." },
];

const Privacy = () => {
  return (
    <>
      <PageMeta
        title="Privacy Policy — FocusBox"
        description="How FocusBox handles your data. Zero child PII. Full export and deletion rights. GDPR-ready."
      />
      <section style={{ background: "#F8FAFC" }}>
        <div className="max-w-[800px] mx-auto px-6 max-[767px]:px-5 pt-[140px] pb-[60px] text-center">
          <Reveal>
            <span className="font-body text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#2563EB" }}>LEGAL</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-4 mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#0F172A" }}>Privacy Policy</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-[16px] max-[767px]:text-[15px] mb-8" style={{ color: "#475569" }}>Last updated: February 2026</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="text-left rounded-[16px] p-6 mx-auto max-w-[640px]" style={{ background: "#fff", border: "1px solid #E2E8F0" }}>
              <p className="font-body text-[14px] font-bold mb-2" style={{ color: "#0F172A" }}>The short version:</p>
              <p className="font-body text-[15px] leading-relaxed" style={{ color: "#475569" }}>
                We collect minimal data. We store zero personal information about your child. Everything runs on anonymous aliases. We never sell your data. You can export or delete everything at any time. That's it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[800px] mx-auto px-6 max-[767px]:px-5 py-20 max-[767px]:py-14">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i === 0 ? 0 : 50}>
              <div className={i > 0 ? "mt-12 pt-12" : ""} style={i > 0 ? { borderTop: "1px solid #E2E8F0" } : undefined}>
                <h2 className="font-body text-[20px] font-bold mb-4" style={{ color: "#0F172A" }}>{section.title}</h2>
                <p className="font-body text-[15px] leading-[1.8]" style={{ color: "#475569" }}>{section.content}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={100}>
            <div className="mt-16 rounded-[16px] p-6 text-center" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <p className="font-body text-[18px] font-bold mb-1" style={{ color: "#0F172A" }}>Questions about your data?</p>
              <p className="font-body text-[15px] mb-3" style={{ color: "#475569" }}>We're here to help. Reach out anytime.</p>
              <a href="mailto:privacy@focusbox.io" className="font-body text-[15px] font-semibold inline-flex items-center gap-1" style={{ color: "#2563EB" }}>Contact Privacy Team →</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Privacy;
