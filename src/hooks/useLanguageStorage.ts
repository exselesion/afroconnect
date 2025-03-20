
import { useState, useEffect } from "react";
import { LanguageCode } from "@/translations/types";

const DEFAULT_LANGUAGE: LanguageCode = "ru";

export const useLanguageStorage = () => {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = localStorage.getItem("language") as LanguageCode;
    return savedLanguage || DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  return { language, setLanguage };
};
