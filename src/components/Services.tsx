import { Eye, Glasses, Stethoscope, Baby, Syringe, Scan, MonitorSmartphone, FileText } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Consulta Oftalmológica",
    description: "Avaliação completa da saúde ocular com equipamentos de última geração.",
  },
  {
    icon: Glasses,
    title: "Prescrição de Óculos",
    description: "Exame de refração preciso para correção visual personalizada.",
  },
  {
    icon: Stethoscope,
    title: "Tratamento de Glaucoma",
    description: "Diagnóstico precoce e tratamento especializado do glaucoma.",
  },
  {
    icon: Baby,
    title: "Oftalmopediatria",
    description: "Atendimento especializado para crianças e bebês.",
  },
  {
    icon: Syringe,
    title: "Cirurgia de Catarata",
    description: "Procedimentos cirúrgicos modernos e seguros.",
  },
  {
    icon: Scan,
    title: "Exames de Imagem",
    description: "OCT, topografia corneana e mapeamento de retina.",
  },
  {
    icon: MonitorSmartphone,
    title: "Teleconsulta",
    description: "Consultas online para acompanhamento e orientações.",
  },
  {
    icon: FileText,
    title: "Laudos e Atestados",
    description: "Documentação médica para trabalho e direção.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="medical-badge mx-auto mb-4">
            <span>Nossos Serviços</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cuidado Completo Para{" "}
            <span className="gradient-text">Sua Visão</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços oftalmológicos para todas as idades, 
            desde consultas de rotina até procedimentos especializados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
