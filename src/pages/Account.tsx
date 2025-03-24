
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProfileInfo } from "@/components/account/ProfileInfo";
import { ManagerInfo } from "@/components/account/ManagerInfo";
import { AccountTabs } from "@/components/account/AccountTabs";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Account = () => {
  const { t } = useLanguage();
  const { user, logout } = useAuth();

  // User profile data now comes from auth context
  const userProfile = {
    companyName: user?.company_name || "Н/Д",
    fullName: user?.full_name || "Пользователь",
    membershipLevel: user?.membership_level || "Стандарт",
    personalManager: {
      name: "Петров Петр Петрович",
      phone: "+7 (999) 123-45-67",
      email: "manager@afroconnect.org",
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <div className="container-custom py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-playfair text-3xl font-bold">
              {t("accountTitle")}
            </h1>
            <Button 
              variant="outline" 
              onClick={logout}
              className="flex items-center gap-2"
            >
              <LogOut size={16} />
              {t("logout") || "Logout"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left sidebar with user info */}
            <div className="md:col-span-1 space-y-6">
              <ProfileInfo userProfile={userProfile} />
              <ManagerInfo personalManager={userProfile.personalManager} />
            </div>

            {/* Main content area with tabs */}
            <div className="md:col-span-2">
              <AccountTabs />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
