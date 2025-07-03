import { Sofa, Car, Armchair } from "lucide-react"

export type Lavorazione = {
  slug: string
  titolo: string
  descrizione: string
  icona: React.ElementType
}

export const lavorazioni: Lavorazione[] = [
  {
    slug: "rivestimenti-divani",
    titolo: "Rivestimenti per divani",
    descrizione: "Rivestiamo divani e poltrone con tessuti su misura e materiali di qualità.",
    icona: Sofa,
  },
  {
    slug: "tappezzeria-auto",
    titolo: "Tappezzeria Auto",
    descrizione: "Interni auto personalizzati, anche su vetture d'epoca.",
    icona: Car,
  },
  {
    slug: "poltrone",
    titolo: "Poltrone su misura",
    descrizione: "Restauro e rivestimento poltrone classiche e moderne.",
    icona: Armchair,
  },
  {
    slug: "sedie",
    titolo: "Sedia",
    descrizione: "Restauro e rivestimento poltrone classiche e moderne.",
    icona: Armchair,
  },
]
