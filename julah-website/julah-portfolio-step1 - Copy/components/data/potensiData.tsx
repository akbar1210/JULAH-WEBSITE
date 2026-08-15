import React from 'react';

export interface PotensiItem {
  id: string;
  nama: string;
  slug: string;
  deskripsi: string;
  deskripsiLengkap: string;
  gambar: string;
  kategori: string;
  lokasi: string;
  koordinat?: string;
  linkMaps?: string;
  icon: (className?: string) => React.ReactElement;
}

// Icon functions
const IconPantai = (className: string = "w-6 h-6") => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22L22 22" />
    <path d="M4 18L4 14" />
    <path d="M8 18L8 10" />
    <path d="M12 18L12 6" />
    <path d="M16 18L16 10" />
    <path d="M20 18L20 14" />
  </svg>
);

const IconSumur = (className: string = "w-6 h-6") => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L12 7" />
    <path d="M12 12L12 22" />
    <path d="M19 4L15 8" />
    <path d="M5 20L9 16" />
    <path d="M5 4L9 8" />
    <path d="M19 20L15 16" />
    <path d="M2 12L7 12" />
    <path d="M17 12L22 12" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const IconKuliner = (className: string = "w-6 h-6") => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 12L10 14L16 8" />
    <path d="M8 16L16 8" />
  </svg>
);

const IconTenun = (className: string = "w-6 h-6") => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L12 22" />
    <path d="M2 12L22 12" />
    <path d="M4 4L20 20" />
    <path d="M20 4L4 20" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
  </svg>
);

const IconUkiran = (className: string = "w-6 h-6") => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L8 6L12 10L16 6L12 2Z" />
    <path d="M8 6L4 10L8 14L12 10" />
    <path d="M16 6L20 10L16 14L12 10" />
    <path d="M12 10L8 14L12 18L16 14L12 10Z" />
    <path d="M4 10L8 14" />
    <path d="M20 10L16 14" />
  </svg>
);

const IconPura = (className: string = "w-6 h-6") => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
    <path d="M2 17L12 22L22 17" />
    <path d="M2 12L12 17L22 12" />
    <path d="M12 12L12 22" />
    <path d="M7 9.5L7 14.5" />
    <path d="M17 9.5L17 14.5" />
  </svg>
);

