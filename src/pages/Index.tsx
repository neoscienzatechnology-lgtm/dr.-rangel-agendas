import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import BottomNavigation from "@/components/BottomNavigation";
import HomeScreen from "@/components/screens/HomeScreen";
import BookingScreen from "@/components/screens/BookingScreen";
import ProfileScreen from "@/components/screens/ProfileScreen";
import ContactScreen from "@/components/screens/ContactScreen";
import MenuScreen from "@/components/screens/MenuScreen";

type Tab = "home" | "booking" | "profile" | "contact" | "menu";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={setActiveTab} />;
      case "booking":
        return <BookingScreen />;
      case "profile":
        return <ProfileScreen />;
      case "contact":
        return <ContactScreen />;
      case "menu":
        return <MenuScreen />;
      default:
        return <HomeScreen onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <AppHeader />
      <main className="min-h-screen">
        {renderScreen()}
      </main>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
