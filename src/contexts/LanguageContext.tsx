
import React, { createContext, useContext, useState, useEffect } from "react";
import { languages } from "@/constants/menuItems";

type LanguageCode = typeof languages[number]["code"];

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string) => string;
}

const defaultLanguage: LanguageCode = "ru";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = localStorage.getItem("language") as LanguageCode;
    return savedLanguage || defaultLanguage;
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  // Translations dictionary
  const translations: Record<LanguageCode, Record<string, string>> = {
    ru: {
      // Header
      "about": "О нас",
      "services": "Услуги",
      "events": "Мероприятия",
      "news": "Новости и события",
      "membership": "Членство",
      "committees": "Комитеты",
      // Auth Dialog
      "login": "Вход в личный кабинет",
      "register": "Регистрация",
      "email": "Email",
      "password": "Пароль",
      "confirmPassword": "Подтверждение пароля",
      "enterEmail": "введите email",
      "enterPassword": "введите пароль",
      "confirmPasswordPlaceholder": "подтвердите пароль",
      "loginButton": "Войти",
      "registerButton": "Зарегистрироваться",
      "noAccount": "Нет аккаунта? Зарегистрируйтесь",
      "haveAccount": "Уже есть аккаунт? Войдите",
      // Footer
      "contactUs": "Contact Us",
      "followUs": "Follow Us",
      "legal": "Legal",
      "termsOfService": "Terms of Service",
      "privacyPolicy": "Privacy Policy",
      "userAgreement": "User Agreement",
      "allRightsReserved": "© 2024 CCAFRU. All rights reserved.",
    },
    en: {
      // Header
      "about": "About Us",
      "services": "Services",
      "events": "Events",
      "news": "News & Events",
      "membership": "Membership",
      "committees": "Committees",
      // Auth Dialog
      "login": "Login to your account",
      "register": "Register",
      "email": "Email",
      "password": "Password",
      "confirmPassword": "Confirm Password",
      "enterEmail": "enter your email",
      "enterPassword": "enter your password",
      "confirmPasswordPlaceholder": "confirm your password",
      "loginButton": "Login",
      "registerButton": "Register",
      "noAccount": "No account? Register",
      "haveAccount": "Already have an account? Login",
      // Footer
      "contactUs": "Contact Us",
      "followUs": "Follow Us",
      "legal": "Legal",
      "termsOfService": "Terms of Service",
      "privacyPolicy": "Privacy Policy",
      "userAgreement": "User Agreement",
      "allRightsReserved": "© 2024 CCAFRU. All rights reserved.",
    },
    fr: {
      // Header
      "about": "À propos",
      "services": "Services",
      "events": "Événements",
      "news": "Actualités",
      "membership": "Adhésion",
      "committees": "Comités",
      // Auth Dialog
      "login": "Connexion",
      "register": "Inscription",
      "email": "Email",
      "password": "Mot de passe",
      "confirmPassword": "Confirmer le mot de passe",
      "enterEmail": "entrez votre email",
      "enterPassword": "entrez votre mot de passe",
      "confirmPasswordPlaceholder": "confirmez votre mot de passe",
      "loginButton": "Se connecter",
      "registerButton": "S'inscrire",
      "noAccount": "Pas de compte? Inscrivez-vous",
      "haveAccount": "Vous avez déjà un compte? Connectez-vous",
      // Footer
      "contactUs": "Contactez-nous",
      "followUs": "Suivez-nous",
      "legal": "Mentions légales",
      "termsOfService": "Conditions d'utilisation",
      "privacyPolicy": "Politique de confidentialité",
      "userAgreement": "Accord d'utilisateur",
      "allRightsReserved": "© 2024 CCAFRU. Tous droits réservés.",
    },
    ar: {
      // Header
      "about": "من نحن",
      "services": "الخدمات",
      "events": "الفعاليات",
      "news": "الأخبار",
      "membership": "العضوية",
      "committees": "اللجان",
      // Auth Dialog
      "login": "تسجيل الدخول",
      "register": "التسجيل",
      "email": "البريد الإلكتروني",
      "password": "كلمة المرور",
      "confirmPassword": "تأكيد كلمة المرور",
      "enterEmail": "أدخل البريد الإلكتروني",
      "enterPassword": "أدخل كلمة المرور",
      "confirmPasswordPlaceholder": "تأكيد كلمة المرور",
      "loginButton": "دخول",
      "registerButton": "تسجيل",
      "noAccount": "ليس لديك حساب؟ سجل الآن",
      "haveAccount": "لديك حساب بالفعل؟ تسجيل الدخول",
      // Footer
      "contactUs": "اتصل بنا",
      "followUs": "تابعنا",
      "legal": "قانوني",
      "termsOfService": "شروط الخدمة",
      "privacyPolicy": "سياسة الخصوصية",
      "userAgreement": "اتفاقية المستخدم",
      "allRightsReserved": "© 2024 CCAFRU. جميع الحقوق محفوظة.",
    },
    pt: {
      // Header
      "about": "Sobre nós",
      "services": "Serviços",
      "events": "Eventos",
      "news": "Notícias",
      "membership": "Associação",
      "committees": "Comitês",
      // Auth Dialog
      "login": "Entrar na conta",
      "register": "Registrar",
      "email": "Email",
      "password": "Senha",
      "confirmPassword": "Confirmar senha",
      "enterEmail": "digite seu email",
      "enterPassword": "digite sua senha",
      "confirmPasswordPlaceholder": "confirme sua senha",
      "loginButton": "Entrar",
      "registerButton": "Registrar",
      "noAccount": "Não tem conta? Registre-se",
      "haveAccount": "Já tem uma conta? Entre",
      // Footer
      "contactUs": "Fale Conosco",
      "followUs": "Siga-nos",
      "legal": "Legal",
      "termsOfService": "Termos de Serviço",
      "privacyPolicy": "Política de Privacidade",
      "userAgreement": "Acordo do Usuário",
      "allRightsReserved": "© 2024 CCAFRU. Todos os direitos reservados.",
    },
    sw: {
      // Header
      "about": "Kuhusu Sisi",
      "services": "Huduma",
      "events": "Matukio",
      "news": "Habari",
      "membership": "Uanachama",
      "committees": "Kamati",
      // Auth Dialog
      "login": "Ingia kwenye akaunti",
      "register": "Jiandikishe",
      "email": "Barua pepe",
      "password": "Nywila",
      "confirmPassword": "Thibitisha nywila",
      "enterEmail": "ingiza barua pepe",
      "enterPassword": "ingiza nywila",
      "confirmPasswordPlaceholder": "thibitisha nywila",
      "loginButton": "Ingia",
      "registerButton": "Jiandikishe",
      "noAccount": "Huna akaunti? Jiandikishe",
      "haveAccount": "Una akaunti tayari? Ingia",
      // Footer
      "contactUs": "Wasiliana Nasi",
      "followUs": "Tufuate",
      "legal": "Kisheria",
      "termsOfService": "Masharti ya Huduma",
      "privacyPolicy": "Sera ya Faragha",
      "userAgreement": "Makubaliano ya Mtumiaji",
      "allRightsReserved": "© 2024 CCAFRU. Haki zote zimehifadhiwa.",
    },
  };

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
