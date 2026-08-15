"use client";

import { useState, useRef } from "react";  // ← TAMBAHKAN useState
import { useInView } from "react-intersection-observer";
import { sejarahData } from "./data/sejarahData";

export default function SejarahJulah() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  return (
    <section
      id="sejarah"
      ref={sectionRef}
      className="scroll-mt-20 bg-hijau-muda py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-body text-xs uppercase tracking-[0.4em] text-emas-tua/70">
            Sejarah dan Tradisi
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl italic text-hijau-tua leading-[1.1]">
            {sejarahData.judul}
          </h1>
          <div className="w-12 h-[2px] bg-emas/50 mx-auto mt-4" />
          <p className="mt-4 max-w-2xl mx-auto font-body text-hijau-tua/50 text-base md:text-lg leading-relaxed">
            {sejarahData.subJudul}
          </p>
        </div>

        {}
        <div
          ref={contentRef}
          className={`space-y-12 transition-all duration-700 delay-200 ${
            contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {}
          <p className="font-body text-hijau-tua/75 leading-[2] text-base md:text-lg first-letter:text-6xl first-letter:font-display first-letter:italic first-letter:text-emas first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[1]">
            {sejarahData.pengantar}
          </p>

          {}
          <div>
            <h2 className="font-display text-2xl md:text-3xl italic text-hijau-tua mb-3">
              {sejarahData.asalUsul.judul}
            </h2>
            <p className="font-body text-hijau-tua/70 leading-[2] text-base md:text-lg mb-3">
              {sejarahData.asalUsul.isi}
            </p>
            <blockquote className="font-body text-emas-tua/70 italic text-base md:text-lg leading-relaxed border-l-2 border-emas/30 pl-5 my-4 py-1">
              {sejarahData.asalUsul.detail}
            </blockquote>
            <p className="font-body text-hijau-tua/70 leading-[2] text-base md:text-lg">
              {sejarahData.asalUsul.perkembangan}
            </p>
          </div>

          {}
          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-emas/20 hidden md:block" />
            <div className="md:pl-8">
              <h2 className="font-display text-2xl md:text-3xl italic text-hijau-tua mb-3">
                {sejarahData.prasasti.judul}
              </h2>
              <p className="font-body text-hijau-tua/70 leading-[2] text-base md:text-lg mb-3">
                {sejarahData.prasasti.pengantar}
              </p>
              <p className="font-body text-hijau-tua/70 leading-[2] text-base md:text-lg">
                {sejarahData.prasasti.golongan}
              </p>
            </div>
          </div>

          {}
          <div>
            <h2 className="font-display text-2xl md:text-3xl italic text-hijau-tua mb-3">
              {sejarahData.legenda.judul}
            </h2>
            <p className="font-body text-hijau-tua/70 leading-[2] text-base md:text-lg mb-6">
              {sejarahData.legenda.intro}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                sejarahData.legenda.bagian1,
                sejarahData.legenda.bagian2,
                sejarahData.legenda.bagian3,
                sejarahData.legenda.bagian4
              ].map((bagian, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emas/30 font-display text-sm font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 h-[1px] bg-hijau-tua/5 group-hover:bg-emas/20 transition-colors" />
                  </div>
                  <h3 className="font-display text-lg italic text-hijau-tua group-hover:text-emas-tua transition-colors">
                    {bagian.judul}
                  </h3>
                  <p className="font-body text-hijau-tua/60 leading-relaxed text-sm md:text-base mt-1">
                    {bagian.isi}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-body text-hijau-tua/70 leading-[2] text-base md:text-lg mt-6">
              {sejarahData.legenda.penutup}
            </p>
          </div>

          {}
          <div>
            <h2 className="font-display text-2xl md:text-3xl italic text-hijau-tua mb-3">
              {sejarahData.filosofiJulah.judul}
            </h2>
            <div className="relative">
              <span className="absolute -left-2 -top-2 text-6xl text-emas/10 font-display">"</span>
              <p className="font-body text-hijau-tua/70 leading-[2] text-base md:text-lg pl-4 md:pl-8">
                {sejarahData.filosofiJulah.isi}
              </p>
            </div>
          </div>

          {/* Tradisi */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-emas/30">✦</span>
              <span className="flex-1 h-[1px] bg-emas/10" />
              <span className="text-emas/30">✦</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl italic text-hijau-tua mb-3 text-center">
              {sejarahData.tradisi.judul}
            </h2>
            <p className="font-body text-hijau-tua/70 leading-[2] text-base md:text-lg mb-3">
              {sejarahData.tradisi.isi}
            </p>
            <p className="font-body text-hijau-tua/70 leading-[2] text-base md:text-lg italic text-emas-tua/60 text-center max-w-2xl mx-auto">
              {sejarahData.tradisi.upacara}
            </p>
          </div>

          {}
          <div className="pt-4">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="text-5xl text-emas/20 font-display">"</div>
              <div>
                <p className="font-body text-hijau-tua/80 leading-[2] text-base md:text-lg italic">
                  {sejarahData.wawancara.kutipan}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-emas/30" />
                  <div>
                    <p className="font-display text-sm text-hijau-tua">
                      {sejarahData.wawancara.narasumber}
                    </p>
                    <p className="font-body text-xs text-hijau-tua/40">
                      {sejarahData.wawancara.tanggal}
                    </p>
                  </div>
                </div>
                <p className="font-body text-hijau-tua/60 leading-relaxed text-sm mt-3">
                  {sejarahData.wawancara.kesimpulan}
                </p>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="font-body text-xs uppercase tracking-[0.4em] text-emas-tua/50">
              Kronologi
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl italic text-hijau-tua">
              Garis Waktu Sejarah Julah
            </h2>
            <div className="w-12 h-[2px] bg-emas/30 mx-auto mt-4" />
          </div>

          <div className="relative bg-hijau-tua/95 rounded-2xl py-12 px-6 md:px-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #E8F0E8 0px, #E8F0E8 1px, transparent 1px, transparent 14px)"
              }}
            />
            
            <div className="absolute left-1/2 top-12 bottom-12 w-[1px] -translate-x-1/2 bg-putih/5 hidden md:block" />

            {sejarahData.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              
              const { ref: itemRef, inView: itemInView } = useInView({
                triggerOnce: false,
                threshold: 0.1,
              });

              return (
                <div
                  key={index}
                  ref={itemRef}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 mb-8 last:mb-0 transition-all duration-700 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } ${
                    itemInView 
                      ? "opacity-100 translate-x-0" 
                      : `opacity-0 ${isEven ? "translate-x-[-40px]" : "translate-x-[40px]"}`
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-emas blur-xl opacity-30" />
                      <div className="relative h-4 w-4 rounded-full bg-emas border-2 border-hijau-tua shadow-lg" />
                    </div>
                  </div>

                  <div className={`md:w-5/12 ${isEven ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                    <div 
                      className={`bg-putih/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                        activeIndex === index 
                          ? "border-emas/50 shadow-lg shadow-emas/10" 
                          : "border-putih/10 hover:border-emas/30"
                      }`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <div className="flex items-center gap-3 mb-2 md:justify-end">
                        <span className="font-display text-2xl text-emas/60">
                          {item.tahun}
                        </span>
                        <span className="font-body text-xs text-putih/20">
                          Caka {item.caka}
                        </span>
                      </div>
                      <h3 className="font-display text-xl text-putih group-hover:text-emas transition-colors">
                        {item.raja}
                      </h3>
                      <p className="font-body text-sm text-putih/40 leading-relaxed mt-2">
                        {item.peristiwa}
                      </p>
                      <div className="mt-3 pt-3 border-t border-putih/5">
                        <span className="font-body text-xs text-emas/30">
                          {item.sumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-5/12 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {}
        <div className="mt-12 text-center">
          <div className="w-16 h-[1px] bg-emas/20 mx-auto mb-6" />
          <p className="font-body text-sm text-hijau-tua/30 leading-relaxed max-w-2xl mx-auto">
            {sejarahData.penutup}
          </p>
          <p className="font-body text-xs text-hijau-tua/20 mt-4">
            Sumber: Prasasti Bali oleh Dr. Goris (1954) · Tijdschrift Koninklijk Bataviaasch Genootschap (1889) · Wawancara dengan {sejarahData.wawancara.narasumber} ({sejarahData.wawancara.tanggal})
          </p>
        </div>
      </div>
    </section>
  );
}