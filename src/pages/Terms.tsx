import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By creating a FocusBox account, purchasing a FocusBox device, or using any part of the FocusBox system, you agree to these Terms of Service. If you do not agree, please do not use the product. You must be at least 18 years old (or the age of legal majority in your jurisdiction) to create an account and purchase FocusBox.",
  },
  {
    title: "2. What FocusBox Is (and Is Not)",
    content:
      "FocusBox is a consumer wellness and educational tool designed to help children build focus habits through structured practice sessions. FocusBox is not a medical device, diagnostic tool, clinical treatment, or therapeutic intervention. It does not diagnose, treat, cure, or prevent any medical condition. The recommendations provided through our AI coaching feature are based on general best practices for building focus habits and are reviewed by child development professionals — but they do not constitute medical, psychological, or clinical advice. If you have concerns about your child's attention, behavior, or development, consult a qualified healthcare professional.",
  },
  {
    title: "3. The FocusBox System",
    content:
      "FocusBox consists of a physical focus training device and a companion mobile application. The device is designed for use by children under parental supervision during initial setup. The mobile app is designed for use by the parent or guardian. The system requires Bluetooth connectivity between the device and a compatible smartphone (iOS or Android) for data syncing and session management. The device operates offline during focus sessions.",
  },
  {
    title: "4. Account and Responsibility",
    content:
      "You are responsible for maintaining the security of your account credentials. You are responsible for all activity under your account. You must provide accurate contact information (email address) for account creation, report delivery, and communication. You agree to use FocusBox only for its intended purpose: supporting your child's focus-building practice at home.",
  },
  {
    title: "5. Purchase, Pricing, and Payment",
    content:
      "The FocusBox Activation Kit is sold at the price listed at the time of purchase (currently €49 one-time, which includes the device and the first month of service). Subscription plans are billed at the rates displayed during checkout — either monthly or annually. Prices are in Euros (EUR). Shipping costs are additional and displayed before purchase confirmation. We reserve the right to adjust pricing for future purchases, but any price change will not affect your current active subscription until renewal.",
  },
  {
    title: "6. Returns and Refunds",
    content:
      "We offer a 14-day return policy from the date you receive your FocusBox device. If you are not satisfied for any reason, you may initiate a return by contacting us at support@focusbox.io. The device must be returned in working condition (normal use and setup is expected — we do not require it to be unopened). Return shipping costs are borne by the customer unless the return is due to a defect or our error. Upon receiving the returned device, we will issue a full refund of the Activation Kit fee and any unused subscription charges. Refunds are processed within 10 business days.",
  },
  {
    title: "7. Subscription and Cancellation",
    content:
      "Your subscription begins after the first month included with the Activation Kit. Subscriptions renew automatically at the end of each billing period (monthly or annually) unless you cancel. You may cancel at any time through the app (Settings → Subscription → Cancel) or by contacting support. Cancellation takes effect at the end of your current billing period — you will retain access until then and will not be charged again. We do not offer partial refunds for unused portions of a billing period. After cancellation, you keep the physical device. It will continue to function as a basic timer, but you will lose access to the app's analytics, reports, recommendations, and syncing features.",
  },
  {
    title: "8. Intellectual Property",
    content:
      "All content, software, firmware, algorithms, designs, trademarks, and materials associated with FocusBox are the property of FocusBox d.o.o. or its licensors. You may not copy, modify, distribute, reverse-engineer, or create derivative works from any part of the FocusBox system. Your purchase grants you a personal, non-transferable license to use the device and app for their intended purpose.",
  },
  {
    title: "9. Data and Privacy",
    content:
      "Your use of FocusBox is also governed by our Privacy Policy, available at /privacy. By using FocusBox, you consent to the data practices described therein. In brief: we collect minimal personal data, store zero child personal information, and never sell your data.",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "FocusBox is provided 'as is' without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee specific outcomes — focus improvement depends on consistent use, individual factors, and home environment. To the maximum extent permitted by law, FocusBox d.o.o. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the product. Our total liability for any claim shall not exceed the amount you paid for FocusBox in the 12 months preceding the claim.",
  },
  {
    title: "11. Warranty",
    content:
      "The FocusBox device comes with a one-year limited warranty against manufacturing defects. If your device fails under normal use within one year of purchase, contact us and we will replace it free of charge. This warranty does not cover damage from misuse, water exposure, drops, or unauthorized modifications.",
  },
  {
    title: "12. Modifications to Terms",
    content:
      "We may update these Terms from time to time. If we make material changes, we will notify you via email at least 14 days before the changes take effect. Continued use after the effective date constitutes acceptance. If you do not agree to the updated terms, you may cancel your subscription and stop using the product.",
  },
  {
    title: "13. Governing Law",
    content:
      "These Terms are governed by the laws of the Republic of Serbia. Any disputes shall be resolved in the competent courts of Belgrade, Serbia, unless mandatory consumer protection laws in your jurisdiction require otherwise.",
  },
  {
    title: "14. Contact",
    content:
      "For any questions about these Terms: legal@focusbox.io. For support issues: support@focusbox.io. For privacy matters: privacy@focusbox.io.",
  },
];

const Terms = () => {
  return (
    <>
      {/* HEADER */}
      <section style={{ background: "#F7F6F3" }}>
        <div className="max-w-[800px] mx-auto px-6 pt-[140px] pb-[60px] text-center">
          <Reveal>
            <span className="font-body text-[13px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#E8913A" }}>
              LEGAL
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="font-display mt-4 mb-4"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#1B2A4A" }}
            >
              Terms of Service
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-[16px] mb-8" style={{ color: "#64748B" }}>
              Last updated: February 2026
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div
              className="text-left rounded-[16px] p-6 mx-auto max-w-[640px]"
              style={{ background: "#fff", border: "1px solid rgba(27,42,74,0.06)" }}
            >
              <p className="font-body text-[14px] font-bold mb-2" style={{ color: "#1B2A4A" }}>
                The short version:
              </p>
              <p className="font-body text-[15px] leading-relaxed" style={{ color: "#64748B" }}>
                FocusBox is a focus-building tool, not a medical device. You get a 14-day return window. You can cancel anytime. We respect your data. Use the product responsibly and we'll do the same.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="bg-white">
        <div className="max-w-[800px] mx-auto px-6 py-20">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i === 0 ? 0 : 50}>
              <div
                className={i > 0 ? "mt-12 pt-12" : ""}
                style={i > 0 ? { borderTop: "1px solid rgba(27,42,74,0.06)" } : undefined}
              >
                <h2 className="font-body text-[20px] font-bold mb-4" style={{ color: "#1B2A4A" }}>
                  {section.title}
                </h2>
                <p className="font-body text-[15px] leading-[1.8]" style={{ color: "#64748B" }}>
                  {section.content}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Bottom CTA card */}
          <Reveal delay={100}>
            <div
              className="mt-16 rounded-[16px] p-6 text-center"
              style={{ background: "#F7F6F3", border: "1px solid rgba(27,42,74,0.06)" }}
            >
              <p className="font-body text-[18px] font-bold mb-1" style={{ color: "#1B2A4A" }}>
                Have questions about our terms?
              </p>
              <p className="font-body text-[15px] mb-3" style={{ color: "#64748B" }}>
                We believe in clarity. Ask us anything.
              </p>
              <Link
                to="/contact"
                className="font-body text-[15px] font-semibold inline-flex items-center gap-1"
                style={{ color: "#E8913A" }}
              >
                Contact Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Terms;
