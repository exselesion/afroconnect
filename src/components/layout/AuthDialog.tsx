
import { useState, FormEvent } from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export const AuthDialog = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: isLoginMode ? t("loginError") : t("registerError"),
        description: t("fillAllFields"),
        variant: "destructive",
      });
      return;
    }

    if (!isLoginMode && password !== confirmPassword) {
      toast({
        title: t("registerError"),
        description: t("passwordsDoNotMatch"),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Это заглушка для демонстрации. В реальности здесь будет интеграция с Supabase или другим сервисом
    try {
      if (isLoginMode) {
        // Логика входа
        console.log("Вход пользователя:", email);
        toast({
          title: t("loginSuccess"),
          description: t("welcomeBack"),
        });
      } else {
        // Логика регистрации
        console.log("Регистрация пользователя:", email);
        toast({
          title: t("registerSuccess"),
          description: t("accountCreated"),
        });
        setIsLoginMode(true); // Переключение на экран входа после успешной регистрации
      }
    } catch (error) {
      console.error("Ошибка аутентификации:", error);
      toast({
        title: isLoginMode ? t("loginError") : t("registerError"),
        description: t("authError"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isLoginMode ? t("login") : t("register")}
          </DialogTitle>
          <DialogDescription>
            {isLoginMode ? t("loginDescription") : t("registerDescription")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {t("email")}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder={t("enterEmail")}
                  required
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {t("password")}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  placeholder={t("enterPassword")}
                  required
                />
              </div>
            </div>

            {!isLoginMode && (
              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="confirmPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {t("confirmPassword")}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10"
                    placeholder={t("confirmPasswordPlaceholder")}
                    required
                  />
                </div>
              </div>
            )}

            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? t("loading") : (isLoginMode ? t("loginButton") : t("registerButton"))}
            </Button>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoginMode(!isLoginMode);
                }}
                className="text-primary hover:underline"
              >
                {isLoginMode
                  ? t("noAccount")
                  : t("haveAccount")}
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
