import { Phone, MapPin, Clock, Award, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-right-top md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="medical-badge mb-6 animate-fade-in">
            <Eye className="w-4 h-4" />
            <span>Oftalmologia de Excelência</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Dr. Carlos Cesar{" "}
            <span className="gradient-text">Rangel</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Especialista em oftalmologia com atendimento humanizado para todas as idades. 
            Cuide da saúde dos seus olhos com quem entende do assunto.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 text-foreground">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-medium">+15 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Users className="w-5 h-5 text-accent" />
              <span className="font-medium">+10.000 pacientes</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={scrollToBooking}>
              Agendar Consulta
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/5516999999999" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Location Info */}
          <div className="mt-12 p-4 glass-card rounded-xl inline-flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Rua Rodrigues Alves, 497 - Vila Tibério, Ribeirão Preto - SP</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground border-l border-border pl-4">
              <Clock className="w-5 h-5 text-primary" />
              <span>Seg-Sex: 8h-18h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
