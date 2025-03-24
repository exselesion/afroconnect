
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
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";

export const AuthDialog = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { t } = useLanguage();
  const { login, register, isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/account";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let success = false;
      
      if (isLoginMode) {
        success = await login(email, password);
      } else {
        success = await register(email, password, confirmPassword, fullName, companyName);
        if (success) {
          // Switch to login mode after successful registration
          setIsLoginMode(true);
          setPassword("");
          return;
        }
      }
      
      if (success && isLoginMode) {
        setOpen(false);
        navigate(from);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
    setCompanyName("");
  };

  const handleModeSwitch = () => {
    setIsLoginMode(!isLoginMode);
    resetForm();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isAuthenticated ? (
          <Button 
            variant="outline" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate("/account");
            }}
            className="flex items-center gap-2"
          >
            <User className="h-5 w-5" />
            <span className="hidden md:inline">{user?.full_name || t("account")}</span>
          </Button>
        ) : (
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isLoginMode ? t("login") : t("register")}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {t("email")}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder={t("enterEmail")}
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              {t("password")}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder={t("enterPassword")}
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Registration-specific fields */}
          {!isLoginMode && (
            <>
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  {t("confirmPassword")}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={t("confirmPasswordPlaceholder")}
                    className="pl-10"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium">
                  {t("fullName")}
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder={t("fullName")}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium">
                  {t("companyName")}
                </label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder={t("companyName")}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </>
          )}

          <Button 
            className="w-full" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white border-opacity-50 border-t-transparent rounded-full animate-spin" />
                {isLoginMode ? t("loginButton") : t("registerButton")}
              </span>
            ) : (
              isLoginMode ? t("loginButton") : t("registerButton")
            )}
          </Button>

          <div className="text-center text-sm">
            <button
              type="button"
              onClick={handleModeSwitch}
              className="text-primary hover:underline"
            >
              {isLoginMode
                ? t("noAccount")
                : t("haveAccount")}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
