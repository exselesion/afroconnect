
import { useState } from "react";
import { Menu, Globe, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "ru", name: "Русский" },
  { code: "ar", name: "العربية" },
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  { code: "pt", name: "Português" },
  { code: "sw", name: "Kiswahili" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            <a href="/" className="flex items-center gap-2">
              <span className="font-playfair text-xl font-semibold">CCAFRU</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="/about" className="nav-link">About Us</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/events" className="nav-link">Events</a>
            <a href="/news" className="nav-link">News</a>
            <a href="/membership" className="nav-link">Membership</a>
          </nav>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code}>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-background z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-4">
          <a href="/about" className="nav-link text-lg py-2">About Us</a>
          <a href="/services" className="nav-link text-lg py-2">Services</a>
          <a href="/events" className="nav-link text-lg py-2">Events</a>
          <a href="/news" className="nav-link text-lg py-2">News</a>
          <a href="/membership" className="nav-link text-lg py-2">Membership</a>
        </nav>
      </div>
    </header>
  );
};
