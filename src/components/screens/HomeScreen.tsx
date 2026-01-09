import { Phone, MapPin, Clock, Award, Users, MessageCircle, ChevronRight, Eye, Glasses, Baby, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

interface HomeScreenProps {
  onNavigate: (tab: "home" | "booking" | "profile" | "contact" | "menu") => void;
}

const quickServices = [
  { icon: Eye, label: "Consulta", color: "bg-primary/10 text-primary" },
  { icon: Glasses, label: "Exames", color: "bg-accent/10 text-accent" },
  { icon: Baby, label: "Pediatria", color: "bg-success/10 text-success" },
  { icon: Stethoscope, label: "Cirurgias", color: "bg-secondary/30 text-secondary-foreground" },
];

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  return (
    <div className="px-4 pt-20 pb-24 space-y-6">
      {/* Welcome Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 text-primary-foreground">
        <div className="relative z-10">
          <p className="text-sm opacity-90 mb-1">Bem-vindo ao consultório</p>
          <h1 className="font-display text-xl font-bold mb-3">
            Dr. Carlos Cesar Rangel
          </h1>
          <p className="text-sm opacity-90 mb-4">
            Oftalmologista especializado em cuidar da sua visão
          </p>
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-white/20 hover:bg-white/30 text-white border-0"
            onClick={() => onNavigate("booking")}
          >
            Agendar Consulta
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        {/* Decorative circles */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -right-4 top-12 w-20 h-20 bg-white/10 rounded-full" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">+15</p>
              <p className="text-xs text-muted-foreground">Anos de Experiência</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">+10k</p>
              <p className="text-xs text-muted-foreground">Pacientes Atendidos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Services */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-foreground">Serviços</h2>
          <button 
            className="text-sm text-primary font-medium"
            onClick={() => onNavigate("menu")}
          >
            Ver todos
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {quickServices.map((service) => (
            <button 
              key={service.label}
              className="flex flex-col items-center gap-2 p-3 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${service.color}`}>
                <service.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-foreground">{service.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Doctor Card */}
      <button 
        className="w-full bg-card rounded-xl border border-border p-4 flex items-center gap-4 hover:border-primary/30 transition-colors text-left"
        onClick={() => onNavigate("profile")}
      >
        <img 
          src={doctorPortrait} 
          alt="Dr. Carlos Rangel" 
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">Dr. Carlos Cesar Rangel</h3>
          <p className="text-sm text-muted-foreground">Oftalmologista</p>
          <p className="text-xs text-primary mt-1">CRM-SP 123456</p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </button>

      {/* Location Card */}
      <div className="bg-card rounded-xl border border-border p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Localização</h3>
          <a 
            href="https://maps.google.com/?q=Rua+Rodrigues+Alves+497+Vila+Tiberio+Ribeirao+Preto+SP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary font-medium"
          >
            Ver mapa
          </a>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Rua Rodrigues Alves, 497</p>
            <p className="text-xs text-muted-foreground">Vila Tibério, Ribeirão Preto - SP</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Seg - Sex: 8h às 18h</p>
            <p className="text-xs text-muted-foreground">Fechado aos finais de semana</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="whatsapp" className="h-12" asChild>
          <a href="https://wa.me/5516999999999" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>
        <Button variant="outline" className="h-12" asChild>
          <a href="tel:+551633333333">
            <Phone className="w-5 h-5" />
            Ligar Agora
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
