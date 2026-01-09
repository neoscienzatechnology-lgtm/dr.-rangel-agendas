import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const insuranceLogos = [
  "Unimed",
  "Bradesco Saúde",
  "SulAmérica",
  "Amil",
  "Porto Seguro",
  "NotreDame Intermédica",
];

const DoctorProfile = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Photo and Info Card */}
          <div className="relative">
            <div className="relative z-10 max-w-md mx-auto lg:mx-0">
              {/* Photo Card */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={doctorPortrait}
                    alt="Dr. Carlos Cesar Rangel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">Dr. Carlos Cesar Rangel</h3>
                    <p className="text-white/80">CRM-SP 123456</p>
                  </div>
                </div>
                
                {/* Quick Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Endereço</p>
                      <p className="font-medium text-foreground">Rua Rodrigues Alves, 497</p>
                      <p className="text-sm text-muted-foreground">Vila Tibério, Ribeirão Preto - SP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Horário de Atendimento</p>
                      <p className="font-medium text-foreground">Segunda a Sexta: 8h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefone</p>
                      <p className="font-medium text-foreground">(16) 3333-3333</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex gap-3">
                  <Button variant="whatsapp" className="flex-1" asChild>
                    <a href="https://wa.me/5516999999999" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a 
                      href="https://maps.google.com/?q=Rua+Rodrigues+Alves+497+Vila+Tiberio+Ribeirao+Preto+SP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Mapa
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <div className="medical-badge mb-4">
                <span>Sobre o Médico</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Experiência e Dedicação em{" "}
                <span className="gradient-text">Oftalmologia</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                O Dr. Carlos Cesar Rangel é especialista em oftalmologia com mais de 15 anos de experiência 
                no cuidado da saúde ocular. Formado pela Faculdade de Medicina de Ribeirão Preto (USP), 
                com especialização em doenças da retina e cirurgia de catarata.
              </p>
              <p className="text-muted-foreground">
                Seu consultório em Ribeirão Preto oferece atendimento humanizado e tecnologia de ponta 
                para diagnóstico e tratamento de todas as condições oftalmológicas, desde consultas 
                de rotina até procedimentos cirúrgicos especializados.
              </p>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Especializações</h4>
              <div className="flex flex-wrap gap-2">
                {["Retina e Vítreo", "Cirurgia de Catarata", "Glaucoma", "Oftalmopediatria", "Estrabismo"].map((spec) => (
                  <span key={spec} className="medical-badge">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Insurance Plans */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Convênios Aceitos</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {insuranceLogos.map((insurance) => (
                  <div 
                    key={insurance} 
                    className="p-3 bg-card rounded-lg border border-border text-center text-sm font-medium text-foreground"
                  >
                    {insurance}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                * Consulte disponibilidade e cobertura diretamente com seu plano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
