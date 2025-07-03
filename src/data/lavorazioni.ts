import { Sofa, Car, Armchair } from "lucide-react"

export type Lavorazione = {
  slug: string
  titolo: string
  descrizione: string
  icona: React.ElementType
}

export const lavorazioni: Lavorazione[] = [
  {
    slug: "ciumati",
    titolo: "Sostitutzione sciumati",
    descrizione: "descrizione..",
    icona: Sofa,
  },
  {
    slug: "tettuccio-auto",
    titolo: "Sostituzione cielo auto",
    descrizione: "descrizione..",
    icona: Car,
  },
  {
    slug: "pneumatica",
    titolo: "Pneumatica e meccanismi",
    descrizione: "descrizione..",
    icona: Armchair,
  },

   {
    slug: "tappezzeria",
    titolo: "Tappezzeria",
    descrizione: "descrizione..",
    icona: Armchair,
  },
]
