
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-grow pt-16">
        <section className="relative bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80" />
            <img
              src="https://images.unsplash.com/photo-1542728498-07df87080b18?auto=format&fit=crop&w=2000&q=80"
              alt="Russia Africa Partnership"
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          </div>
          
          <div className="container-custom py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fadeIn">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("homeTitle")}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {t("homeSubtitle")}
              </p>
              <Button size="lg" className="rounded-full">
                {t("becomeMember")} <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>

        {/* Business Cooperation Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link 
                to="/services/business-relations" 
                className="block group"
              >
                <div className="p-6 bg-background rounded-lg border hover:shadow-md transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1582584116621-6d3ba5881441?auto=format&fit=crop&w=800&q=80"
                    alt="Деловое сотрудничество"
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {t("businessConnections")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("businessConnectionsDesc")}
                  </p>
                </div>
              </Link>
              
              <Link 
                to="/services/trade-development" 
                className="block group"
              >
                <div className="p-6 bg-background rounded-lg border hover:shadow-md transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80"
                    alt="Развитие торговли"
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {t("tradeDevelopment")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("tradeDevelopmentDesc")}
                  </p>
                </div>
              </Link>
              
              <Link 
                to="/services/investment-opportunities" 
                className="block group"
              >
                <div className="p-6 bg-background rounded-lg border hover:shadow-md transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1557496897-134c34df4f8c?auto=format&fit=crop&w=800&q=80"
                    alt="Инвестиционные проекты"
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {t("investmentOpportunities")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("investmentOpportunitiesDesc")}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* News Block */}
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-semibold">{t("latestNews")}</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="group p-6 bg-card rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <p className="text-sm text-muted-foreground mb-2">
                        {new Date().toLocaleDateString()}
                      </p>
                      <h3 className="font-playfair text-lg font-semibold mb-2 group-hover:text-primary">
                        {t("businessForum")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("businessForumDesc")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Events Block */}
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-semibold">{t("upcomingEvents")}</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="group p-6 bg-card rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Calendar className="h-10 w-10 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-playfair text-lg font-semibold mb-2 group-hover:text-primary">
                            {t("tradeMission")}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4" />
                            <span>{t("tradeMissionDate")}</span>
                            <MapPin className="h-4 w-4 ml-2" />
                            <span>{t("tradeMissionLocation")}</span>
                          </div>
                          <p className="text-muted-foreground">
                            {t("tradeMissionDesc")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
