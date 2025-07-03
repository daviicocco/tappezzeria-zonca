import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import HomeHero from "@/components/ui/HomeHero"
import LavorazioniSection from "@/components/ui/LavorazioniSection";


export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <LavorazioniSection />
      <ContactSection />
    </>
  );
}