import type { Language, Translation } from "@/shared/locales/types.ts";
import { en } from "@/shared/locales/en.ts";
import { ru } from "@/shared/locales/ru.ts";
import { hy } from "@/shared/locales/hy.ts";

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
