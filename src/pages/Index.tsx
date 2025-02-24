
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container-custom py-24">
            <div className="max-w-3xl mx-auto text-center animate-fadeIn">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Russian-African Chamber of Commerce
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Bridging businesses and cultures between Russia and Africa
              </p>
              <Button size="lg" className="rounded-full">
                Become a Member <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* News Block */}
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-semibold">Latest News</h2>
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
                        Business Forum Announcement
                      </h3>
                      <p className="text-muted-foreground">
                        Joint business opportunities and economic cooperation between Russian and African companies...
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Events Block */}
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-semibold">Upcoming Events</h2>
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
                            Trade Mission to South Africa
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            June 15, 2024 - Johannesburg
                          </p>
                          <p className="text-muted-foreground">
                            Join our trade mission to explore business opportunities...
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
