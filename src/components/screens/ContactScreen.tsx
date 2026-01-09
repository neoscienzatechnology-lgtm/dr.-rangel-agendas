import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactScreen = () => {
  return (
    <div className="px-4 pt-20 pb-24 space-y-4">
      {/* Header */}
      <div className="text-center mb-2">
        <h1 className="font-display text-xl font-bold text-foreground">
          Contato
        </h1>
        <p className="text-sm text-muted-foreground">
          Entre em contato conosco
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="whatsapp" className="h-16 flex-col gap-1" asChild>
          <a href="https://wa.me/5516999999999" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs">WhatsApp</span>
          </a>
        </Button>
        <Button variant="outline" className="h-16 flex-col gap-1" asChild>
          <a href="tel:+551633333333">
            <Phone className="w-6 h-6" />
            <span className="text-xs">Ligar</span>
          </a>
        </Button>
      </div>

      {/* Contact Info */}
      <div className="bg-card rounded-2xl border border-border p-4 space-y-4">
        <h2 className="font-semibold text-foreground text-sm">Informações</h2>
        
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Telefone</p>
            <a href="tel:+551633333333" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              (16) 3333-3333
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">E-mail</p>
            <a href="mailto:contato@drcarlosrangel.com.br" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              contato@drcarlosrangel.com.br
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Horário</p>
            <p className="text-sm text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="bg-card rounded-2xl border border-border p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-foreground text-sm">Localização</h2>
          <a 
            href="https://maps.google.com/?q=Rua+Rodrigues+Alves+497+Vila+Tiberio+Ribeirao+Preto+SP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-primary font-medium flex items-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            Abrir mapa
          </a>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Consultório</p>
            <p className="text-sm text-muted-foreground">Rua Rodrigues Alves, 497</p>
            <p className="text-sm text-muted-foreground">Vila Tibério, Ribeirão Preto - SP</p>
            <p className="text-xs text-muted-foreground mt-1">CEP: 14050-090</p>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="h-32 bg-muted rounded-xl flex items-center justify-center overflow-hidden">
          <a 
            href="https://maps.google.com/?q=Rua+Rodrigues+Alves+497+Vila+Tiberio+Ribeirao+Preto+SP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <span className="text-xs">Toque para abrir no Google Maps</span>
            </div>
          </a>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <h2 className="font-semibold text-foreground mb-4 text-sm">Redes Sociais</h2>
        <div className="flex gap-3">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="https://wa.me/5516999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 h-14 rounded-xl bg-[hsl(142,70%,45%)] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
