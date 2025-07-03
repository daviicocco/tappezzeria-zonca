"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[rgb(237,237,233)] text-black z-50 shadow-sm">
      <div className="h-full px-6 flex items-center justify-between w-full">
        {/* Logo cliccabile a sinistra */}
        <Link href="/" className="hover:opacity-80 transition-opacity font-bold">
          ZONCA
          {/*<img src="/images/LogoWhite.svg" alt="Logo Zonca" className="h-12" />*/}
        </Link>
        
        {/* Hamburger Menu */}
        <Button
          variant="ghost"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black hover:bg-black/10 z-50 p-4 group"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={menuOpen ? { rotate: 0 } : { rotate: 0 }}
            className="relative"
          >
            {menuOpen ? (
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{ rotate: 180, scale: 1.2 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="group-hover:rotate-45 transition-transform duration-300"
              >
                <X size={60} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1.2 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="group-hover:scale-125 transition-transform duration-300"
              >
                <Menu size={60} />
              </motion.div>
            )}
          </motion.div>
        </Button>
      </div>
      
      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[rgb(237,237,233)] text-black z-40 flex flex-col items-center justify-center space-y-8"
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold hover:text-black/70 transition-colors hover:no-underline"
            >
              Home
            </Link>
            <Link
              href="/lavorazioni"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold hover:text-black/70 transition-colors hover:no-underline"
            >
              Lavorazioni
            </Link>
            <Link
              href="/contatti"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold hover:text-black/70 transition-colors hover:no-underline"
            >
              Contatti
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}