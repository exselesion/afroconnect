
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Briefcase,
  Star,
  CreditCard,
  Mail,
  Handshake,
  Search,
  FileText,
  Phone,
  Scale,
  BarChart,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User size={20} /> {t("profileInfo")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{t("companyName")}</p>
                    <p className="font-medium flex items-center gap-2">
                      <Briefcase size={16} /> {userProfile.companyName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("fullName")}</p>
                    <p className="font-medium flex items-center gap-2">
                      <User size={16} /> {userProfile.fullName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("membershipLevel")}</p>
                    <p className="font-medium flex items-center gap-2">
                      <Star size={16} className="text-yellow-500" /> 
                      {userProfile.membershipLevel}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone size={20} /> {t("personalManager")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{t("managerName")}</p>
                    <p className="font-medium">{userProfile.personalManager.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("phone")}</p>
                    <p className="font-medium">{userProfile.personalManager.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("email")}</p>
                    <p className="font-medium">{userProfile.personalManager.email}</p>
                  </div>
                  <Button className="w-full">
                    {t("contactManager")}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main content area with tabs */}
            <div className="md:col-span-2">
              <Tabs defaultValue="services" className="w-full">
                <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-4">
                  <TabsTrigger value="services">{t("servicesSection")}</TabsTrigger>
                  <TabsTrigger value="partners">{t("partnerSearch")}</TabsTrigger>
                  <TabsTrigger value="payments">{t("payments")}</TabsTrigger>
                  <TabsTrigger value="analytics">{t("analytics")}</TabsTrigger>
                </TabsList>

                {/* Services Tab */}
                <TabsContent value="services" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail size={20} /> {t("personalSupport")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">{t("personalSupportDesc")}</p>
                      <Button>{t("requestConsultation")}</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText size={20} /> {t("ccafruServices")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">{t("ccafruServicesDesc")}</p>
                      <Button>{t("requestServices")}</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Scale size={20} /> {t("legalSupport")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">{t("legalSupportDesc")}</p>
                      <Button>{t("requestLegalSupport")}</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Partners Tab */}
                <TabsContent value="partners" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Search size={20} /> {t("partnerSearchTitle")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">{t("partnerSearchDesc")}</p>
                      <Button>{t("searchPartners")}</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Handshake size={20} /> {t("b2bCollaboration")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">{t("b2bCollaborationDesc")}</p>
                      <Button>{t("requestCollaboration")}</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Payments Tab */}
                <TabsContent value="payments" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard size={20} /> {t("onlinePayments")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">{t("onlinePaymentsDesc")}</p>
                      <div className="flex gap-2">
                        <Button>{t("makePayment")}</Button>
                        <Button variant="outline">{t("generateInvoice")}</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Analytics Tab */}
                <TabsContent value="analytics" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart size={20} /> {t("analyticalInfo")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">{t("analyticalInfoDesc")}</p>
                      <Button>{t("viewAnalytics")}</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
