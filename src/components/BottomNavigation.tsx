import { Home, Calendar, User, MessageCircle, Menu } from "lucide-react";

type Tab = "home" | "booking" | "profile" | "contact" | "menu";

interface BottomNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    { id: "home" as Tab, icon: Home, label: "Início" },
    { id: "booking" as Tab, icon: Calendar, label: "Agendar" },
    { id: "profile" as Tab, icon: User, label: "Médico" },
    { id: "contact" as Tab, icon: MessageCircle, label: "Contato" },
    { id: "menu" as Tab, icon: Menu, label: "Menu" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-200
                ${isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              <tab.icon className={`w-5 h-5 ${isActive ? "scale-110" : ""} transition-transform`} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