export const potensiData: PotensiItem[] = [
  {
    id: "pantai-julah",
    nama: "Pantai Julah",
    slug: "pantai-julah",
    deskripsi: "Pantai berpasir hitam dengan ombak tenang dan pemandangan matahari terbenam yang memukau. Tempat favorit warga dan wisatawan untuk bersantai.",
    deskripsiLengkap: `Pantai Julah merupakan salah satu destinasi wisata unggulan di Desa Julah dengan hamparan pasir hitam yang khas. Pantai ini memiliki ombak yang relatif tenang sehingga aman untuk berenang dan bermain air. Pemandangan matahari terbenam di Pantai Julah sangat memukau dengan langit yang berubah warna menjadi jingga keemasan. 
    
    Pantai ini juga memiliki nilai historis yang kuat karena menjadi saksi bisu masuknya para pedagang asing ke wilayah Julah pada masa lampau. Hingga kini, Pantai Julah tetap menjadi pusat kegiatan ekonomi masyarakat melalui sektor perikanan dan pariwisata. 
    
    Fasilitas yang tersedia di Pantai Julah antara lain area parkir yang luas, warung makan yang menyajikan hidangan laut segar, dan tempat duduk untuk bersantai menikmati pemandangan. Pantai Julah juga sering digunakan sebagai lokasi pelaksanaan upacara Ngerarung Bikul yang menjadi tradisi unik Desa Julah.`,
    gambar: "/images/pantai-julah.jpg",
    kategori: "Wisata Alam",
    lokasi: "Dusun Julah, Kecamatan Tejakula, Kabupaten Buleleng",
    koordinat: "-8.123456, 115.123456",
    linkMaps: "https://maps.google.com/maps?q=Pantai+Julah+Buleleng",
    icon: IconPantai
  },
  {
    id: "sumur-suci",
    nama: "Wewidangan Sumur Desa Julah",
    slug: "sumur-suci-julah",
    deskripsi: "Komplek sumur kuno yang terdiri dari beberapa jenis sumur dengan fungsi berbeda, mulai dari sumur minum ternak, permandian laki-laki, permandian perempuan, hingga sumur suci untuk upacara adat.",
    deskripsiLengkap: `Wewidangan Sumur Desa Julah merupakan komplek sumur kuno yang terletak di Ponjok Batu dan menjadi salah satu tempat paling dikeramatkan oleh masyarakat Desa Julah. Komplek sumur ini terdiri dari beberapa jenis sumur dengan fungsi yang berbeda-beda, mencerminkan kearifan lokal masyarakat Julah dalam mengelola sumber daya air.

    Jenis-jenis sumur yang terdapat di komplek ini antara lain:

    1. Sumur Minum Ternak
    Sumur ini khusus digunakan untuk kebutuhan minum hewan ternak masyarakat. Airnya dipercaya memiliki kandungan mineral yang baik untuk kesehatan ternak.

    2. Sumur Pemandian Laki-laki
    Sumur yang diperuntukkan bagi para kaum laki-laki untuk mandi dan membersihkan diri. Airnya mengalir dengan jernih dan segar.

    3. Sumur Pemandian Perempuan
    Sumur khusus untuk kaum perempuan yang letaknya terpisah dari sumur laki-laki, menjaga privasi dan kesakralan masing-masing.

    4. Sumur Suci
    Sumur yang paling dikeramatkan dan hanya digunakan untuk kepentingan upacara adat dan kegiatan sakral. Air dari sumur suci ini dipercaya memiliki kekuatan spiritual untuk penyucian atau penglukatan.

    Masyarakat Julah sangat menyucikan dan mengeramatkan wewidangan sumur ini. Air dari sumur suci biasa digunakan sebagai tirta penglukatan agung dalam berbagai upacara keagamaan dan juga dipercaya mampu mengobati berbagai penyakit.

    Secara historis, wewidangan sumur ini telah digunakan sejak zaman kerajaan kuno sebagai tempat penyucian dan pemenuhan kebutuhan air sehari-hari masyarakat. Hingga kini, sumur-sumur ini masih dijaga kelestariannya dan menjadi salah satu tujuan ziarah serta wisata spiritual bagi umat Hindu di Bali.`,
  gambar: "/images/sumur-suci-julah.jpg",
  kategori: "Tempat Suci",
  lokasi: "Tepi Pantai Dusun Kawanan, Desa Julah, Kecamatan Tejakula, Kabupaten Buleleng",
  koordinat: "-8.123457, 115.123457",
  linkMaps: "https://maps.google.com/maps?q=Sumur+Suci+Julah+Buleleng",
  icon: IconSumur
},
  {
    id: "dodol-julah",
    nama: "Dodol Khas Julah",
    slug: "dodol-julah",
    deskripsi: "Dodol dengan tekstur lembut dan rasa manis legit, terbuat dari ketan hitam dan gula aren. Oleh-oleh khas yang wajib dicoba.",
    deskripsiLengkap: `Dodol Khas Julah merupakan salah satu produk kuliner unggulan yang menjadi ciri khas Desa Julah. Dodol ini dibuat dari bahan baku utama ketan hitam dan gula aren yang diproses secara tradisional dengan resep turun temurun. Teksturnya yang lembut dan kenyal dengan rasa manis yang legit membuat dodol ini sangat digemari oleh masyarakat lokal maupun wisatawan.
    
    Proses pembuatan dodol ini masih menggunakan cara tradisional dengan kayu bakar dan kuali besar, sehingga menghasilkan cita rasa yang autentik dan berbeda dari dodol pada umumnya. Warna hitam pekat dari ketan hitam memberikan tampilan yang elegan dan menggugah selera.
    
    Dodol Khas Julah biasanya diproduksi oleh kelompok usaha rumahan di Desa Julah dan telah menjadi salah satu oleh-oleh khas yang wajib dibawa pulang oleh wisatawan yang berkunjung ke daerah ini. Selain rasanya yang lezat, dodol ini juga memiliki nilai ekonomi yang tinggi bagi masyarakat setempat.`,
    gambar: "/images/dodol-julah.jpg",
    kategori: "Kuliner",
    lokasi: "Produksi Rumahan, Desa Julah, Kecamatan Tejakula, Kabupaten Buleleng",
    koordinat: "-8.123458, 115.123458",
    linkMaps: "https://maps.google.com/maps?q=Desa+Julah+Buleleng",
    icon: IconKuliner
  },
  {
    id: "tenun-julah",
    nama: "Kain Tenun Julah",
    slug: "tenun-julah",
    deskripsi: "Tenun tradisional dengan motif khas Bali Aga, menggunakan pewarna alami dari daun dan akar-akaran. Setiap helai memiliki filosofi tersendiri.",
    deskripsiLengkap: `Kain Tenun Julah merupakan warisan budaya tak benda yang hingga kini masih dilestarikan oleh masyarakat Desa Julah. Tenun ini memiliki motif khas Bali Aga yang berbeda dengan tenun dari daerah lain di Bali. Motif yang digunakan terinspirasi dari alam sekitar, seperti motif tanaman, hewan, dan pola geometris yang memiliki makna filosofis mendalam.
    
    Proses pembuatan kain tenun ini masih menggunakan alat tenun tradisional dan pewarna alami yang berasal dari daun, kulit kayu, akar, dan buah-buahan. Pewarnaan alami ini menghasilkan warna-warna yang lembut dan tidak luntur, seperti warna coklat dari kulit kayu, hijau dari daun, dan biru dari buah-buahan tertentu.
    
    Setiap helai kain tenun Julah memiliki cerita dan filosofi tersendiri. Motif tertentu hanya boleh digunakan dalam upacara adat tertentu, sementara motif lainnya bisa digunakan untuk sehari-hari. Kain Tenun Julah tidak hanya berfungsi sebagai pakaian, tetapi juga menjadi simbol identitas dan kebanggaan masyarakat Julah.`,
    gambar: "/images/tenun-julah.jpg",
    kategori: "Kerajinan",
    lokasi: "Sanggar Tenun Julah, Desa Julah, Kecamatan Tejakula, Kabupaten Buleleng",
    koordinat: "-8.123459, 115.123459",
    linkMaps: "https://maps.google.com/maps?q=Sanggar+Tenun+Julah+Buleleng",
    icon: IconTenun
  },
  {
    id: "ukiran-julah",
    nama: "Ukiran Khas Julah",
    slug: "ukiran-julah",
    deskripsi: "Ukiran kayu dengan motif flora dan fauna khas Bali Utara, dikerjakan oleh pengrajin lokal dengan keterampilan turun-temurun.",
    deskripsiLengkap: `Ukiran Khas Julah merupakan salah satu bentuk seni rupa yang berkembang pesat di Desa Julah. Para pengrajin ukiran di Julah memiliki keterampilan yang diwariskan secara turun temurun dari generasi ke generasi. Motif ukiran yang dihasilkan khas Bali Utara dengan ciri khas motif flora dan fauna yang dikemas dalam gaya yang sederhana namun elegan.
    
    Bahan baku utama yang digunakan adalah kayu jati, kayu mahoni, dan kayu cendana yang banyak ditemukan di sekitar wilayah Julah. Proses pembuatan ukiran dilakukan dengan menggunakan peralatan tradisional seperti pahat dan gergaji tangan, sehingga menghasilkan karya seni yang memiliki nilai estetika tinggi.
    
    Ukiran Khas Julah biasanya digunakan sebagai elemen dekoratif pada bangunan tradisional, seperti pura dan rumah adat. Selain itu, ukiran ini juga banyak digunakan sebagai cinderamata atau oleh-oleh khas dari Desa Julah. Setiap ukiran memiliki makna simbolis yang berkaitan dengan kepercayaan dan filosofi masyarakat setempat.`,
    gambar: "/images/ukiran-julah.jpg",
    kategori: "Kerajinan",
    lokasi: "Sanggar Ukir Julah, Desa Julah, Kecamatan Tejakula, Kabupaten Buleleng",
    koordinat: "-8.123460, 115.123460",
    linkMaps: "https://maps.google.com/maps?q=Sanggar+Ukir+Julah+Buleleng",
    icon: IconUkiran
  },
  {
    id: "pura-bale-agung",
    nama: "Pura Bale Agung Julah",
    slug: "pura-bale-agung",
    deskripsi: "Pura utama Desa Julah yang menyimpan 11 lembar prasasti perunggu peninggalan kerajaan kuno. Pusat spiritual masyarakat Julah.",
    deskripsiLengkap: `Pura Bale Agung merupakan pura utama dan pusat spiritual bagi masyarakat Desa Julah. Pura ini terletak di tengah desa dan menjadi tempat pelaksanaan berbagai upacara keagamaan besar, seperti upacara piodalan, upacara Ngerarung Bikul, dan berbagai upacara adat lainnya.
    
    Keistimewaan Pura Bale Agung adalah adanya 11 lembar prasasti perunggu peninggalan kerajaan kuno yang disimpan di dalam pura. Prasasti-prasasti ini merupakan bukti sejarah yang menunjukkan bahwa Desa Julah telah ada sejak ribuan tahun yang lalu dan memiliki hubungan erat dengan kerajaan-kerajaan besar di Nusantara.
    
    Arsitektur Pura Bale Agung sangat khas dengan gaya Bali Aga yang sederhana namun sarat dengan nilai filosofis. Bangunan pura ini terdiri dari beberapa bagian utama, yaitu jaba pura atau halaman luar, jaba tengah, dan jeroan atau halaman dalam tempat suci berada. Hingga kini, Pura Bale Agung tetap terjaga keasriannya dan menjadi destinasi wisata spiritual bagi wisatawan yang berkunjung ke Desa Julah.`,
    gambar: "/images/pura-bale-agung.jpg",
    kategori: "Tempat Suci",
    lokasi: "Desa Julah, Kecamatan Tejakula, Kabupaten Buleleng",
    koordinat: "-8.123461, 115.123461",
    linkMaps: "https://maps.google.com/maps?q=Pura+Bale+Agung+Julah+Buleleng",
    icon: IconPura
  }
];