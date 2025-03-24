
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { NewsManagement } from "./NewsManagement";
import { EventsManagement } from "./EventsManagement";
import { SectionManagement } from "./SectionManagement";

export const AdminTabs = () => {
  const { t } = useLanguage();

  return (
    <Tabs defaultValue="news" className="space-y-6">
      <TabsList className="w-full md:w-auto">
        <TabsTrigger value="news">{t("manageNews")}</TabsTrigger>
        <TabsTrigger value="events">{t("manageEvents")}</TabsTrigger>
        <TabsTrigger value="sections">{t("manageSections")}</TabsTrigger>
      </TabsList>
      
      <TabsContent value="news" className="space-y-6">
        <NewsManagement />
      </TabsContent>
      
      <TabsContent value="events" className="space-y-6">
        <EventsManagement />
      </TabsContent>
      
      <TabsContent value="sections" className="space-y-6">
        <SectionManagement />
      </TabsContent>
    </Tabs>
  );
};
