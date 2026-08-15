"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Sementara pake password statis (nanti diganti dengan auth proper)
    if (password === "admin123") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin");
    } else {
      setError("Password salah");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-hijau-muda px-4">
      <div className="max-w-md w-full bg-putih rounded-2xl shadow-xl p-8 border border-hijau-tua/5">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/julahlogo.png"
              alt="Logo Desa Julah"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <h1 className="font-display text-2xl italic text-hijau-tua">
            Admin Julah
          </h1>
          <p className="font-body text-sm text-hijau-tua/50 mt-1">
            Masuk untuk mengelola konten desa
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-body text-sm text-hijau-tua/70 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-hijau-tua/20 bg-hijau-muda/30 font-body text-hijau-tua focus:outline-none focus:ring-2 focus:ring-emas focus:border-transparent transition-all"
              placeholder="Masukkan password admin"
              required
            />
          </div>

          {error && (
            <p className="font-body text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-emas text-hijau-tua font-body text-sm uppercase tracking-wider hover:bg-emas-muda transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="text-center font-body text-xs text-hijau-tua/30 mt-6">
          Akses terbatas untuk pengelola desa
        </p>
      </div>
    </div>
  );
}