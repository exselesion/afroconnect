import { useState } from "react";
import { Menu, Globe, User, X, ChevronDown, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const languages = [
  { code: "ru", name: "Русский" },
  { code: "ar", name: "العربية" },
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  { code: "pt", name: "Português" },
  { code: "sw", name: "Kiswahili" },
];

const menuStructure = {
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

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const AuthDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isLoginMode ? "Вход в личный кабинет" : "Регистрация"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="введите email"
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Пароль
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <input
                  id="password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="введите пароль"
                />
              </div>
            </div>

            {!isLoginMode && (
              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="confirmPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Подтверждение пароля
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <input
                    id="confirmPassword"
                    type="password"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="подтвердите пароль"
                  />
                </div>
              </div>
            )}

            <Button className="w-full" type="submit">
              {isLoginMode ? "Войти" : "Зарегистрироваться"}
            </Button>

            <div className="text-center text-sm">
              <button
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-primary hover:underline"
              >
                {isLoginMode
                  ? "Нет аккаунта? Зарегистрируйтесь"
                  : "Уже есть аккаунт? Войдите"}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const renderDesktopMenuItem = (section: keyof typeof menuStructure) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1">
          {menuStructure[section].title}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuGroup>
          {menuStructure[section].items.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <a href={item.href} className="w-full">
                {item.title}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderMobileMenuItem = (section: keyof typeof menuStructure) => (
    <div key={section} className="space-y-2">
      <div className="font-semibold text-lg">{menuStructure[section].title}</div>
      <div className="pl-4 space-y-2">
        {menuStructure[section].items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block text-muted-foreground hover:text-foreground"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            <a href="/" className="flex items-center gap-2">
              <span className="font-playfair text-xl font-semibold">CCAFRU</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            {Object.keys(menuStructure).map((section) => 
              section !== "committees" && renderDesktopMenuItem(section as keyof typeof menuStructure)
            )}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code}>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <AuthDialog />
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-16 bg-background z-40 overflow-y-auto transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="container-custom py-6 space-y-6">
          {Object.keys(menuStructure).map((section) => 
            section !== "committees" && renderMobileMenuItem(section as keyof typeof menuStructure)
          )}
        </nav>
      </div>
    </header>
  );
};
