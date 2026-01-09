import { Phone, Mail, MapPin, Clock, MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+551633333333" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4" />
                <span>(16) 3333-3333</span>
              </a>
              <a href="mailto:contato@drcarlosrangel.com.br" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="w-4 h-4" />
                <span>contato@drcarlosrangel.com.br</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sex: 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display text-lg font-bold text-foreground">Dr. Carlos Rangel</span>
              <p className="text-xs text-muted-foreground">Oftalmologia</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#agendamento" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Agendamento
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="whatsapp" size="sm" className="hidden sm:flex" asChild>
              <a href="https://wa.me/5516999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="#agendamento">Agendar</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
