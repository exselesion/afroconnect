
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const PaymentsTab = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
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
    </div>
  );
};
