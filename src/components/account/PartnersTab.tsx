
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const PartnersTab = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
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
    </div>
  );
};
