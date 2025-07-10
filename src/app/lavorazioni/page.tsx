"use client";

import Link from "next/link";
import { lavorazioni } from "@/data/lavorazioni";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LavorazioniPage() {
  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 py-10 sm:px-6 sm:py-16 mt-16">
      {/* Titolo Centrale */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
          Le nostre lavorazioni
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Scopri tutte le lavorazioni artigianali che eseguiamo con cura e attenzione al dettaglio.
        </p>
      </div>

      {/* Griglia delle lavorazioni */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lavorazioni.map((lavorazione) => {
          const Icon = lavorazione.icona;
          return (
            <Card
              key={lavorazione.slug}
              className="flex flex-col justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{lavorazione.titolo}</h2>
                <p className="text-gray-600 text-sm">{lavorazione.descrizione}</p>
              </div>

              <div className="mt-6 text-center">
                <Link href={`/lavorazioni/${lavorazione.slug}`} passHref>
                  <Button 
                    variant="secondary" 
                    className="w-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    SCOPRI
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </main>
  );
}