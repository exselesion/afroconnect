
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesTab = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
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
    </div>
  );
};
