"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera } from "lucide-react";
import { Plus, Trash2, Edit, Video, Calendar } from "lucide-react";

const dummyPosts = [
  {
    id: "1",
    judul: "Suasana Piodalan di Pura Bale Agung",
    gambar: "/images/pura-bale-agung.jpg",
    type: "foto",
    tanggal: "14 Agustus 2026",
  },
  {
    id: "2",
    judul: "Prosesi Upacara Malianin",
    gambar: "/images/dodol-julah.jpg",
    type: "foto",
    tanggal: "12 Agustus 2026",
  },
];

export default function AdminGaleri() {
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl italic text-hijau-tua">Galeri</h1>
          <p className="font-body text-sm text-hijau-tua/50">
            Kelola foto dan video ({posts.length} postingan)
          </p>
        </div>
        <Link
          href="/admin/galeri/tambah"
          className="bg-emas text-hijau-tua px-6 py-2 rounded-lg font-body text-sm hover:bg-emas-muda transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Tambah Postingan
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group relative aspect-square rounded-xl overflow-hidden bg-hijau-muda border border-hijau-tua/5"
          >
            <img
              src={post.gambar}
              alt={post.judul}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hijau-tua/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="w-full">
                <p className="font-body text-xs text-putih line-clamp-2">{post.judul}</p>
                <div className="flex items-center gap-1 text-xs text-putih/50 mt-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.tanggal}</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="bg-emas/80 text-hijau-tua text-xs px-3 py-1 rounded-full hover:bg-emas transition-colors flex items-center gap-1">
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                  <button className="bg-red-500/80 text-putih text-xs px-3 py-1 rounded-full hover:bg-red-500 transition-colors flex items-center gap-1">
                    <Trash2 className="w-3 h-3" />
                    Hapus
                  </button>
                </div>
              </div>
            </div>
            {post.type === "video" && (
              <div className="absolute top-3 right-3 bg-black/60 text-putih text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Video className="w-3 h-3" />
                Video
              </div>
            )}
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16 text-hijau-tua/40">
          <Camera className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="font-body">Belum ada postingan</p>
          <Link
            href="/admin/galeri/tambah"
            className="inline-block mt-4 text-emas hover:text-emas-tua transition-colors font-body text-sm"
          >
            Tambah postingan pertama
          </Link>
        </div>
      )}
    </div>
  );
}