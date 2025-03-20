
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
      "contactUs": "Контакты",
      "followUs": "Следите за нами",
      "legal": "Правовая информация",
      "termsOfService": "Условия использования",
      "privacyPolicy": "Политика конфиденциальности",
      "userAgreement": "Пользовательское соглашение",
      "allRightsReserved": "© 2024 РАТПП. Все права защищены.",
      // Homepage
      "homeTitle": "Российско-Африканская Торгово-Промышленная Палата",
      "homeSubtitle": "Объединяем бизнес и культуры России и Африки",
      "becomeMember": "Стать участником",
      "businessConnections": "Деловые связи",
      "businessConnectionsDesc": "Налаживаем связи между ведущими компаниями и предпринимателями России и Африки",
      "tradeDevelopment": "Развитие торговли",
      "tradeDevelopmentDesc": "Содействуем международной торговле и экономическому сотрудничеству между регионами",
      "investmentOpportunities": "Инвестиционные возможности",
      "investmentOpportunitiesDesc": "Открываем инвестиционные перспективы и возможности развития бизнеса",
      "latestNews": "Последние новости",
      "upcomingEvents": "Предстоящие события",
      "businessForum": "Анонс бизнес-форума",
      "businessForumDesc": "Совместные бизнес-возможности и экономическое сотрудничество между российскими и африканскими компаниями...",
      "tradeMission": "Торговая миссия в ЮАР",
      "tradeMissionDate": "15 июня 2024",
      "tradeMissionLocation": "Йоханнесбург",
      "tradeMissionDesc": "Присоединяйтесь к нашей торговой миссии, чтобы изучить возможности бизнеса...",
      // NotFound Page
      "notFound": "404",
      "pageNotFound": "Упс! Страница не найдена",
      "returnHome": "Вернуться на главную",
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
      // Homepage
      "homeTitle": "Russian-African Chamber of Commerce",
      "homeSubtitle": "Connecting businesses and cultures between Russia and Africa",
      "becomeMember": "Become a Member",
      "businessConnections": "Business Connections",
      "businessConnectionsDesc": "We establish connections between leading companies and entrepreneurs from Russia and Africa",
      "tradeDevelopment": "Trade Development",
      "tradeDevelopmentDesc": "We promote international trade and economic cooperation between regions",
      "investmentOpportunities": "Investment Opportunities",
      "investmentOpportunitiesDesc": "We open investment prospects and business development opportunities",
      "latestNews": "Latest News",
      "upcomingEvents": "Upcoming Events",
      "businessForum": "Business Forum Announcement",
      "businessForumDesc": "Joint business opportunities and economic cooperation between Russian and African companies...",
      "tradeMission": "Trade Mission to South Africa",
      "tradeMissionDate": "June 15, 2024",
      "tradeMissionLocation": "Johannesburg",
      "tradeMissionDesc": "Join our trade mission to explore business opportunities...",
      // NotFound Page
      "notFound": "404",
      "pageNotFound": "Oops! Page not found",
      "returnHome": "Return to Home",
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
      // Homepage
      "homeTitle": "Chambre de Commerce Russo-Africaine",
      "homeSubtitle": "Connecter les entreprises et les cultures entre la Russie et l'Afrique",
      "becomeMember": "Devenir membre",
      "businessConnections": "Connexions d'affaires",
      "businessConnectionsDesc": "Nous établissons des liens entre les principales entreprises et entrepreneurs de Russie et d'Afrique",
      "tradeDevelopment": "Développement commercial",
      "tradeDevelopmentDesc": "Nous promouvons le commerce international et la coopération économique entre les régions",
      "investmentOpportunities": "Opportunités d'investissement",
      "investmentOpportunitiesDesc": "Nous ouvrons des perspectives d'investissement et des opportunités de développement commercial",
      "latestNews": "Dernières actualités",
      "upcomingEvents": "Événements à venir",
      "businessForum": "Annonce du forum d'affaires",
      "businessForumDesc": "Opportunités commerciales conjointes et coopération économique entre les entreprises russes et africaines...",
      "tradeMission": "Mission commerciale en Afrique du Sud",
      "tradeMissionDate": "15 juin 2024",
      "tradeMissionLocation": "Johannesburg",
      "tradeMissionDesc": "Rejoignez notre mission commerciale pour explorer les opportunités d'affaires...",
      // NotFound Page
      "notFound": "404",
      "pageNotFound": "Oups! Page non trouvée",
      "returnHome": "Retour à l'accueil",
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
      // Homepage
      "homeTitle": "غرفة التجارة الروسية الأفريقية",
      "homeSubtitle": "ربط الأعمال والثقافات بين روسيا وأفريقيا",
      "becomeMember": "كن عضوًا",
      "businessConnections": "روابط الأعمال",
      "businessConnectionsDesc": "نقيم روابط بين الشركات الرائدة ورجال الأعمال من روسيا وأفريقيا",
      "tradeDevelopment": "تنمية التجارة",
      "tradeDevelopmentDesc": "نعزز التجارة الدولية والتعاون الاقتصادي بين المناطق",
      "investmentOpportunities": "فرص الاستثمار",
      "investmentOpportunitiesDesc": "نفتح آفاق الاستثمار وفرص تطوير الأعمال",
      "latestNews": "أحدث الأخبار",
      "upcomingEvents": "الأحداث القادمة",
      "businessForum": "إعلان منتدى الأعمال",
      "businessForumDesc": "فرص الأعمال المشتركة والتعاون الاقتصادي بين الشركات الروسية والأفريقية...",
      "tradeMission": "بعثة تجارية إلى جنوب أفريقيا",
      "tradeMissionDate": "15 يونيو 2024",
      "tradeMissionLocation": "جوهانسبرغ",
      "tradeMissionDesc": "انضم إلى بعثتنا التجارية لاستكشاف فرص الأعمال...",
      // NotFound Page
      "notFound": "404",
      "pageNotFound": "عفوا! الصفحة غير موجودة",
      "returnHome": "العودة إلى الصفحة الرئيسية",
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
      // Homepage
      "homeTitle": "Câmara de Comércio Russo-Africana",
      "homeSubtitle": "Conectando negócios e culturas entre Rússia e África",
      "becomeMember": "Torne-se um membro",
      "businessConnections": "Conexões de Negócios",
      "businessConnectionsDesc": "Estabelecemos conexões entre empresas líderes e empreendedores da Rússia e África",
      "tradeDevelopment": "Desenvolvimento Comercial",
      "tradeDevelopmentDesc": "Promovemos o comércio internacional e a cooperação econômica entre regiões",
      "investmentOpportunities": "Oportunidades de Investimento",
      "investmentOpportunitiesDesc": "Abrimos perspectivas de investimento e oportunidades de desenvolvimento de negócios",
      "latestNews": "Últimas Notícias",
      "upcomingEvents": "Próximos Eventos",
      "businessForum": "Anúncio do Fórum de Negócios",
      "businessForumDesc": "Oportunidades de negócios conjuntas e cooperação econômica entre empresas russas e africanas...",
      "tradeMission": "Missão Comercial à África do Sul",
      "tradeMissionDate": "15 de junho de 2024",
      "tradeMissionLocation": "Joanesburgo",
      "tradeMissionDesc": "Junte-se à nossa missão comercial para explorar oportunidades de negócios...",
      // NotFound Page
      "notFound": "404",
      "pageNotFound": "Ops! Página não encontrada",
      "returnHome": "Voltar para a Página Inicial",
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
      // Homepage
      "homeTitle": "Chumba cha Biashara cha Urusi-Afrika",
      "homeSubtitle": "Kuunganisha biashara na tamaduni kati ya Urusi na Afrika",
      "becomeMember": "Kuwa Mwanachama",
      "businessConnections": "Uhusiano wa Kibiashara",
      "businessConnectionsDesc": "Tunaanzisha uhusiano kati ya kampuni zinazotawala na wajasiriamali kutoka Urusi na Afrika",
      "tradeDevelopment": "Maendeleo ya Biashara",
      "tradeDevelopmentDesc": "Tunakuza biashara ya kimataifa na ushirikiano wa kiuchumi kati ya mikoa",
      "investmentOpportunities": "Fursa za Uwekezaji",
      "investmentOpportunitiesDesc": "Tunafungua matarajio ya uwekezaji na fursa za maendeleo ya biashara",
      "latestNews": "Habari za Hivi Karibuni",
      "upcomingEvents": "Matukio Yanayokuja",
      "businessForum": "Tangazo la Jukwaa la Biashara",
      "businessForumDesc": "Fursa za pamoja za biashara na ushirikiano wa kiuchumi kati ya makampuni ya Urusi na Afrika...",
      "tradeMission": "Ujumbe wa Kibiashara kwenda Afrika Kusini",
      "tradeMissionDate": "Juni 15, 2024",
      "tradeMissionLocation": "Johannesburg",
      "tradeMissionDesc": "Jiunge na ujumbe wetu wa kibiashara kuchunguza fursa za biashara...",
      // NotFound Page
      "notFound": "404",
      "pageNotFound": "Samahani! Ukurasa haujapatikana",
      "returnHome": "Rudi kwenye Ukurasa wa Nyumbani",
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
