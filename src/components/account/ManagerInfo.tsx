
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { UserProfile } from "@/translations/types";

interface ManagerInfoProps {
  personalManager: UserProfile['personalManager'];
}

export const ManagerInfo = ({ personalManager }: ManagerInfoProps) => {
  const { t } = useLanguage();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone size={20} /> {t("personalManager")}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">{t("managerName")}</p>
          <p className="font-medium">{personalManager.name}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{t("phone")}</p>
          <p className="font-medium">{personalManager.phone}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{t("email")}</p>
          <p className="font-medium">{personalManager.email}</p>
        </div>
        <Button className="w-full">
          {t("contactManager")}
        </Button>
      </CardContent>
    </Card>
  );
};
