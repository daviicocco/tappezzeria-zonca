"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Send, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Qui dovresti implementare la logica per inviare l'email
      // Ad esempio usando un'API route di Next.js
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset del form
        setFormData({
          nome: "",
          email: "",
          telefono: "",
          messaggio: "",
        });
        alert('Messaggio inviato con successo!');
      } else {
        throw new Error('Errore nell\'invio del messaggio');
      }
    } catch (error) {
      console.error('Errore:', error);
      alert('Errore nell\'invio del messaggio. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
                <a 
                  href="tel:+393201234567" 
                  className="text-lg hover:text-indigo-600 transition-colors duration-200"
                >
                  +39 320 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a 
                  href="tel:+393209876543" 
                  className="text-lg hover:text-indigo-600 transition-colors duration-200"
                >
                  +39 320 987 6543
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
                <a 
                  href="mailto:info@tuaazienda.it" 
                  className="text-lg hover:text-indigo-600 transition-colors duration-200"
                >
                  info@tuaazienda.it
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a 
                  href="mailto:preventivi@tuaazienda.it" 
                  className="text-lg hover:text-indigo-600 transition-colors duration-200"
                >
                  preventivi@tuaazienda.it
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
                <span className="font-medium">8:00 - 18:00</span>
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
  );
}