import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { NAV_LINKS, useAppStore } from "@/shared/store/appStore.ts";
import { useLanguage } from "@/shared/contexts/LanguageContext.tsx";
import { mobileMenuMotion } from "@/shared/utils/animations.ts";
import { LanguageSwitcher } from "@/shared/components/common/LanguageSwitcher";
import { ThemeToggle } from "@/shared/components/common/ThemeToggle.tsx";

interface MobileNavigationProps {
  setIsMenuOpen: (open: boolean) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  setIsMenuOpen,
}) => {
  const location = useLocation();
  const { theme } = useAppStore();
  const { t } = useLanguage();

  const getNavLabel = (id: string): string => {
    const navMap: Record<string, string> = {
      home: t("nav.home"),
      about: t("nav.about"),
      experience: t("nav.experience"),
      contact: t("nav.contact"),
    };
    return navMap[id] || id;
  };

  useEffect(() => {
    document.documentElement.style.overflow = "hidden"; // html
    document.body.style.overflow = "hidden"; // body

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <motion.div
      className={`fixed inset-0 ${theme === "dark" ? "bg-black/40" : "bg-white/40"} backdrop-blur-sm z-50`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsMenuOpen(false)}
    >
      <motion.div
        {...mobileMenuMotion}
        className="
              fixed top-24 right-4 w-72 max-h-[calc(100vh-7rem)] py-6
              bg-background/95 backdrop-blur-2xl border border-border/40
              rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden
            "
      >
        <div className="flex justify-between items-center px-6 pb-6 border-b border-border/30">
          <h3 className="text-xl font-bold text-gradient">{t("portfolio")}</h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-foreground/5 rounded-full transition"
          >
            <HiX className="h-5 w-5" />
          </button>
        </div>
        <div className="container mx-auto px-4 my-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className={`text-lg font-medium ${
                location.pathname === link.href
                  ? "text-gradient"
                  : "text-foreground"
              } hover:text-ring transition-colors`}
            >
              {getNavLabel(link.id)}
            </Link>
          ))}
          <div
            className="pt-4 border-t border-border flex items-center justify-between "
            onClick={(e) => e.stopPropagation()}
          >
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
