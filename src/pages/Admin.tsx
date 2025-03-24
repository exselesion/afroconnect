
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { AdminTabs } from "@/components/admin/AdminTabs";

const Admin = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <h1 className="font-playfair text-3xl font-bold mb-6">{t("adminPanel")}</h1>
          <p className="text-muted-foreground mb-8">{t("adminPanelDesc")}</p>
          
          <AdminTabs />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
