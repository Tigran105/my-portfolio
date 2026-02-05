import React from "react";
import { useAppStore } from "../../store/appStore";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  label: string | React.JSX.Element;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label, className }) => {
  const { activeSection, setActiveSection } = useAppStore();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const isActive = activeSection === href.replace("#", "");

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`relative font-medium transition-colors ${
        isActive ? "text-blue-600" : ""
      } ${className || ""}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeLink"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.a>
  );
};
