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
};

export const lavorazioni: Lavorazione[] = [
  {
    slug: "sostituzione-sciumati",
    titolo: "Sostituzione Schiumati Sedili",
    descrizione:
      "Intervento su sedili usurati con sostituzione dei materiali schiumati interni per ripristinare il comfort e la forma originale.",
    icona: Sofa,
  },
  {
    slug: "tappezzeria-completa",
    titolo: "Rifacimento Tappezzeria Completa",
    descrizione:
      "Rivestimento completo degli interni del veicolo con materiali personalizzati: tessuti, ecopelle o vera pelle, secondo specifiche del cliente o standard OEM.",
    icona: Armchair,
  },
  {
    slug: "cuscini-custom-nettezza-urbana",
    titolo: "Cuscini Custom per Veicoli di Nettezza Urbana",
    descrizione:
      "Realizzazione artigianale di cuscini ergonomici e resistenti su misura per veicoli di servizio, come mezzi per la raccolta rifiuti, con materiali antiusura.",
    icona: Truck,
  },
  {
    slug: "sostituzione-cielo-auto",
    titolo: "Sostituzione Cielo Auto",
    descrizione:
      "Rimozione e rifacimento del rivestimento del cielo del veicolo con materiali di qualità, eliminando cedimenti o scollature.",
    icona: Car,
  },
  {
    slug: "pneumatica-sedili",
    titolo: "Ripristino Meccanismi e Pneumatica",
    descrizione:
      "Manutenzione e sostituzione dei sistemi pneumatici e meccanici dei sedili, compresi ammortizzatori e regolazioni lombari, per garantire funzionalità e sicurezza.",
    icona: Cog,
  },
  {
    slug: "vendita-sedili-usati",
    titolo: "Vendita Sedili Usati (su Richiesta)",
    descrizione:
      "Selezione e fornitura di sedili usati originali in ottime condizioni, disponibili su richiesta per veicoli commerciali e o industriali.",
    icona: ShoppingCart,
  },
];
