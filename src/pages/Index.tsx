
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-grow pt-16">
        <section className="relative bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80" />
            <img
              src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?auto=format&fit=crop&w=2000&q=80"
              alt="Moscow City Business Center"
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

        {/* Business Cooperation Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-background rounded-lg border hover:shadow-md transition-all">
                <img
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&w=800&q=80"
                  alt="Russian Business Meeting"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <h3 className="font-playfair text-xl font-semibold mb-2">Business Networking</h3>
                <p className="text-muted-foreground">Connect with leading companies and entrepreneurs from Russia and Africa</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg border hover:shadow-md transition-all">
                <img
                  src="https://images.unsplash.com/photo-1526432403660-0da4d3e405de?auto=format&fit=crop&w=800&q=80"
                  alt="African Business Development"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <h3 className="font-playfair text-xl font-semibold mb-2">Trade Development</h3>
                <p className="text-muted-foreground">Facilitate international trade and economic cooperation between regions</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg border hover:shadow-md transition-all">
                <img
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
                  alt="Investment Projects"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <h3 className="font-playfair text-xl font-semibold mb-2">Investment Opportunities</h3>
                <p className="text-muted-foreground">Discover investment prospects and business development possibilities</p>
              </div>
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
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4" />
                            <span>June 15, 2024</span>
                            <MapPin className="h-4 w-4 ml-2" />
                            <span>Johannesburg</span>
                          </div>
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
