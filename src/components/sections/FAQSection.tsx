import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What age is FocusBox designed for?",
    a: "FocusBox is designed for children aged 6–12. The device uses simple buttons and visual cues, so reading ability isn't required. Parents of teens have also expressed interest — building focus is universal.",
  },
  {
    q: "Do I need to supervise every session?",
    a: "No. You set up the device initially and can start sessions from your phone, but your child can run sessions independently after that. The device is designed to be child-driven once the routine is established.",
  },
  {
    q: "Is this a medical device? Is it for ADHD?",
    a: "FocusBox is not a medical device, diagnostic tool, or treatment. It's a focus-building habit trainer — like a fitness tracker for concentration. Many families whose children face attention challenges use it as part of their daily routine, but we make zero clinical claims.",
  },
  {
    q: "What's the science behind it?",
    a: "FocusBox combines proven techniques: structured timed work intervals, self-monitoring prompts to maintain engagement, adaptive difficulty that responds to your child's patterns, and positive reinforcement through visible progress. Our AI recommendations are generated using research-backed best practices and reviewed by child development professionals.",
  },
  {
    q: "What if it doesn't work for my child?",
    a: "We offer a 14-day return policy, no questions asked. If it's not the right fit, return the device for a full refund. You can also cancel your subscription at any time with no lock-in.",
  },
  {
    q: "How is my child's data protected?",
    a: "FocusBox stores zero personal information about your child. Everything runs on anonymous aliases. All data is encrypted, GDPR-ready, and you can export or permanently delete it at any time from the app. We never sell data. Period.",
  },
  {
    q: "Does the device need Wi-Fi or internet?",
    a: "No. The device works completely offline. It connects to your phone via Bluetooth to sync session data, and can store over a week of sessions locally. Your child never needs internet access to use FocusBox.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 min-[900px]:py-32 max-[767px]:py-16 bg-white">
      <div className="max-w-[720px] mx-auto px-6 max-[767px]:px-5">
        <div className="text-center mb-16 max-[767px]:mb-10">
          <Reveal>
            <span className="font-body text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#2563EB" }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="font-display text-foreground mt-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
            >
              Everything you need to know.
            </h2>
          </Reveal>
        </div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={200 + i * 60}>
                <div
                  className="border-b"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <span className="font-body text-[17px] max-[767px]:text-[16px] font-semibold text-foreground">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "" : ""
                      }`}
                      style={{ background: isOpen ? "#0F172A" : "#F1F5F9" }}
                    >
                      <Plus
                        size={16}
                        className={`transition-all duration-300 ${
                          isOpen ? "text-white rotate-45" : "text-foreground"
                        }`}
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-[400ms]"
                    style={{
                      maxHeight: isOpen ? 300 : 0,
                      opacity: isOpen ? 1 : 0,
                      transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    <p className="font-body text-[15px] text-muted-foreground leading-[1.7] pb-5">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
