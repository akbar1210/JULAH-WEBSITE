Portofolio Desa Julah — Setup Awal
Ini baru Step 1: bikin fondasi desain (design system) sama kerangka halamannya dulu. Belum ada database atau admin.

Cara jalanin di laptop
Install Node.js versi 18 ke atas kalau belum ada.

Masuk ke folder ini lewat terminal, terus jalankan:
bash
npm install
npm run dev

bash
npm install
npm run dev
Buka http://localhost:3000 di browser.

Isi project
text
app/
  layout.tsx      -> font sama metadata halaman
  page.tsx        -> nyusun semua section jadi satu halaman
  globals.css     -> reset sama aksesibilitas dasar
components/
  Navbar.tsx        -> navbar sticky, transparan -> solid pas di-scroll
  Hero.tsx          -> hero utama (foto masih PLACEHOLDER — cek komentar di file)
  Footer.tsx        -> footer multi-kolom
  CandiMotif.tsx    -> elemen signature: siluet candi bentar (garis)
tailwind.config.ts  -> semua warna sama font diatur di sini
Warna & font yang dipakai
Nama	Hex	Buat apa
stone	#1B1B17	Background gelap (batu candi vulkanik)
brass	#B08D57	Aksen utama (kuningan pratima/gamelan)
lontar	#EDE6D3	Teks di atas gelap / background terang
sawah	#3F4D3B	Aksen sekunder (hijau sawah)
clay	#9C5B3C	Aksen tersier, dipakai dikit aja
Font judul: Fraunces (italic). Font body: Work Sans.

Yang perlu diganti abis wawancara & foto besok
components/Hero.tsx — ganti div gradient placeholder jadi foto asli ikon desa (pakai <Image> dari next/image). Di file-nya udah ada komentar nandain bagian mana yang perlu diubah.

app/page.tsx — 5 section (Sejarah, Tokoh & Budaya, Galeri, Peta & Lokasi, Kabar Desa) masih teks generik. Ganti pakai konten asli kalau udah siap.

Foto buat galeri sebaiknya dikompres ke WebP dulu sebelum diupload. Bisa pakai squoosh.app — gratis, gak perlu install apa-apa.

Belum masuk di step ini (nyusul)
Login & role admin (Supabase Auth)

Dashboard admin buat desa (upload galeri/berita)

Peta interaktif (Google Maps embed)

Deploy
