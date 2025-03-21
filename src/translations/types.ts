
import { languages } from "@/constants/menuItems";

export type LanguageCode = typeof languages[number]["code"];

export interface Translations {
  [key: string]: string;
}

export interface TranslationsMap {
  [languageCode: string]: Translations;
}

// Account page related types
export interface UserProfile {
  companyName: string;
  fullName: string;
  membershipLevel: string;
  personalManager: {
    name: string;
    phone: string;
    email: string;
  };
}
