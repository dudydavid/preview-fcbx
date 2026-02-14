import { useNavigate, useLocation } from "react-router-dom";
import type { ReactNode, MouseEvent } from "react";

interface AnchorLinkProps {
  to: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  style?: React.CSSProperties;
}

const NAVBAR_OFFSET = 80;

const AnchorLink = ({ to, className, onClick, children, style }: AnchorLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    onClick?.();

    const [path, hash] = to.split("#");
    const targetPath = path || "/";

    if (location.pathname === targetPath && hash) {
      scrollToHash(hash);
    } else {
      navigate(targetPath);
      if (hash) {
        setTimeout(() => scrollToHash(hash), 150);
      }
    }
  };

  return (
    <a href={to} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
};

export default AnchorLink;
