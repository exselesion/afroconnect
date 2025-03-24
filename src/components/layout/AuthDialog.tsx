
import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

export const AuthDialog = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error(t("fillAllFields"));
      return;
    }

    setLoading(true);

    try {
      if (isLoginMode) {
        // Логин пользователя
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        
        toast.success(t("loginSuccess"));
        window.location.href = "/account";
      } else {
        // Проверка соответствия паролей
        if (password !== confirmPassword) {
          toast.error(t("passwordsDoNotMatch"));
          setLoading(false);
          return;
        }
        
        // Регистрация пользователя
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;
        
        toast.success(t("registrationSuccess"));
        setIsLoginMode(true);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error(isLoginMode ? t("loginError") : t("registrationError"));
    } finally {
      setLoading(false);
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
                  disabled={loading}
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
                  disabled={loading}
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
                    disabled={loading}
                  />
                </div>
              </div>
            )}

            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? t("loading") : (isLoginMode ? t("loginButton") : t("registerButton"))}
            </Button>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsLoginMode(!isLoginMode);
                }}
                className="text-primary hover:underline"
                disabled={loading}
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
