import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AnchorLink from "./AnchorLink";

const navLinks = [
  { label: "About", href: "/about", type: "route" as const },
  { label: "Investors", href: "/investors", type: "route" as const },
  { label: "Pricing", href: "/#pricing", type: "anchor" as const },
  { label: "Contact", href: "/contact", type: "route" as const },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav border-b border-border shadow-card"
          : "bg-transparent"
      }`}
      style={{ height: 72 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1B2A4A, #2D4A7A)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5" />
              <circle cx="9" cy="9" r="2.5" fill="white" />
              <line x1="9" y1="2" x2="9" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-display text-[22px] text-foreground">FocusBox</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden min-[900px]:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const cls = `font-body text-sm font-medium transition-all duration-200 relative ${
              active
                ? "text-foreground"
                : "text-foreground/70 hover:text-foreground"
            }`;
            const underline = active ? (
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                style={{ background: "#E8913A" }}
              />
            ) : null;

            return link.type === "anchor" ? (
              <AnchorLink key={link.label} to={link.href} className={cls}>
                {link.label}
                {underline}
              </AnchorLink>
            ) : (
              <Link key={link.label} to={link.href} className={cls}>
                {link.label}
                {underline}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <AnchorLink
          to="/#pricing"
          className="hidden min-[900px]:inline-flex items-center px-5 py-2.5 rounded-pill bg-primary text-primary-foreground font-body text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
        >
          Get Started
        </AnchorLink>

        {/* Mobile Hamburger */}
        <button
          className="min-[900px]:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`min-[900px]:hidden glass-nav border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.type === "anchor" ? (
                <AnchorLink
                  key={link.label}
                  to={link.href}
                  className="font-body text-base font-medium text-foreground/70 hover:text-foreground transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </AnchorLink>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-body text-base font-medium text-foreground/70 hover:text-foreground transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <AnchorLink
              to="/#pricing"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-pill bg-primary text-primary-foreground font-body text-sm font-semibold mt-2 transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
