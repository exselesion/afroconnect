
export const languages = [
  { code: "ru", name: "Русский" },
  { code: "ar", name: "العربية" },
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  { code: "pt", name: "Português" },
  { code: "sw", name: "Kiswahili" },
];

export const menuStructure = {
  about: {
    title: "О нас",
    items: [
      { title: "Что мы делаем", href: "/about/what-we-do" },
      { title: "Комитеты", href: "/about/committees" },
      { title: "Наши участники", href: "/about/members" },
      { title: "Наши партнёры", href: "/about/partners" },
      { title: "Наши контакты", href: "/about/contacts" },
    ],
  },
  services: {
    title: "Услуги",
    items: [
      { title: "Исследование рынка", href: "/services/market-research" },
      { title: "Анализ спроса", href: "/services/demand-analysis" },
      { title: "Коммерческое представительство", href: "/services/commercial-representation" },
      { title: "Совместные проекты", href: "/services/joint-projects" },
      { title: "Организация бизнес-миссий", href: "/services/business-missions" },
      { title: "Организация презентаций", href: "/services/presentations" },
      { title: "Визовая поддержка", href: "/services/visa-support" },
      { title: "ESG и КСО", href: "/services/esg" },
    ],
  },
  events: {
    title: "Мероприятия",
    items: [
      { title: "Наши мероприятия", href: "/events/our-events" },
      { title: "Мероприятия партнёров", href: "/events/partner-events" },
      { title: "Общественные мероприятия", href: "/events/public-events" },
      { title: "Бизнес и политические мероприятия", href: "/events/business-political" },
    ],
  },
  news: {
    title: "Новости и события",
    items: [
      { title: "Новости РАТПП", href: "/news/ccafru" },
      { title: "Новости партнёров", href: "/news/partners" },
      { title: "Международные новости", href: "/news/international" },
    ],
  },
  membership: {
    title: "Членство",
    items: [
      { title: "Преимущества членства", href: "/membership/benefits" },
      { title: "Категории членства", href: "/membership/categories" },
      { title: "Присоединиться к АРТПП", href: "/membership/join" },
    ],
  },
  committees: {
    title: "Комитеты",
    items: [
      { title: "Агропромышленность", href: "/committees/agriculture" },
      { title: "Креативные индустрии", href: "/committees/creative" },
      { title: "Образование", href: "/committees/education" },
      { title: "IT", href: "/committees/it" },
      { title: "Здравоохранение", href: "/committees/healthcare" },
      { title: "Устойчивое развитие", href: "/committees/sustainability" },
      { title: "Инновации и инвестиции", href: "/committees/innovations" },
      { title: "Безопасность", href: "/committees/security" },
      { title: "Юридические вопросы", href: "/committees/legal" },
      { title: "Финансы и налоги", href: "/committees/finance" },
      { title: "Логистика", href: "/committees/logistics" },
      { title: "Промышленность", href: "/committees/industry" },
      { title: "Малый и средний бизнес", href: "/committees/sme" },
      { title: "Человеческие ресурсы", href: "/committees/hr" },
      { title: "Туризм", href: "/committees/tourism" },
      { title: "Драгоценные металлы", href: "/committees/precious-metals" },
      { title: "Реклама и PR", href: "/committees/pr" },
      { title: "Стандартизация", href: "/committees/standardization" },
    ],
  },
};

export type MenuSection = keyof typeof menuStructure;
