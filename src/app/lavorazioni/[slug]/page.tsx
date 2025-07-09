import { notFound } from "next/navigation";
import { lavorazioni } from "@/data/lavorazioni";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LavorazionePage({ params }: Props) {
  const { slug } = await params;
  const lavorazione = lavorazioni.find((l) => l.slug === slug);
 
  if (!lavorazione) return notFound();
 
  const Icon = lavorazione.icona;
 
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 mt-16">
      {/* Header */}
      <div className="text-center mb-12">
        <Icon className="w-14 h-14 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {lavorazione.titolo}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          {lavorazione.descrizione}
        </p>
      </div>
     
      {/* Galleria immagini */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {lavorazione.immagini.map((src, i) => (
          <div
            key={i}
            className="w-full sm:w-80 overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`${lavorazione.titolo} - Esempio ${i + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
     
      {/* CTA finali */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Vuoi saperne di più?
        </h2>
        <Link href={`/contatti`}>
          <Button variant="default" size="lg" className="text-sm sm:text-base">
            Richiedi un preventivo
          </Button>
        </Link>
      </div>
    </div>
  );
}