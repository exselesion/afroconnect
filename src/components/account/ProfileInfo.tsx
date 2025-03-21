
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Briefcase, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { UserProfile } from "@/translations/types";

interface ProfileInfoProps {
  userProfile: UserProfile;
}

export const ProfileInfo = ({ userProfile }: ProfileInfoProps) => {
  const { t } = useLanguage();

  return (
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
  );
};
