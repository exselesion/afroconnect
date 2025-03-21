
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProfileInfo } from "@/components/account/ProfileInfo";
import { ManagerInfo } from "@/components/account/ManagerInfo";
import { AccountTabs } from "@/components/account/AccountTabs";

const Account = () => {
  const { t } = useLanguage();

  // This would be fetched from an API in a real application
  const userProfile = {
    companyName: "ООО «Компания»",
    fullName: "Иванов Иван Иванович",
    membershipLevel: "Премиум",
    personalManager: {
      name: "Петров Петр Петрович",
      phone: "+7 (999) 123-45-67",
      email: "manager@ccafru.org",
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <div className="container-custom py-8">
          <h1 className="font-playfair text-3xl font-bold mb-8">
            {t("accountTitle")}
          </h1>

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
