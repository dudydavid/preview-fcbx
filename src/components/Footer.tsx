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
    <footer style={{ background: "#0F172A" }} className="text-white/40">
      <div className="max-w-[1200px] mx-auto px-6 py-16 max-[767px]:py-10">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-12 max-[767px]:gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5" />
                  <circle cx="9" cy="9" r="2.5" fill="white" />
                  <line x1="9" y1="2" x2="9" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-display text-lg text-white/80">FocusBox</span>
            </div>
            <p className="text-sm leading-relaxed">
              Building the world's first fitness tracker for children's focus. Screen-free. Data-driven. Privacy-first.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <AnchorLink
                    to={link.href}
                    className="text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {link.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-white/80 transition-colors duration-200"
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
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col min-[900px]:flex-row justify-between gap-4 text-xs">
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
