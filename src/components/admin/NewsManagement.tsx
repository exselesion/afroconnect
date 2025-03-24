
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Calendar, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
}

export const NewsManagement = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newsList, setNewsList] = useState<NewsItem[]>([
    {
      id: "1",
      title: "Деловой форум в Москве",
      date: new Date().toLocaleDateString(),
      content: "Важное событие для развития российско-африканских отношений...",
    },
    {
      id: "2",
      title: "Новые торговые соглашения",
      date: new Date().toLocaleDateString(),
      content: "Подписаны важные документы о сотрудничестве...",
    },
  ]);
  const [activeNewsId, setActiveNewsId] = useState<string | null>(null);
  const [newsForm, setNewsForm] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: "",
  });

  const handleAddNews = () => {
    if (!newsForm.title || !newsForm.content) {
      toast({
        title: t("errorOccurred"),
        description: t("pleaseFillAllFields"),
        variant: "destructive",
      });
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      title: newsForm.title,
      date: new Date().toLocaleDateString(),
      content: newsForm.content,
    };

    if (activeNewsId) {
      // Edit mode
      setNewsList(
        newsList.map((item) => (item.id === activeNewsId ? { ...item, ...newItem, id: item.id } : item))
      );
      toast({
        title: t("success"),
        description: t("newsUpdated"),
      });
    } else {
      // Add mode
      setNewsList([...newsList, newItem]);
      toast({
        title: t("success"),
        description: t("newsAdded"),
      });
    }

    setNewsForm({ title: "", content: "" });
    setActiveNewsId(null);
  };

  const handleEditNews = (item: NewsItem) => {
    setNewsForm({
      title: item.title,
      content: item.content,
    });
    setActiveNewsId(item.id);
  };

  const handleDeleteNews = (id: string) => {
    setNewsList(newsList.filter((item) => item.id !== id));
    toast({
      title: t("success"),
      description: t("newsDeleted"),
    });

    if (activeNewsId === id) {
      setNewsForm({ title: "", content: "" });
      setActiveNewsId(null);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{activeNewsId ? t("editNews") : t("addNews")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="title" className="text-sm font-medium mb-2 block">
              {t("newsTitle")}
            </label>
            <Input
              id="title"
              value={newsForm.title}
              onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
              placeholder={t("enterNewsTitle")}
            />
          </div>
          <div>
            <label htmlFor="content" className="text-sm font-medium mb-2 block">
              {t("newsContent")}
            </label>
            <textarea
              id="content"
              value={newsForm.content}
              onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
              placeholder={t("enterNewsContent")}
              className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setNewsForm({ title: "", content: "" });
              setActiveNewsId(null);
            }}
          >
            {t("cancel")}
          </Button>
          <Button onClick={handleAddNews}>
            {activeNewsId ? t("updateNews") : t("addNews")} 
          </Button>
        </CardFooter>
      </Card>

      <div className="grid gap-4">
        <h3 className="text-xl font-medium">{t("newsList")}</h3>
        
        {newsList.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">{item.title}</h4>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <p className="text-muted-foreground">{item.content}</p>
              </div>
              <div className="border-t bg-muted/50 p-3 flex justify-end gap-2">
                <Button variant="outline" size="sm" onClick={() => handleEditNews(item)}>
                  <Edit className="h-4 w-4 mr-1" /> {t("edit")}
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteNews(item.id)}>
                  <Trash2 className="h-4 w-4 mr-1" /> {t("delete")}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
