import { en } from './en';
import { ru } from './ru';
import { hy } from './hy';

export type Language = 'en' | 'ru' | 'hy';
export type TranslationKey = keyof typeof en;

export const translations = {
  en,
  ru,
  hy,
};

export const defaultLanguage: Language = 'en';
export const supportedLanguages: Language[] = ['en', 'ru', 'hy'];
