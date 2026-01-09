import { Phone, Mail, MapPin, Clock, Eye, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-lg font-bold">Dr. Carlos Rangel</span>
                <p className="text-xs opacity-70">Oftalmologia</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Cuidando da saúde dos seus olhos com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5516999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[hsl(142,70%,45%)] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Serviços</a></li>
              <li><a href="#sobre" className="hover:opacity-100 transition-opacity">Sobre o Médico</a></li>
              <li><a href="#agendamento" className="hover:opacity-100 transition-opacity">Agendar Consulta</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Convênios Aceitos</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>Consulta Oftalmológica</li>
              <li>Exame de Vista</li>
              <li>Cirurgia de Catarata</li>
              <li>Tratamento de Glaucoma</li>
              <li>Oftalmopediatria</li>
              <li>Teleconsulta</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Rua Rodrigues Alves, 497</p>
                  <p className="opacity-70">Vila Tibério, Ribeirão Preto - SP</p>
                  <p className="opacity-70">CEP: 14050-090</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+551633333333" className="hover:opacity-80 transition-opacity">
                  (16) 3333-3333
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contato@drcarlosrangel.com.br" className="hover:opacity-80 transition-opacity">
                  contato@drcarlosrangel.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>Seg-Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
            <p>© {currentYear} Dr. Carlos Cesar Rangel. Todos os direitos reservados.</p>
            <p>CRM-SP 123456 | RQE 12345</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
