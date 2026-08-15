"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Image as ImageIcon, 
  Video, 
  Users, 
  FileText,
  Plus,
  Camera,
  BookOpen
} from "lucide-react";

interface Stats {
  totalPosts: number;
  totalPhotos: number;
  totalVideos: number;
  totalVisitors: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    totalPhotos: 0,
    totalVideos: 0,
    totalVisitors: 0,
  });

  useEffect(() => {
    setStats({
      totalPosts: 12,
      totalPhotos: 10,
      totalVideos: 2,
      totalVisitors: 156,
    });
  }, []);

  const statCards = [
    { 
      label: "Total Postingan", 
      value: stats.totalPosts, 
      icon: FileText, 
      color: "bg-emas/10 border-emas/20",
      iconColor: "text-emas"
    },
    { 
      label: "Total Foto", 
      value: stats.totalPhotos, 
      icon: ImageIcon, 
      color: "bg-langit/10 border-langit-tua/20",
      iconColor: "text-langit-tua"
    },
    { 
      label: "Total Video", 
      value: stats.totalVideos, 
      icon: Video, 
      color: "bg-sawah/10 border-sawah/20",
      iconColor: "text-sawah"
    },
    { 
      label: "Total Pengunjung", 
      value: stats.totalVisitors, 
      icon: Users, 
      color: "bg-tanah/10 border-tanah/20",
      iconColor: "text-tanah"
    },
  ];

  const quickActions = [
    {
      href: "/admin/galeri/tambah",
      icon: Camera,
      label: "Upload Foto/Video",
      desc: "Tambahkan konten baru ke galeri"
    },
    {
      href: "/admin/buku-tamu",
      icon: BookOpen,
      label: "Buku Tamu",
      desc: "Lihat daftar kunjungan"
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl italic text-hijau-tua">Dashboard</h1>
          <p className="font-body text-sm text-hijau-tua/50">Kelola konten Desa Julah</p>
        </div>
        <Link
          href="/admin/galeri/tambah"
          className="bg-emas text-hijau-tua px-6 py-2 rounded-lg font-body text-sm hover:bg-emas-muda transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Tambah Postingan
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`${stat.color} border rounded-xl p-5 backdrop-blur-sm`}
            >
              <Icon className={`w-6 h-6 ${stat.iconColor} mb-2`} />
              <p className="font-display text-2xl text-hijau-tua">{stat.value}</p>
              <p className="font-body text-xs text-hijau-tua/50">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.href}
              href={action.href}
              className="bg-putih rounded-xl p-6 shadow-sm border border-hijau-tua/5 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emas/10 flex items-center justify-center group-hover:bg-emas/20 transition-colors">
                  <Icon className="w-6 h-6 text-emas" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-hijau-tua group-hover:text-emas-tua transition-colors">
                    {action.label}
                  </h3>
                  <p className="font-body text-sm text-hijau-tua/50">{action.desc}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}