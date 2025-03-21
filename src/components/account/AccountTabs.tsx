
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicesTab } from "./ServicesTab";
import { PartnersTab } from "./PartnersTab";
import { PaymentsTab } from "./PaymentsTab";
import { AnalyticsTab } from "./AnalyticsTab";

export const AccountTabs = () => {
  const { t } = useLanguage();

  return (
    <Tabs defaultValue="services" className="w-full">
      <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-4">
        <TabsTrigger value="services">{t("servicesSection")}</TabsTrigger>
        <TabsTrigger value="partners">{t("partnerSearch")}</TabsTrigger>
        <TabsTrigger value="payments">{t("payments")}</TabsTrigger>
        <TabsTrigger value="analytics">{t("analytics")}</TabsTrigger>
      </TabsList>

      <TabsContent value="services">
        <ServicesTab />
      </TabsContent>

      <TabsContent value="partners">
        <PartnersTab />
      </TabsContent>

      <TabsContent value="payments">
        <PaymentsTab />
      </TabsContent>

      <TabsContent value="analytics">
        <AnalyticsTab />
      </TabsContent>
    </Tabs>
  );
};
