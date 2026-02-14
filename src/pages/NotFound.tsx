import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

const NotFound = () => {
  return (
    <>
      <PageMeta title="Page Not Found — FocusBox" description="The page you're looking for doesn't exist." />
      <section style={{ background: "#F8FAFC" }} className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6 py-20">
          <Reveal>
            <div
              className="font-display text-[80px] leading-none mb-6 select-none"
              style={{ color: "#0F172A", opacity: 0.15 }}
            >
              404
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-[32px] mb-4" style={{ color: "#0F172A" }}>
              Page not found.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-[16px] max-[767px]:text-[15px] mb-8 max-w-md mx-auto" style={{ color: "#475569" }}>
              Looks like this page wandered off. Let's get you back on track.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link
              to="/"
              className="inline-flex items-center px-7 py-3.5 rounded-pill text-white font-body text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }}
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
