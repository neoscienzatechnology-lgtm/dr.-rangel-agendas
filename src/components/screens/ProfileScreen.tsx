import { MapPin, Phone, Mail, Clock, ExternalLink, Award, GraduationCap, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const insuranceLogos = [
  "Unimed",
  "Bradesco Saúde",
  "SulAmérica",
  "Amil",
  "Porto Seguro",
  "NotreDame",
];

const ProfileScreen = () => {
  return (
    <div className="px-4 pt-20 pb-24 space-y-4">
      {/* Doctor Card */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="relative h-36 bg-gradient-to-br from-primary to-primary/80">
          <div className="absolute -bottom-12 left-4">
            <img
              src={doctorPortrait}
              alt="Dr. Carlos Cesar Rangel"
              className="w-24 h-24 rounded-2xl object-cover border-4 border-card shadow-lg"
            />
          </div>
        </div>
        
        <div className="pt-14 px-4 pb-4">
          <h1 className="font-display text-lg font-bold text-foreground">
            Dr. Carlos Cesar Rangel
          </h1>
          <p className="text-sm text-muted-foreground">Oftalmologista</p>
          <p className="text-xs text-primary mt-1">CRM-SP 123456 | RQE 12345</p>
          
          <div className="flex gap-2 mt-4">
            <Button variant="whatsapp" size="sm" className="flex-1" asChild>
              <a href="https://wa.me/5516999999999" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <a href="tel:+551633333333">
                <Phone className="w-4 h-4" />
                Ligar
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <h2 className="font-semibold text-foreground mb-3 text-sm">Sobre</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Especialista em oftalmologia com mais de 15 anos de experiência. 
          Formado pela Faculdade de Medicina de Ribeirão Preto (USP), com 
          especialização em doenças da retina e cirurgia de catarata.
        </p>
      </div>

      {/* Experience */}
      <div className="bg-card rounded-2xl border border-border p-4 space-y-3">
        <h2 className="font-semibold text-foreground text-sm">Formação</h2>
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Medicina - USP</p>
            <p className="text-xs text-muted-foreground">Ribeirão Preto, SP</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Stethoscope className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Residência em Oftalmologia</p>
            <p className="text-xs text-muted-foreground">Hospital das Clínicas</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
            <Award className="w-4 h-4 text-success" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Especialização Retina</p>
            <p className="text-xs text-muted-foreground">Cirurgia de Catarata e Vítreo</p>
          </div>
        </div>
      </div>

      {/* Specializations */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <h2 className="font-semibold text-foreground mb-3 text-sm">Especializações</h2>
        <div className="flex flex-wrap gap-2">
          {["Retina e Vítreo", "Catarata", "Glaucoma", "Oftalmopediatria", "Estrabismo"].map((spec) => (
            <span 
              key={spec} 
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Insurance Plans */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <h2 className="font-semibold text-foreground mb-3 text-sm">Convênios</h2>
        <div className="grid grid-cols-3 gap-2">
          {insuranceLogos.map((insurance) => (
            <div 
              key={insurance} 
              className="p-2 bg-muted/50 rounded-lg text-center text-xs font-medium text-foreground"
            >
              {insurance}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          * Consulte disponibilidade com seu plano.
        </p>
      </div>

      {/* Location */}
      <div className="bg-card rounded-2xl border border-border p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-foreground text-sm">Consultório</h2>
          <a 
            href="https://maps.google.com/?q=Rua+Rodrigues+Alves+497+Vila+Tiberio+Ribeirao+Preto+SP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-primary font-medium flex items-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            Ver mapa
          </a>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Rua Rodrigues Alves, 497</p>
            <p className="text-xs text-muted-foreground">Vila Tibério, Ribeirão Preto - SP</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Segunda a Sexta</p>
            <p className="text-xs text-muted-foreground">8h às 18h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
