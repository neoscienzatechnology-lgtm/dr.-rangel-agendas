import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, FileText, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30"
];

const insurances = [
  "Particular",
  "Unimed",
  "Bradesco Saúde",
  "SulAmérica",
  "Amil",
  "Porto Seguro",
  "NotreDame Intermédica",
  "Outros"
];

const appointmentTypes = [
  "Consulta de Rotina",
  "Primeira Consulta",
  "Retorno",
  "Exame de Vista",
  "Urgência",
];

const BookingCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    insurance: "",
    appointmentType: "",
    notes: "",
  });

  // Calendar logic
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay };
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentDate);
  
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const isWeekend = (dayIndex: number) => dayIndex === 0 || dayIndex === 6;
  
  const isPastDate = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateClick = (day: number) => {
    const dayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getDay();
    if (isWeekend(dayOfWeek) || isPastDate(day)) return;
    
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    setSelectedTime(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error("Por favor, selecione uma data e horário.");
      return;
    }
    
    toast.success("Agendamento realizado com sucesso! Você receberá uma confirmação por e-mail.");
    
    // Reset form
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      birthDate: "",
      insurance: "",
      appointmentType: "",
      notes: "",
    });
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  return (
    <section id="agendamento" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="medical-badge mx-auto mb-4">
            <Calendar className="w-4 h-4" />
            <span>Agendamento Online</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agende Sua <span className="gradient-text">Consulta</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha a data e horário mais conveniente para você. 
            Nosso sistema de agendamento é rápido e seguro.
          </p>
        </div>

        {/* Steps Indicator */}
        <div className="flex justify-center gap-4 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              <span className={`hidden sm:block text-sm ${step >= s ? 'text-foreground' : 'text-muted-foreground'}`}>
                {s === 1 ? 'Data e Hora' : s === 2 ? 'Seus Dados' : 'Confirmação'}
              </span>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Date and Time Selection */}
          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              {/* Calendar */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <Button variant="ghost" size="icon" onClick={prevMonth}>
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <h3 className="font-semibold text-foreground">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  <Button variant="ghost" size="icon" onClick={nextMonth}>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Days grid */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: startingDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const dayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getDay();
                    const isDisabled = isWeekend(dayOfWeek) || isPastDate(day);
                    const isSelected = selectedDate?.getDate() === day && 
                                       selectedDate?.getMonth() === currentDate.getMonth() &&
                                       selectedDate?.getFullYear() === currentDate.getFullYear();
                    
                    return (
                      <button
                        key={day}
                        onClick={() => handleDateClick(day)}
                        disabled={isDisabled}
                        className={`
                          aspect-square rounded-lg text-sm font-medium transition-all
                          ${isDisabled ? 'text-muted-foreground/40 cursor-not-allowed' : 'hover:bg-primary/10 cursor-pointer'}
                          ${isSelected ? 'bg-primary text-primary-foreground hover:bg-primary' : ''}
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    {selectedDate 
                      ? `Horários para ${selectedDate.toLocaleDateString('pt-BR')}`
                      : 'Selecione uma data primeiro'
                    }
                  </h3>
                </div>

                {selectedDate ? (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          py-3 px-2 rounded-lg text-sm font-medium transition-all
                          ${selectedTime === time 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted hover:bg-primary/10 text-foreground'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-48 text-muted-foreground">
                    <p>Selecione uma data no calendário</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Patient Information */}
          {step === 2 && (
            <div className="bg-card rounded-xl border border-border p-8 animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Seus Dados</h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Data de Nascimento *</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(16) 99999-9999"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="insurance">Convênio</Label>
                    <Select value={formData.insurance} onValueChange={(value) => setFormData({ ...formData, insurance: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o convênio" />
                      </SelectTrigger>
                      <SelectContent>
                        {insurances.map((insurance) => (
                          <SelectItem key={insurance} value={insurance}>{insurance}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appointmentType">Tipo de Consulta *</Label>
                    <Select value={formData.appointmentType} onValueChange={(value) => setFormData({ ...formData, appointmentType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {appointmentTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Observações (opcional)</Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Textarea
                      id="notes"
                      placeholder="Descreva brevemente o motivo da consulta..."
                      className="pl-10 min-h-[100px]"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="bg-card rounded-xl border border-border p-8 animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <Check className="w-5 h-5 text-success" />
                <h3 className="font-semibold text-foreground">Confirme seus dados</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Dados da Consulta</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-muted-foreground">Data</p>
                        <p className="font-medium text-foreground">
                          {selectedDate?.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-muted-foreground">Horário</p>
                        <p className="font-medium text-foreground">{selectedTime}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Dados do Paciente</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Nome:</span> {formData.name}</p>
                    <p><span className="text-muted-foreground">E-mail:</span> {formData.email}</p>
                    <p><span className="text-muted-foreground">Telefone:</span> {formData.phone}</p>
                    <p><span className="text-muted-foreground">Convênio:</span> {formData.insurance || 'Particular'}</p>
                    <p><span className="text-muted-foreground">Tipo:</span> {formData.appointmentType}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Ao confirmar, você receberá um e-mail com os detalhes da consulta e lembretes 24h e 1h antes do horário agendado.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                <ChevronLeft className="w-4 h-4" />
                Voltar
              </Button>
            )}
            <div className="ml-auto">
              {step < 3 ? (
                <Button 
                  variant="hero" 
                  onClick={() => setStep(step + 1)}
                  disabled={step === 1 && (!selectedDate || !selectedTime)}
                >
                  Continuar
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button variant="success" size="lg" onClick={handleSubmit}>
                  <Check className="w-5 h-5" />
                  Confirmar Agendamento
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
