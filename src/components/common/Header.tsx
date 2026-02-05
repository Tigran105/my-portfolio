import React, { useState } from "react";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";
import { useAppStore } from "../../store/appStore";
import { NAV_LINKS } from "../../store/appStore";
import purpleLogo from "../../assets/purpleLogo.svg";
import whiteLogo from "../../assets/purpleLogo.svg";
import { NavLink } from "./NavLink.tsx";

const headerMotion: {
  initial: { y: number };
  animate: { y: number };
  transition: import("framer-motion").Transition;
} = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { type: "spring", damping: 25 } as const,
};

const mobileMenuMotion = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, theme } = useAppStore();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const renderMobileMenuIcon = () =>
    isMenuOpen ? <CloseIcon /> : <HamburgerIcon />;

  return (
    <motion.header
      {...headerMotion}
      className="fixed w-full z-50 border-b border-border"
    >
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[89vw] md:w-[50vw] backdrop-blur-md shadow-lg rounded-full border border-border">
        <div className="flex items-center gap-8 px-10 h-14 rounded-full border border-border w-full justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <NavLink
              href="/"
              label={
                <img
                  src={theme === "light" ? purpleLogo : whiteLogo}
                  alt="logo"
                  className="w-[40px]"
                />
              }
            />
          </motion.div>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
            >
              {renderMobileMenuIcon()}
            </button>
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          {...mobileMenuMotion}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${
                  activeSection === link.id ? "text-ring" : "text-foreground"
                } hover:text-ring transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
