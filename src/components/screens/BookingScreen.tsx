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

const BookingScreen = () => {
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

  const dayNames = ["D", "S", "T", "Q", "Q", "S", "S"];

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
    
    toast.success("Agendamento realizado com sucesso!");
    
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
    <div className="px-4 pt-20 pb-24 space-y-4">
      {/* Header */}
      <div className="text-center mb-2">
        <h1 className="font-display text-xl font-bold text-foreground">
          Agendar Consulta
        </h1>
        <p className="text-sm text-muted-foreground">
          Escolha a melhor data e horário
        </p>
      </div>

      {/* Steps Indicator */}
      <div className="flex justify-center gap-2 mb-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
              step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              {step > s ? <Check className="w-4 h-4" /> : s}
            </div>
          </div>
        ))}
      </div>

      {/* Step 1: Date and Time Selection */}
      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          {/* Calendar */}
          <div className="bg-card rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="icon" onClick={prevMonth} className="h-8 w-8">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h3 className="font-semibold text-foreground text-sm">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <Button variant="ghost" size="icon" onClick={nextMonth} className="h-8 w-8">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Day names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day, i) => (
                <div key={i} className="text-center text-xs font-medium text-muted-foreground py-1">
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
          <div className="bg-card rounded-2xl border border-border p-4">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-foreground text-sm">
                {selectedDate 
                  ? `${selectedDate.toLocaleDateString('pt-BR')}`
                  : 'Selecione uma data'
                }
              </h3>
            </div>

            {selectedDate ? (
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                      py-2 rounded-lg text-xs font-medium transition-all
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
              <div className="flex items-center justify-center h-24 text-muted-foreground text-sm">
                <p>Selecione uma data primeiro</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Patient Information */}
      {step === 2 && (
        <div className="bg-card rounded-2xl border border-border p-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground text-sm">Seus Dados</h3>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs">Nome Completo *</Label>
              <Input
                id="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-10 text-sm"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(16) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-10 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthDate" className="text-xs">Nascimento *</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  className="h-10 text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs">E-mail *</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-10 text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs">Convênio</Label>
                <Select value={formData.insurance} onValueChange={(value) => setFormData({ ...formData, insurance: value })}>
                  <SelectTrigger className="h-10 text-sm">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {insurances.map((insurance) => (
                      <SelectItem key={insurance} value={insurance}>{insurance}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Tipo *</Label>
                <Select value={formData.appointmentType} onValueChange={(value) => setFormData({ ...formData, appointmentType: value })}>
                  <SelectTrigger className="h-10 text-sm">
                    <SelectValue placeholder="Selecione" />
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
              <Label htmlFor="notes" className="text-xs">Observações</Label>
              <Textarea
                id="notes"
                placeholder="Motivo da consulta..."
                className="min-h-[60px] text-sm"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>
          </form>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="bg-card rounded-2xl border border-border p-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Check className="w-4 h-4 text-success" />
            <h3 className="font-semibold text-foreground text-sm">Confirme seus dados</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-muted-foreground uppercase">Consulta</h4>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg flex-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {selectedDate?.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg flex-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{selectedTime}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-medium text-muted-foreground uppercase">Paciente</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">Nome:</span> {formData.name}</p>
                <p><span className="text-muted-foreground">Tel:</span> {formData.phone}</p>
                <p><span className="text-muted-foreground">E-mail:</span> {formData.email}</p>
                <p><span className="text-muted-foreground">Tipo:</span> {formData.appointmentType}</p>
              </div>
            </div>

            <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-xs text-muted-foreground">
                Você receberá lembretes por e-mail 24h e 1h antes da consulta.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-2">
        {step > 1 && (
          <Button variant="outline" className="flex-1 h-12" onClick={() => setStep(step - 1)}>
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </Button>
        )}
        {step < 3 ? (
          <Button 
            variant="hero" 
            className="flex-1 h-12"
            onClick={() => setStep(step + 1)}
            disabled={step === 1 && (!selectedDate || !selectedTime)}
          >
            Continuar
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button 
            variant="hero" 
            className="flex-1 h-12"
            onClick={handleSubmit}
          >
            <Check className="w-4 h-4" />
            Confirmar Agendamento
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingScreen;
