import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../hooks/useLanguage";
import { useClickOutside } from "../../../hooks/useClickOutSide.ts";

type Language = "en" | "ru" | "hy";

const flagEmojis: Record<Language, string> = {
  en: "🇺🇸",
  ru: "🇷🇺",
  hy: "🇦🇲",
};

const supportedLanguages: Language[] = ["en", "ru", "hy"];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const ref = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const getLanguageName = (lang: Language): string => {
    const names: Record<Language, string> = {
      en: "",
      ru: "",
      hy: "",
    };
    return names[lang];
  };
  // close on click outside
  useClickOutside(ref as React.RefObject<HTMLElement>, () => setOpen(false));

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-foreground/5 transition-colors"
      >
        <span className="text-lg">{flagEmojis[language]}</span>

        <span className="text-sm font-medium hidden md:inline">
          {getLanguageName(language)}
        </span>

        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-40 rounded-lg border border-border bg-background shadow-lg py-1 z-50"
          >
            {supportedLanguages.map((lang) => (
              <motion.button
                key={lang}
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  setOpen(false);
                }}
                whileTap={{ scale: 0.97 }}
                className={`
                  w-full px-4 py-2
                  flex items-center gap-2
                  text-left text-sm
                  transition-colors
                  hover:bg-accent
                  ${
                    language === lang
                      ? "bg-accent text-primary font-medium"
                      : "text-foreground"
                  }
                `}
              >
                <span className="text-lg leading-none">{flagEmojis[lang]}</span>
                <span>{getLanguageName(lang)}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
