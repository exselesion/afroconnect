
import { languages } from "@/constants/menuItems";

export type LanguageCode = typeof languages[number]["code"];

export interface Translations {
  [key: string]: string;
}

export interface TranslationsMap {
  [languageCode: string]: Translations;
}
