import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, defaultLanguage, supportedLanguages } from '../locales';

type Language = 'en' | 'ru' | 'hy';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  get: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && supportedLanguages.includes(savedLang)) {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0] as Language;
      if (supportedLanguages.includes(browserLang)) {
        setLanguageState(browserLang);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const get = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return undefined;
      }
    }
    
    return value;
  };

  const t = (key: string): string => {
    const value = get(key);
    if (typeof value === 'string') {
      return value;
    }
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
