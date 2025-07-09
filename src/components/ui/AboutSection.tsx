// AboutSection
"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6 py-8">
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold text-black mt-0 mb-2">CHI SIAMO</h2>
        <p className="text-lg">
          Siamo un’azienda con oltre 25 anni di esperienza, attiva dal 1996 nel settore della tappezzeria e revisione 
          dei meccanismi dei sedili per mezzi industriali come: <b>camion, trattori agricoli, veicoli per la nettezza urbana e 
          macchine movimento terra</b>. Grazie alla competenza maturata nel tempo, offriamo soluzioni di qualità, 
          affidabili e durature, per garantire comfort, sicurezza e funzionalità a chi lavora ogni giorno su questi mezzi. 
        </p>
        <p className="text-lg">
          La nostra officina si trova 
          <b>
            <Link href="https://maps.google.com/?q=Via+Serci+Centro+Monsignor+51+Villagreca+SU+Sardegna"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity no-underline">
            in Via Serci Centro Monsignor 51, Villagreca (SU) - Sardegna,
            </Link>
              </b>
              facilmente raggiungibile dalla SS 131.
        </p>
      </div>

      <div className="flex-1 aspect-[4/3] rounded-lg overflow-hidden">
        <img
          src="/images/foto-home.webp"
          alt="foto-team"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
