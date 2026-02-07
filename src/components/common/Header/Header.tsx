import React, { useState } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { motion } from "framer-motion";
import { NAV_LINKS, useAppStore } from "../../../store/appStore";
import whiteLogo from "../../../assets/whiteLogo.svg";
import { Link, useLocation } from "react-router-dom";
import { headerMotion } from "../../../utils/animations";
import { useLanguage } from "../../../hooks/useLanguage";
import { HiMenu } from "react-icons/hi";
import { MobileNavigation } from "./MobileNavigation.tsx";
import { Navigation } from "./Navigation.tsx";

export const Header: React.FC = () => {
  const { theme } = useAppStore();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const locationNameForMobileHeader =
    NAV_LINKS.find((item) => item.href === location.pathname)?.id || "";
  return (
    <motion.header
      {...headerMotion}
      className="fixed w-full z-50 border-b border-border"
    >
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 z-50 shadow-lg
                    backdrop-blur-md rounded-full border border-border"
      >
        <div className="flex items-center gap-8 px-10 h-14 rounded-full border border-border w-full justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer md:px-8"
          >
            <Link to="/">
              <div
                role="img"
                aria-label="logo"
                className={`w-[40px] h-[40px] bg-center bg-no-repeat bg-contain
                            transition-[filter] duration-300 ease-out brightness-150 contrast-125
                            ${theme === "dark" ? "" : "invert"} `}
                style={{
                  backgroundImage: `url(${whiteLogo})`,
                }}
              />
            </Link>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden md:block h-6 w-px bg-black dark:bg-white ml-2" />

          {/*Page name for Mobile*/}
          <div
            className="md:hidden flex-1 min-w-[110px] text-center text-md text-gradient font-bold mr-2"
            onClick={toggleMenu}
          >
            {t(`nav.${locationNameForMobileHeader}`)}
          </div>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Vertical divider */}
          <div className="hidden md:block h-6 w-px bg-black dark:bg-white ml-2" />

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <HiMenu className="w-6 h-6 md:hidden" onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileNavigation setIsMenuOpen={setIsMenuOpen} />}
    </motion.header>
  );
};
