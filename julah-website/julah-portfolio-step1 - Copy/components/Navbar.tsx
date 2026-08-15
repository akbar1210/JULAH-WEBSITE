// components/Navbar.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#sejarah", label: "Sejarah" },
  { href: "#budaya", label: "Tradisi & Budaya" },
  { href: "#galeri", label: "Galeri" },
  { href: "#peta", label: "Peta & Lokasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-hijau-tua/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="flex items-center gap-3 font-display text-lg tracking-wide text-putih">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-emas/20 flex items-center justify-center">
            <Image
              src="/julahlogo.png"
              alt="Logo Desa Julah"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span>
            Desa <span className="text-emas">Julah</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm uppercase tracking-wider text-putih/85 transition-colors hover:text-emas"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#peta"
          className="hidden rounded-sm border border-emas px-5 py-2 font-body text-sm uppercase tracking-wider text-emas transition-colors hover:bg-emas hover:text-hijau-tua md:inline-block"
        >
          Jelajahi Desa
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`h-[1.5px] w-6 bg-putih transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-putih transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-putih transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 bg-hijau-tua px-6 pb-6 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-body text-sm uppercase tracking-wider text-putih/85 hover:text-emas"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}