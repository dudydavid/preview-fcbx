import { useNavigate, useLocation } from "react-router-dom";
import type { ReactNode, MouseEvent } from "react";

interface AnchorLinkProps {
  to: string; // e.g. "/#pricing"
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const AnchorLink = ({ to, className, onClick, children }: AnchorLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    onClick?.();

    const [path, hash] = to.split("#");
    const targetPath = path || "/";

    if (location.pathname === targetPath && hash) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(targetPath);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default AnchorLink;
