"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { budayaData } from "./data/budayaData";

export default function BudayaSection() {
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
      id="budaya"
      ref={sectionRef}
      className="scroll-mt-20 bg-sawah-deep text-putih py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl">
        {}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-body text-xs uppercase tracking-[0.4em] text-emas-muda/70">
            Warisan Budaya
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl italic text-putih leading-[1.1]">
            {budayaData.judul}
          </h1>
          <div className="w-12 h-[2px] bg-emas/50 mx-auto mt-4" />
          <p className="mt-4 max-w-2xl mx-auto font-body text-putih/50 text-base md:text-lg leading-relaxed">
            {budayaData.subJudul}
          </p>
        </div>

        {}
        <div
          ref={contentRef}
          className={`space-y-14 transition-all duration-700 delay-200 ${
            contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {}
          <div>
            <h2 className="font-display text-2xl md:text-3xl italic text-emas-muda mb-4">
              {budayaData.sejarahSingkat.judul}
            </h2>
            <p className="font-body text-putih/70 leading-[2] text-base md:text-lg whitespace-pre-line">
              {budayaData.sejarahSingkat.isi}
            </p>
          </div>

          {}
          <div>
            <h2 className="font-display text-2xl md:text-3xl italic text-emas-muda mb-4">
              {budayaData.upacaraMalinian.judul}
            </h2>
            <p className="font-body text-putih/70 leading-[2] text-base md:text-lg mb-6">
              {budayaData.upacaraMalinian.intro}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {budayaData.upacaraMalinian.tahapan.map((tahap, index) => (
                <div
                  key={index}
                  className="bg-putih/5 rounded-xl p-5 border border-putih/10 hover:border-emas/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-emas/60 font-display text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 h-[1px] bg-putih/10" />
                  </div>
                  <h3 className="font-display text-lg text-emas-muda">
                    {tahap.nama}
                  </h3>
                  <p className="font-body text-sm text-putih/50 mt-1">
                    {tahap.keterangan}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-body text-putih/50 italic text-sm leading-relaxed border-l-2 border-emas/30 pl-4">
              {budayaData.upacaraMalinian.catatan}
            </p>
          </div>

          {}
          <div>
            <h2 className="font-display text-2xl md:text-3xl italic text-emas-muda mb-6">
              {budayaData.prosesiMalianin.judul}
            </h2>

            <div className="space-y-4">
              {budayaData.prosesiMalianin.empatHari.map((hari, index) => (
                <div
                  key={index}
                  className="bg-putih/5 rounded-xl p-5 border border-putih/10 hover:border-emas/30 transition-all duration-300"
                >
                  <h3 className="font-display text-lg text-emas-muda">
                    {hari.hari}
                  </h3>
                  <p className="font-body text-sm text-putih/60 leading-relaxed mt-1">
                    {hari.kegiatan}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {}
          <div>
            <h2 className="font-display text-2xl md:text-3xl italic text-emas-muda mb-4">
              {budayaData.filosofi.judul}
            </h2>
            <div className="relative">
              <span className="absolute -left-2 -top-2 text-6xl text-emas/10 font-display">"</span>
              <p className="font-body text-putih/70 leading-[2] text-base md:text-lg pl-4 md:pl-8 whitespace-pre-line">
                {budayaData.filosofi.isi}
              </p>
            </div>
          </div>

          {}
          <div>
            <h2 className="font-display text-2xl md:text-3xl italic text-emas-muda mb-6">
              {budayaData.nilaiBudaya.judul}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {budayaData.nilaiBudaya.nilai.map((item, index) => (
                <div
                  key={index}
                  className="bg-putih/5 rounded-xl p-5 border border-putih/10 hover:border-emas/30 transition-all duration-300"
                >
                  <h3 className="font-display text-lg text-emas-muda">
                    {item.nama}
                  </h3>
                  <p className="font-body text-sm text-putih/50 mt-1">
                    {item.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="pt-4 border-t border-putih/10">
            <p className="font-body text-putih/40 leading-relaxed text-sm italic">
              {budayaData.penutup}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}