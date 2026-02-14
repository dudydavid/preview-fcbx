import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
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
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #1B2A4A, #2D4A7A)",
            }}
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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-foreground/70 hover:text-foreground transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden min-[900px]:inline-flex items-center px-5 py-2.5 rounded-pill bg-primary text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>

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
      {mobileOpen && (
        <div className="min-[900px]:hidden glass-nav border-b border-border px-6 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-base font-medium text-foreground/70 hover:text-foreground transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-pill bg-primary text-primary-foreground font-body text-sm font-semibold mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
