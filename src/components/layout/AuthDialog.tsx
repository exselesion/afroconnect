
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

export const AuthDialog = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { t } = useLanguage();

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
        <div className="grid gap-4 py-4">
          <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {t("email")}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t("enterEmail")}
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {t("password")}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <input
                  id="password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t("enterPassword")}
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
                  <input
                    id="confirmPassword"
                    type="password"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder={t("confirmPasswordPlaceholder")}
                  />
                </div>
              </div>
            )}

            <Button className="w-full" type="submit">
              {isLoginMode ? t("loginButton") : t("registerButton")}
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
              >
                {isLoginMode
                  ? t("noAccount")
                  : t("haveAccount")}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
