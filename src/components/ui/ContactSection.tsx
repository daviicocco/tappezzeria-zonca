// ContactSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Send, MapPin, Clock, CheckCircle, XCircle } from "lucide-react";

interface NotificationState {
  isVisible: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({
    isVisible: false,
    type: 'success',
    title: '',
    message: ''
  });
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showNotification = (type: 'success' | 'error', title: string, message: string) => {
    setNotification({
      isVisible: true,
      type,
      title,
      message
    });
  };

  useEffect(() => {
    if (notification.isVisible) {
      const timer = setTimeout(() => {
        setNotification(prev => ({ ...prev, isVisible: false }));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [notification.isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ nome: "", email: "", telefono: "", messaggio: "" });
        showNotification(
          'success',
          'Preventivo Inviato!',
          'Il tuo preventivo è stato inviato con successo. Ti contatteremo il prima possibile.'
        );
      } else {
        throw new Error('Errore nell\'invio del messaggio');
      }
    } catch (error) {
      console.error('Errore:', error);
      showNotification(
        'error',
        'Errore nell\'invio',
        'Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi o contattaci direttamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-8 py-8 space-y-8 mt-10">
        <h2 className="text-3xl font-tanker font-bold text-center text-black">
          CONTATTI
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informazioni di contatto */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-tanker text-xl text-black flex items-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-600" />
                  TELEFONO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <a href="tel:+393339456979" className="text-lg hover:text-indigo-600 transition-colors duration-200">
                    +39 333 945 6979 <span className="text-sm text-muted-foreground ml-2">(Mimmo)</span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <a href="tel:+393442698878" className="text-lg hover:text-indigo-600 transition-colors duration-200">
                    +39 344 269 8878 <span className="text-sm text-muted-foreground ml-2">(Jacopo)</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-tanker text-xl text-black flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-600" />
                  EMAIL
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a href="mailto:mimmo.zonca@gmail.com" className="text-lg hover:text-indigo-600 transition-colors duration-200">
                    mimmo.zonca@gmail.com <span className="text-sm text-muted-foreground ml-2">(Email)</span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a href="mailto:mimmo.zonca@pec.it" className="text-lg hover:text-indigo-600 transition-colors duration-200">
                    mimmo.zonca@pec.it <span className="text-sm text-muted-foreground ml-2">(PEC)</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-tanker text-xl text-black flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  ORARI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunedì - Venerdì:</span>
                  <span className="font-medium">8:00 - 12:00, 15:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sabato:</span>
                  <span className="font-medium">8:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domenica:</span>
                  <span className="font-medium">Chiuso</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Modulo di contatto */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-tanker text-xl text-black flex items-center gap-2">
                <Send className="w-5 h-5 text-indigo-600" />
                RICHIEDI PREVENTIVO
              </CardTitle>
              <CardDescription>
                Compila il modulo per ricevere un preventivo personalizzato
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nome" className="text-sm font-medium">
                    Nome *
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Il tuo nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="La tua email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-sm font-medium">
                    Telefono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="Il tuo telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="messaggio" className="text-sm font-medium">
                    Messaggio *
                  </Label>
                  <Textarea
                    id="messaggio"
                    name="messaggio"
                    placeholder="Descrivi il lavoro che ti serve..."
                    value={formData.messaggio}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-1 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="w-4 h-4 mr-2 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      INVIA RICHIESTA
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popup di notifica */}
      {notification.isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay sfocato */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          
          {/* Popup content */}
          <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 animate-in fade-in-0 zoom-in-95 duration-300">
            {/* Icona centrata in alto */}
            <div className="flex justify-center pt-8 pb-4">
              {notification.type === 'success' ? (
                <CheckCircle className="w-16 h-16 text-green-600" />
              ) : (
                <XCircle className="w-16 h-16 text-red-600" />
              )}
            </div>

            {/* Messaggio */}
            <div className="px-8 pb-8 text-center">
              <p className="text-lg text-gray-800 leading-relaxed">
                {notification.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}