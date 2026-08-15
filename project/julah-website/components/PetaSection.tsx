// components/PetaSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { potensiData } from "./data/potensiData";

export default function PetaSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  
  const categories = ["Semua", "Wisata Alam", "Tempat Suci", "Kuliner", "Kerajinan", "Budaya"];

  const filteredPotensi = activeCategory === "Semua"
    ? potensiData
    : potensiData.filter((p) => p.kategori === activeCategory);

  return (
    <section
      id="peta"
      className="scroll-mt-20 bg-langit/30 py-24 px-6 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-langit-tua">
            Temukan Julah
          </span>
          <h2 className="mt-4 font-display text-5xl italic text-hijau-tua">
            Peta dan Lokasi
          </h2>
          <p className="mt-3 max-w-xl mx-auto font-body text-hijau-tua/60">
            Jelajahi Julah melalui peta interaktif dan temukan potensi-potensi unik yang ada di desa ini.
          </p>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden bg-sawah/10 shadow-md mb-8 border border-sawah/20">
          <Image
            src="/images/petapotensi.png"
            alt="Peta Potensi Desa Julah"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
            unoptimized={true}
          />
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h3 className="font-display text-3xl text-hijau-tua">
              Potensi Desa Julah
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-emas text-hijau-tua shadow-md"
                      : "bg-putih/70 text-hijau-tua/60 hover:bg-putih border border-sawah/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPotensi.map((potensi) => {
              const Icon = potensi.icon;
              const index = potensiData.indexOf(potensi) % 6;
              const cardVariants = [
                "border-l-4 border-emas",
                "border-l-4 border-sawah",
                "border-l-4 border-tanah",
                "border-l-4 border-vulkanik",
                "border-l-4 border-langit-tua",
                "border-l-4 border-emas",
              ];
              
              return (
                <Link
                  key={potensi.id}
                  href={`/potensi/${potensi.slug}`}
                  className={`${cardVariants[index]} group block overflow-hidden rounded-xl bg-putih shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  <div className="relative h-52 w-full overflow-hidden bg-hijau-muda">
                    <img
                      src={potensi.gambar}
                      alt={potensi.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hijau-tua/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="bg-emas/90 text-hijau-tua text-xs px-3 py-1 rounded-full font-body">
                        {potensi.kategori}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-xl text-hijau-tua group-hover:text-emas-tua transition-colors">
                      {potensi.nama}
                    </h3>
                    <p className="font-body text-sm text-hijau-tua/60 mt-1 line-clamp-2">
                      {potensi.deskripsi}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-hijau-tua/40">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22c-2 0-8-4-8-9s4-9 8-9 8 4 8 9-6 9-8 9z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{potensi.lokasi}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredPotensi.length === 0 && (
            <div className="text-center py-12 text-hijau-tua/40 font-body">
              Tidak ada potensi desa dengan kategori ini
            </div>
          )}
        </div>

        <div>
          <h3 className="font-display text-2xl text-hijau-tua mb-4">
            Lokasi Desa Julah
          </h3>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md border border-sawah/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.128889!2d115.315278!3d-8.128889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2356a4f5f5f5f%3A0x1234567890abcdef!2sDesa%20Julah%2C%20Kec.%20Tejakula%2C%20Kabupaten%20Buleleng%2C%20Bali!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            <div className="absolute bottom-4 right-4 bg-putih/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-sawah/20">
              <a
                href="https://www.google.com/maps/search/Desa+Julah+Buleleng/@-8.128889,115.315278"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-emas-tua hover:text-emas flex items-center gap-2"
              >
                <span>Buka di Google Maps</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}