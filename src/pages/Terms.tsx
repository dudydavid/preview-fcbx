import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";

const sections = [
  { title: "1. Acceptance of Terms", content: "By creating a FocusBox account, purchasing a FocusBox device, or using any part of the FocusBox system, you agree to these Terms of Service. If you do not agree, please do not use the product. You must be at least 18 years old to create an account and purchase FocusBox." },
  { title: "2. What FocusBox Is (and Is Not)", content: "FocusBox is a consumer wellness and educational tool designed to help children build focus habits through structured practice sessions. FocusBox is not a medical device, diagnostic tool, clinical treatment, or therapeutic intervention." },
  { title: "3. The FocusBox System", content: "FocusBox consists of a physical focus training device and a companion mobile application. The device is designed for use by children under parental supervision during initial setup. The system requires Bluetooth connectivity between the device and a compatible smartphone." },
  { title: "4. Account and Responsibility", content: "You are responsible for maintaining the security of your account credentials. You are responsible for all activity under your account. You must provide accurate contact information for account creation, report delivery, and communication." },
  { title: "5. Purchase, Pricing, and Payment", content: "The FocusBox Activation Kit is sold at the price listed at the time of purchase (currently €49 one-time). Subscription plans are billed at the rates displayed during checkout. Prices are in Euros (EUR). Shipping costs are additional." },
  { title: "6. Returns and Refunds", content: "We offer a 14-day return policy from the date you receive your FocusBox device. The device must be returned in working condition. Return shipping costs are borne by the customer unless due to a defect. Refunds are processed within 10 business days." },
  { title: "7. Subscription and Cancellation", content: "Subscriptions renew automatically unless you cancel. You may cancel at any time through the app. Cancellation takes effect at the end of your current billing period. After cancellation, you keep the physical device." },
  { title: "8. Intellectual Property", content: "All content, software, firmware, algorithms, designs, trademarks, and materials associated with FocusBox are the property of FocusBox d.o.o. or its licensors." },
  { title: "9. Data and Privacy", content: "Your use of FocusBox is also governed by our Privacy Policy, available at /privacy. In brief: we collect minimal personal data, store zero child personal information, and never sell your data." },
  { title: "10. Limitation of Liability", content: "FocusBox is provided 'as is' without warranties of any kind. We do not guarantee specific outcomes. Our total liability shall not exceed the amount you paid in the 12 months preceding the claim." },
  { title: "11. Warranty", content: "The FocusBox device comes with a one-year limited warranty against manufacturing defects. This warranty does not cover damage from misuse, water exposure, drops, or unauthorized modifications." },
  { title: "12. Modifications to Terms", content: "We may update these Terms from time to time. Material changes will be communicated via email at least 14 days before taking effect." },
  { title: "13. Governing Law", content: "These Terms are governed by the laws of the Republic of Serbia. Any disputes shall be resolved in the competent courts of Belgrade, Serbia." },
  { title: "14. Contact", content: "For any questions about these Terms: legal@focusbox.io. For support: support@focusbox.io. For privacy: privacy@focusbox.io." },
];

const Terms = () => {
  return (
    <>
      <PageMeta
        title="Terms of Service — FocusBox"
        description="Terms of service for FocusBox focus training system. 14-day returns, cancel anytime."
      />
      <section className="relative" style={{ background: "#0F172A" }}>
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-6 max-[767px]:px-5 pt-[140px] pb-[60px] text-center relative">
          <Reveal>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">LEGAL</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-4 mb-4 text-foreground" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>Terms of Service</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-mono text-[12px] text-muted-foreground mb-8">Last updated: February 2026</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="text-left border border-white/10 p-6 mx-auto max-w-[640px]" style={{ background: "rgba(23, 37, 84, 0.4)" }}>
              <p className="font-mono text-[10px] text-primary/40 mb-2">TLDR:</p>
              <p className="font-body text-[15px] leading-relaxed text-muted-foreground">
                FocusBox is a focus-building tool, not a medical device. You get a 14-day return window. You can cancel anytime. We respect your data.
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
              <p className="font-body text-[18px] font-bold mb-1 text-foreground">Have questions about our terms?</p>
              <p className="font-body text-[15px] text-muted-foreground mb-3">We believe in clarity. Ask us anything.</p>
              <Link to="/contact" className="font-mono text-[12px] font-semibold text-primary inline-flex items-center gap-1 uppercase tracking-wider">Contact Us →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Terms;
