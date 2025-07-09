import {
  Sofa,
  Car,
  Cog,
  Armchair,
  Wrench,
  Truck,
  ShoppingCart,
} from "lucide-react";

export type Lavorazione = {
  slug: string;
  titolo: string;
  descrizione: string;
  icona: React.ElementType;
  immagini: string[];
};

export const lavorazioni: Lavorazione[] = [
  {
    slug: "sostituzione-sciumati",
    titolo: "Sostituzione Schiumati Sedili",
    descrizione:
      "Intervento su sedili usurati con sostituzione dei materiali schiumati interni per ripristinare il comfort e la forma originale.",
    icona: Sofa,
    immagini: [
      "/images/schiumati-1.jpg",
      "/images/schiumati-2.jpg",
      "/images/schiumati-3.jpg",
    ],
  },
  {
    slug: "tappezzeria-completa",
    titolo: "Rifacimento Tappezzeria Completa",
    descrizione:
      "Rivestimento completo degli interni del veicolo con materiali personalizzati: tessuti, ecopelle o vera pelle, secondo specifiche del cliente o standard OEM.",
    icona: Armchair,
    immagini: [
      "/images/tappezzeria-completa/tappezzeria-1.jpg",
      "/images/tappezzeria-completa/tappezzeria-2.jpg",
      "/images/tappezzeria-completa/tappezzeria-3.jpg",
    ],
  },
  {
    slug: "cuscini-custom-nettezza-urbana",
    titolo: "Cuscini Custom per Veicoli di Nettezza Urbana",
    descrizione:
      "Realizzazione artigianale di cuscini ergonomici e resistenti su misura per veicoli di servizio, come mezzi per la raccolta rifiuti, con materiali antiusura.",
    icona: Truck,
    immagini: [
      "/img/cuscini-custom-nettezza-urbana/cuscini-1.jpg",
      "/img/cuscini-custom-nettezza-urbana/cuscini-2.jpg",
      "/img/cuscini-custom-nettezza-urbana/cuscini-3.jpg",
    ],
  },
  {
    slug: "sostituzione-cielo-auto",
    titolo: "Sostituzione Cielo Auto",
    descrizione:
      "Rimozione e rifacimento del rivestimento del cielo del veicolo con materiali di qualità, eliminando cedimenti o scollature.",
    icona: Car,
    immagini: [
      "/images/sostituzione-cielo-auto/cielo-1.jpg",
      "/img/sostituzione-cielo-auto/cielo-2.jpg",
      "/img/sostituzione-cielo-auto/cielo-3.jpg",
    ],
  },
  {
    slug: "pneumatica-sedili",
    titolo: "Ripristino Meccanismi e Pneumatica",
    descrizione:
      "Manutenzione e sostituzione dei sistemi pneumatici e meccanici dei sedili, compresi ammortizzatori e regolazioni lombari, per garantire funzionalità e sicurezza.",
    icona: Cog,
    immagini: [
      "/img/pneumatica-sedili/pneumatica-1.jpg",
      "/img/pneumatica-sedili/pneumatica-2.jpg",
      "/img/pneumatica-sedili/pneumatica-3.jpg",
    ],
  },
  {
    slug: "vendita-sedili-usati",
    titolo: "Vendita Sedili Usati (su Richiesta)",
    descrizione:
      "Selezione e fornitura di sedili usati originali in ottime condizioni, disponibili su richiesta per veicoli commerciali e o industriali.",
    icona: ShoppingCart,
    immagini: [
      "/img/vendita-sedili-usati/sedili-usati-1.jpg",
      "/img/vendita-sedili-usati/sedili-usati-2.jpg",
      "/img/vendita-sedili-usati/sedili-usati-3.jpg",
    ],
  },
];