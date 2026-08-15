"use client";

import { useState } from "react";
import { Download, User, Building2, Target, Calendar, Search } from "lucide-react";

const dummyTamu = [
  {
    id: "1",
    nama: "I Wayan Sudarma",
    instansi: "Dinas Pariwisata Buleleng",
    tujuan: "Studi wisata budaya",
    tanggal: "14 Agustus 2026",
  },
  {
    id: "2",
    nama: "Ni Ketut Sari",
    instansi: "Universitas Udayana",
    tujuan: "Penelitian sejarah",
    tanggal: "13 Agustus 2026",
  },
];

export default function AdminBukuTamu() {
  const [tamu, setTamu] = useState(dummyTamu);
  const [search, setSearch] = useState("");

  const filteredTamu = tamu.filter((t) =>
    t.nama.toLowerCase().includes(search.toLowerCase()) ||
    t.instansi.toLowerCase().includes(search.toLowerCase()) ||
    t.tujuan.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl italic text-hijau-tua">Buku Tamu</h1>
          <p className="font-body text-sm text-hijau-tua/50">
            Daftar kunjungan ke Desa Julah ({tamu.length} tamu)
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hijau-tua/30" />
            <input
              type="text"
              placeholder="Cari tamu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-hijau-tua/20 bg-putih font-body text-sm text-hijau-tua focus:outline-none focus:ring-2 focus:ring-emas focus:border-transparent transition-all"
            />
          </div>
          <button className="bg-emas text-hijau-tua px-6 py-2 rounded-lg font-body text-sm hover:bg-emas-muda transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      <div className="bg-putih rounded-xl shadow-sm border border-hijau-tua/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-hijau-muda/50">
              <tr>
                <th className="text-left px-6 py-3 font-body text-xs uppercase tracking-wider text-hijau-tua/50">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    Nama
                  </div>
                </th>
                <th className="text-left px-6 py-3 font-body text-xs uppercase tracking-wider text-hijau-tua/50">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3 h-3" />
                    Instansi
                  </div>
                </th>
                <th className="text-left px-6 py-3 font-body text-xs uppercase tracking-wider text-hijau-tua/50">
                  <div className="flex items-center gap-2">
                    <Target className="w-3 h-3" />
                    Tujuan
                  </div>
                </th>
                <th className="text-left px-6 py-3 font-body text-xs uppercase tracking-wider text-hijau-tua/50">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    Tanggal
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hijau-tua/5">
              {filteredTamu.map((t) => (
                <tr key={t.id} className="hover:bg-hijau-muda/20 transition-colors">
                  <td className="px-6 py-4 font-body text-sm text-hijau-tua">{t.nama}</td>
                  <td className="px-6 py-4 font-body text-sm text-hijau-tua/60">{t.instansi}</td>
                  <td className="px-6 py-4 font-body text-sm text-hijau-tua/60">{t.tujuan}</td>
                  <td className="px-6 py-4 font-body text-sm text-hijau-tua/40">{t.tanggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTamu.length === 0 && (
          <div className="text-center py-12 text-hijau-tua/40">
            <User className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="font-body">Tidak ada data tamu</p>
          </div>
        )}
      </div>
    </div>
  );
}