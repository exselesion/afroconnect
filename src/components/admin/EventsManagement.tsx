
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export const EventsManagement = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [eventsList, setEventsList] = useState<EventItem[]>([
    {
      id: "1",
      title: "Торговая миссия в Кению",
      date: "2024-07-15",
      location: "Найроби",
      description: "Организация встреч с представителями бизнеса Кении...",
    },
    {
      id: "2",
      title: "Экспортный форум",
      date: "2024-08-10",
      location: "Москва",
      description: "Обсуждение возможностей для экспорта продукции...",
    },
  ]);
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [eventForm, setEventForm] = useState<{
    title: string;
    date: string;
    location: string;
    description: string;
  }>({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleAddEvent = () => {
    if (!eventForm.title || !eventForm.date || !eventForm.location || !eventForm.description) {
      toast({
        title: t("errorOccurred"),
        description: t("pleaseFillAllFields"),
        variant: "destructive",
      });
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      title: eventForm.title,
      date: eventForm.date,
      location: eventForm.location,
      description: eventForm.description,
    };

    if (activeEventId) {
      // Edit mode
      setEventsList(
        eventsList.map((item) => (item.id === activeEventId ? { ...item, ...newItem, id: item.id } : item))
      );
      toast({
        title: t("success"),
        description: t("eventUpdated"),
      });
    } else {
      // Add mode
      setEventsList([...eventsList, newItem]);
      toast({
        title: t("success"),
        description: t("eventAdded"),
      });
    }

    setEventForm({ title: "", date: "", location: "", description: "" });
    setActiveEventId(null);
  };

  const handleEditEvent = (item: EventItem) => {
    setEventForm({
      title: item.title,
      date: item.date,
      location: item.location,
      description: item.description,
    });
    setActiveEventId(item.id);
  };

  const handleDeleteEvent = (id: string) => {
    setEventsList(eventsList.filter((item) => item.id !== id));
    toast({
      title: t("success"),
      description: t("eventDeleted"),
    });

    if (activeEventId === id) {
      setEventForm({ title: "", date: "", location: "", description: "" });
      setActiveEventId(null);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{activeEventId ? t("editEvent") : t("addEvent")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="title" className="text-sm font-medium mb-2 block">
              {t("eventTitle")}
            </label>
            <Input
              id="title"
              value={eventForm.title}
              onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
              placeholder={t("enterEventTitle")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="text-sm font-medium mb-2 block">
                {t("eventDate")}
              </label>
              <Input
                id="date"
                type="date"
                value={eventForm.date}
                onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="location" className="text-sm font-medium mb-2 block">
                {t("eventLocation")}
              </label>
              <Input
                id="location"
                value={eventForm.location}
                onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                placeholder={t("enterEventLocation")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="text-sm font-medium mb-2 block">
              {t("eventDescription")}
            </label>
            <textarea
              id="description"
              value={eventForm.description}
              onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
              placeholder={t("enterEventDescription")}
              className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setEventForm({ title: "", date: "", location: "", description: "" });
              setActiveEventId(null);
            }}
          >
            {t("cancel")}
          </Button>
          <Button onClick={handleAddEvent}>
            {activeEventId ? t("updateEvent") : t("addEvent")}
          </Button>
        </CardFooter>
      </Card>

      <div className="grid gap-4">
        <h3 className="text-xl font-medium">{t("eventsList")}</h3>
        
        {eventsList.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">{item.title}</h4>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <div className="border-t bg-muted/50 p-3 flex justify-end gap-2">
                <Button variant="outline" size="sm" onClick={() => handleEditEvent(item)}>
                  <Edit className="h-4 w-4 mr-1" /> {t("edit")}
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteEvent(item.id)}>
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
