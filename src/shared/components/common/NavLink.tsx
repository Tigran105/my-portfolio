import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useAppStore } from "@/shared/store/appStore.ts";

interface NavLinkProps {
  href: string;
  label: string | React.JSX.Element;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label, className }) => {
  const { activeSection, setActiveSection } = useAppStore();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isExternalLink = href.startsWith("http") || href.startsWith("mailto:");

  const handleClick = (e: React.MouseEvent) => {
    if (isExternalLink || href.startsWith("/")) return;

    e.preventDefault();

    if (isHomePage && href.startsWith("#")) {
      const sectionId = href.replace("#", "");
      setActiveSection(sectionId);

      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  const isActive = isHomePage && activeSection === href.replace("#", "");
  const isRouteActive = !isHomePage && location.pathname === href;

  if (isExternalLink) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative font-medium transition-colors ${className || ""}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </motion.a>
    );
  }

  return (
    <Link
      to={isHomePage && href.startsWith("#") ? "/" : href}
      onClick={handleClick}
      className={`relative font-medium transition-colors ${
        isActive || isRouteActive ? "text-blue-600" : ""
      } ${className || ""}`}
    >
      {label}
      {(isActive || isRouteActive) && (
        <motion.div
          layoutId="activeLink"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
};
