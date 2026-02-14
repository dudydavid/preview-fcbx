import { Link } from "react-router-dom";
import AnchorLink from "./AnchorLink";

const productLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer style={{ background: "#0F172A" }} className="text-white/30 border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 py-16 max-[767px]:py-10 relative">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-12 max-[767px]:gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 border border-white/10 flex items-center justify-center" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#2563EB" strokeWidth="1.5" />
                  <circle cx="9" cy="9" r="2.5" fill="#2563EB" />
                  <line x1="9" y1="2" x2="9" y2="5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-display text-lg text-white/60">FocusBox</span>
            </div>
            <p className="text-sm leading-relaxed font-mono text-[12px]">
              Building the world's first fitness tracker for children's focus. Screen-free. Data-driven. Privacy-first.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <AnchorLink
                    to={link.href}
                    className="text-sm hover:text-white/60 transition-colors duration-200 font-mono text-[12px]"
                  >
                    {link.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-white/60 transition-colors duration-200 font-mono text-[12px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col min-[900px]:flex-row justify-between gap-4 font-mono text-[11px]">
          <span>© {new Date().getFullYear()} FocusBox. All rights reserved.</span>
          <span className="max-w-md min-[900px]:text-right">
            FocusBox is not a medical device. Recommendations follow best practices, not clinical advice.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
