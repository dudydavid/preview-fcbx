import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

const NotFound = () => {
  return (
    <>
      <PageMeta title="Page Not Found — FocusBox" description="The page you're looking for doesn't exist." />
      <section className="min-h-screen flex items-center justify-center relative" style={{ background: "#0F172A" }}>
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <div className="text-center px-6 py-20 relative">
          <Reveal>
            <div className="font-mono text-[80px] leading-none mb-6 select-none text-foreground/10">
              404
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-[32px] text-foreground mb-4">
              Page not found.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-[16px] max-[767px]:text-[15px] text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like this page wandered off. Let's get you back on track.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link
              to="/"
              className="inline-flex items-center px-7 py-3.5 border border-white/20 text-foreground font-mono text-[12px] uppercase tracking-wider transition-all duration-200 hover:bg-foreground hover:text-background"
            >
              Back to Home →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default NotFound;
