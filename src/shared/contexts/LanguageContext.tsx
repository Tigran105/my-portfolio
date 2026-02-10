import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  type Language,
  supportedLanguages,
  translations,
} from "@/shared/locales";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  get: <T>(key: string) => T | undefined;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && supportedLanguages.includes(savedLang)) {
      setLanguageState(savedLang);
    } else {
      // const browserLang = navigator.language.split("-")[0] as Language;
      // if (supportedLanguages.includes(browserLang)) {
      //   setLanguageState(browserLang);
      // }
      setLanguageState(defaultLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    console.log(lang, "funnction");
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const get = <T,>(key: string): T | undefined => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return undefined;
      }
    }

    return value as T;
  };

  const t = (key: string): string => {
    const value = get<string>(key);
    if (typeof value === "string") {
      return value;
    }
    console.warn(`Missing translation for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, get }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
