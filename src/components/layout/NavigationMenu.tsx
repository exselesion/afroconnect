
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { menuStructure, type MenuSection } from "@/constants/menuItems";
import { useLanguage } from "@/contexts/LanguageContext";

interface DesktopMenuItemProps {
  section: MenuSection;
}

export const DesktopMenuItem = ({ section }: DesktopMenuItemProps) => {
  const { t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1">
          {t(section)}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuGroup>
          {menuStructure[section].items.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <a href={item.href} className="w-full">
                {item.title}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface MobileMenuItemProps {
  section: MenuSection;
}

export const MobileMenuItem = ({ section }: MobileMenuItemProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-2">
      <div className="font-semibold text-lg">{t(section)}</div>
      <div className="pl-4 space-y-2">
        {menuStructure[section].items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block text-muted-foreground hover:text-foreground"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};
