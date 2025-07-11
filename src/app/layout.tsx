import type { Metadata, } from "next";
import "./globals.css";

import Navbar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Tappezzeria Zonca",
  description: "Tappezzeria Zonca Mimmo a Villagreca(SU): rifacimento tappezzeria completa per veicoli industriali e revisione completa dei sistemi di ammortizazione dei sedili.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/images/iconLogo.svg" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
