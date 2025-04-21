
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SectionItem {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const SectionManagement = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [sectionsList, setSectionsList] = useState<SectionItem[]>([
    {
      id: "1",
      name: "business",
      title: "Деловые связи",
      description: "Налаживание деловых контактов между Россией и странами Африки",
      imageUrl: "https://images.unsplash.com/photo-1582584116621-6d3ba5881441?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      name: "trade",
      title: "Развитие торговли",
      description: "Увеличение товарооборота между Россией и странами Африки",
      imageUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      name: "investment",
      title: "Инвестиционные возможности",
      description: "Поиск и реализация инвестиционных проектов в России и странах Африки",
      imageUrl: "https://images.unsplash.com/photo-1557496897-134c34df4f8c?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [sectionForm, setSectionForm] = useState<{
    title: string;
    description: string;
    imageUrl: string;
  }>({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleEditSection = (item: SectionItem) => {
    setSectionForm({
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
    });
    setActiveSectionId(item.id);
  };

  const handleUpdateSection = () => {
    if (!sectionForm.title || !sectionForm.description || !sectionForm.imageUrl) {
      toast({
        title: t("errorOccurred"),
        description: t("pleaseFillAllFields"),
        variant: "destructive",
      });
      return;
    }

    setSectionsList(
      sectionsList.map((item) =>
        item.id === activeSectionId
          ? {
              ...item,
              title: sectionForm.title,
              description: sectionForm.description,
              imageUrl: sectionForm.imageUrl,
            }
          : item
      )
    );

    toast({
      title: t("success"),
      description: t("sectionUpdated"),
    });

    setSectionForm({ title: "", description: "", imageUrl: "" });
    setActiveSectionId(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("editSection")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeSectionId ? (
            <>
              <div>
                <label htmlFor="title" className="text-sm font-medium mb-2 block">
                  {t("sectionTitle")}
                </label>
                <Input
                  id="title"
                  value={sectionForm.title}
                  onChange={(e) => setSectionForm({ ...sectionForm, title: e.target.value })}
                  placeholder={t("enterSectionTitle")}
                />
              </div>
              <div>
                <label htmlFor="description" className="text-sm font-medium mb-2 block">
                  {t("sectionDescription")}
                </label>
                <textarea
                  id="description"
                  value={sectionForm.description}
                  onChange={(e) => setSectionForm({ ...sectionForm, description: e.target.value })}
                  placeholder={t("enterSectionDescription")}
                  className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
              </div>
              <div>
                <label htmlFor="imageUrl" className="text-sm font-medium mb-2 block">
                  {t("imageUrl")}
                </label>
                <Input
                  id="imageUrl"
                  value={sectionForm.imageUrl}
                  onChange={(e) => setSectionForm({ ...sectionForm, imageUrl: e.target.value })}
                  placeholder={t("enterImageUrl")}
                />
              </div>
              {sectionForm.imageUrl && (
                <div className="mt-4">
                  <img
                    src={sectionForm.imageUrl}
                    alt={sectionForm.title}
                    className="w-full h-48 object-cover rounded-lg border"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              )}
            </>
          ) : (
            <p className="text-muted-foreground">{t("selectSectionToEdit")}</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setSectionForm({ title: "", description: "", imageUrl: "" });
              setActiveSectionId(null);
            }}
            disabled={!activeSectionId}
          >
            {t("cancel")}
          </Button>
          <Button onClick={handleUpdateSection} disabled={!activeSectionId}>
            {t("updateSection")}
          </Button>
        </CardFooter>
      </Card>

      <div className="grid gap-4">
        <h3 className="text-xl font-medium">{t("sectionsList")}</h3>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sectionsList.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-4 text-white">
                    <h4 className="font-medium text-lg">{item.title}</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground line-clamp-2">{item.description}</p>
                </div>
                <div className="border-t bg-muted/50 p-3 flex justify-end">
                  <Button variant="outline" size="sm" onClick={() => handleEditSection(item)}>
                    <Edit className="h-4 w-4 mr-1" /> {t("edit")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
