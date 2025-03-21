
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const AnalyticsTab = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
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
    </div>
  );
};
