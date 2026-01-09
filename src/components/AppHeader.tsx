import { Eye, Bell } from "lucide-react";

interface AppHeaderProps {
  title?: string;
  showNotification?: boolean;
}

const AppHeader = ({ title, showNotification = true }: AppHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border safe-area-top">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <Eye className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="font-display text-sm font-bold text-foreground">
              {title || "Dr. Carlos Rangel"}
            </span>
            <p className="text-[10px] text-muted-foreground">Oftalmologia</p>
          </div>
        </div>

        {/* Notification */}
        {showNotification && (
          <button className="relative p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
          </button>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
