import { en } from "./en";
import { ru } from "./ru";
import { hy } from "./hy";
import type { Translation, Language } from "./types";

export const translations: Record<Language, Translation> = {
  en,
  ru,
  hy,
};

export const defaultLanguage: Language = "en";
export const supportedLanguages: Language[] = ["en", "ru", "hy"];

export type {
  Translation,
  Language,
  ExperienceItem,
  EducationItem,
} from "./types";
