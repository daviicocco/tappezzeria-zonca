"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[rgb(237,237,233)] py-10 px-4 text-center">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Logo */}
        <div>
          <img
            src="/images/logo-bianco.svg"
            alt="Logo Zonca"
            className="h-10 mx-auto"
          />
        </div>

        {/* Email e PEC */}
        <div className="text-sm space-y-1">
          <p>
            <Link
              href="mailto:mimmo.zonca@gmail.com"
              className="hover:text-white transition-colors"
            >
              mimmo.zonca@gmail.com
            </Link>
          </p>
          <p>
            <Link
              href="mailto:mimmo.zonca@pec.it"
              className="hover:text-white transition-colors"
            >
              mimmo.zonca@pec.it
            </Link>
          </p>
        </div>

        {/* Officina */}
        <div className="text-xs text-muted-foreground">
          OFFICINA:
          <Link
            href="https://maps.google.com/?q=Via+Serci+Centro+Monsignor+51+Villagreca+SU+Sardegna"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors ml-1 no-underline"
          >
            Via Serci Centro Monsignor 51, Villagreca (SU) - Sardegna
          </Link>
        </div>
        {/* Dati Fiscali */}
        <div className="text-xs">P.IVA: 02372910923</div>

        {/* Separatore shadcn */}
        <hr className="border-t border-white w-2 mx-auto" />

        {/* Privacy e policy */}
        <div className="text-xs">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy & Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
