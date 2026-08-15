// components/Hero.tsx
import Image from "next/image";
import CandiMotif from "./CandiMotif";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden bg-hijau-tua">
      <div className="absolute inset-0">
        <Image
          src="/julahicon.png"
          alt="Desa Julah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hijau-tua/70 via-hijau-tua/30 to-hijau-tua/50" />
        <div className="absolute inset-0 bg-hijau-tua/40" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #E8F0E8 0px, #E8F0E8 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />

      <CandiMotif className="pointer-events-none absolute -bottom-4 left-1/2 h-24 w-[420px] -translate-x-1/2 text-emas opacity-25 md:h-32 md:w-[520px]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-emas-muda">
          Kabupaten Buleleng · Bali Aga
        </span>
        <h1 className="font-display text-6xl italic text-putih md:text-8xl drop-shadow-lg">
          Julah
        </h1>
        <p className="mt-5 max-w-xl font-body text-base text-putih/90 md:text-lg drop-shadow-md">
          Salah satu desa Bali Aga tertua, menjaga adat dan sejarah yang hidup
          jauh sebelum era Majapahit — di lereng utara Buleleng.
        </p>
        <a
          href="#sejarah"
          className="mt-8 rounded-sm bg-emas px-8 py-3 font-body text-sm uppercase tracking-wider text-hijau-tua transition-transform hover:scale-[1.03] hover:bg-emas-muda shadow-lg"
        >
          Telusuri Julah
        </a>
      </div>

      <a
        href="#sejarah"
        aria-label="Gulir ke bawah"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-putih/70 hover:text-emas"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}