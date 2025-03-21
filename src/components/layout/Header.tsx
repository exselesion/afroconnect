
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { AuthDialog } from "./AuthDialog";
import { DesktopMenuItem, MobileMenuItem } from "./NavigationMenu";
import { menuStructure } from "@/constants/menuItems";
import { Link } from "react-router-dom";

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
            <Link to="/" className="flex items-center gap-2">
              <span className="font-playfair text-xl font-semibold">CCAFRU</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            {Object.keys(menuStructure).map((section) => 
              section !== "committees" && (
                <DesktopMenuItem 
                  key={section} 
                  section={section as keyof typeof menuStructure} 
                />
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSelector />
            {/* Account link button removed */}
            <AuthDialog />
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-16 bg-background z-40 overflow-y-auto transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="container-custom py-6 space-y-6">
          {Object.keys(menuStructure).map((section) => 
            section !== "committees" && (
              <MobileMenuItem 
                key={section} 
                section={section as keyof typeof menuStructure} 
              />
            )
          )}
        </nav>
      </div>
    </header>
  );
};
