
import React, { createContext, useContext } from "react";
import { translations } from "@/translations";
import { LanguageCode } from "@/translations/types";
import { languages } from "@/constants/menuItems";
import { useLanguageStorage } from "@/hooks/useLanguageStorage";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language, setLanguage } = useLanguageStorage();

  // Translation function
  const t = (key: string): string => {
    if (!translations[language]) {
      return key;
    }
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
