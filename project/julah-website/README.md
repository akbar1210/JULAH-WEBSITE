# Portofolio Desa Julah — Setup Awal

Ini adalah **Step 1** dari perencanaan: fondasi desain (design system) + kerangka
halaman. Belum ada database/admin — itu step berikutnya.

## Cara menjalankan di laptop kamu

1. Install [Node.js](https://nodejs.org) versi 18 ke atas (kalau belum ada).
2. Buka folder ini di terminal, lalu jalankan:
   ```bash
   npm install
   npm run dev
   ```
3. Buka `http://localhost:3000` di browser.

## Struktur project

```
app/
  layout.tsx      -> font, metadata halaman
  page.tsx         -> merangkai semua section jadi 1 halaman
  globals.css      -> reset & aksesibilitas dasar
components/
  Navbar.tsx        -> navbar sticky, transparan -> solid saat scroll
  Hero.tsx          -> hero utama (PLACEHOLDER foto — lihat komentar di file)
  Footer.tsx        -> footer multi-kolom
  CandiMotif.tsx     -> elemen signature: siluet candi bentar (garis)
tailwind.config.ts   -> semua warna & font didefinisikan di sini
```

## Design tokens yang dipakai

| Nama | Hex | Dipakai untuk |
|---|---|---|
| `stone` | `#1B1B17` | Background gelap (batu candi vulkanik) |
| `brass` | `#B08D57` | Aksen utama (kuningan pratima/gamelan) |
| `lontar` | `#EDE6D3` | Teks di atas gelap / background terang |
| `sawah` | `#3F4D3B` | Aksen sekunder (hijau sawah) |
| `clay` | `#9C5B3C` | Aksen tersier, dipakai sangat sedikit |

Font display: **Fraunces** (italic, untuk judul). Font body: **Work Sans**.

## Yang PERLU kamu ganti setelah wawancara & foto besok

1. **`components/Hero.tsx`** — ganti div gradient placeholder dengan foto asli
   ikon desa (pakai `<Image>` dari `next/image`). Komentar di file sudah
   menandai bagian yang perlu diubah.
2. **`app/page.tsx`** — 5 section (`Sejarah`, `Tokoh & Budaya`, `Galeri`,
   `Peta & Lokasi`, `Kabar Desa`) masih placeholder teks generik. Ganti
   dengan konten asli begitu siap.
3. Foto-foto untuk galeri sebaiknya dikompres ke format WebP sebelum
   diupload (bisa pakai [squoosh.app](https://squoosh.app), gratis, tanpa install).

## Belum termasuk di step ini (menyusul)

- Sistem login & role admin (Supabase Auth)
- Dashboard admin untuk desa (upload galeri/berita)
- Peta interaktif (Google Maps embed)
- Deploy ke Vercel + custom domain
