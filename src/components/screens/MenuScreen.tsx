import { 
  Eye, Glasses, Stethoscope, Baby, Syringe, Scan, MonitorSmartphone, FileText,
  ChevronRight, Shield, FileQuestion, Bell
} from "lucide-react";

const services = [
  { icon: Eye, title: "Consulta Oftalmológica", description: "Avaliação completa da saúde ocular" },
  { icon: Glasses, title: "Prescrição de Óculos", description: "Exame de refração preciso" },
  { icon: Stethoscope, title: "Tratamento de Glaucoma", description: "Diagnóstico e tratamento especializado" },
  { icon: Baby, title: "Oftalmopediatria", description: "Atendimento para crianças" },
  { icon: Syringe, title: "Cirurgia de Catarata", description: "Procedimentos modernos e seguros" },
  { icon: Scan, title: "Exames de Imagem", description: "OCT, topografia, mapeamento" },
  { icon: MonitorSmartphone, title: "Teleconsulta", description: "Consultas online" },
  { icon: FileText, title: "Laudos e Atestados", description: "Documentação médica" },
];

const menuItems = [
  { icon: Bell, title: "Notificações", description: "Configurar lembretes" },
  { icon: Shield, title: "Política de Privacidade", description: "Seus dados protegidos" },
  { icon: FileQuestion, title: "Dúvidas Frequentes", description: "Tire suas dúvidas" },
];

const MenuScreen = () => {
  return (
    <div className="px-4 pt-20 pb-24 space-y-6">
      {/* Header */}
      <div className="text-center mb-2">
        <h1 className="font-display text-xl font-bold text-foreground">
          Menu
        </h1>
      </div>

      {/* Services */}
      <div>
        <h2 className="font-semibold text-foreground mb-3 text-sm">Nossos Serviços</h2>
        <div className="space-y-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm">{service.title}</h3>
                <p className="text-xs text-muted-foreground truncate">{service.description}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Other Options */}
      <div>
        <h2 className="font-semibold text-foreground mb-3 text-sm">Outras Opções</h2>
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full bg-card rounded-xl border border-border p-3 flex items-center gap-3 text-left hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* App Info */}
      <div className="text-center pt-4">
        <p className="text-xs text-muted-foreground">
          Dr. Carlos Rangel - Oftalmologia
        </p>
        <p className="text-xs text-muted-foreground">
          Versão 1.0.0
        </p>
      </div>
    </div>
  );
};

export default MenuScreen;
