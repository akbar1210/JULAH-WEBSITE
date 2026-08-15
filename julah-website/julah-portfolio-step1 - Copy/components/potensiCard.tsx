"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface PotensiCardProps {
  id: string;
  nama: string;
  deskripsi: string;
  gambar: string;
  kategori: string;
  lokasi: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function PotensiCard({
  id,
  nama,
  deskripsi,
  gambar,
  kategori,
  lokasi,
  icon: Icon
}: PotensiCardProps) {
  return (
    <Link
      href={`/potensi/${id}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-52 w-full overflow-hidden bg-stone/10">
        <Image
          src={gambar}
          alt={nama}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone/60 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="bg-stone/80 backdrop-blur-sm rounded-full p-1.5">
            <Icon className="w-5 h-5 text-lontar" />
          </div>
          <span className="bg-brass/90 text-stone text-xs px-3 py-1 rounded-full font-body">
            {kategori}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl text-stone group-hover:text-brass-dark transition-colors">
          {nama}
        </h3>
        <p className="font-body text-sm text-stone/60 mt-1 line-clamp-2">
          {deskripsi}
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-stone/40">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22c-2 0-8-4-8-9s4-9 8-9 8 4 8 9-6 9-8 9z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{lokasi}</span>
        </div>
      </div>
    </Link>
  );
}