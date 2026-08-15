import { notFound } from "next/navigation";
import Link from "next/link";
import { potensiData } from "@/components/data/potensiData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CandiMotif from "@/components/CandiMotif";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return potensiData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PotensiDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const potensi = potensiData.find((item) => item.slug === slug);

  if (!potensi) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-hijau-muda min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-12">
          <Link
            href="/#peta"
            className="inline-flex items-center gap-2 font-body text-sm text-hijau-tua/60 hover:text-emas transition-colors mb-8 group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Kembali ke Peta & Potensi
          </Link>

          <div className="bg-putih rounded-2xl shadow-xl overflow-hidden border border-hijau-tua/5">
            <div className="relative w-full h-[300px] md:h-[400px] bg-hijau-muda">
              <img
                src={potensi.gambar}
                alt={potensi.nama}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hijau-tua/60 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="bg-emas/90 text-hijau-tua text-xs px-4 py-2 rounded-full font-body">
                  {potensi.kategori}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="font-display text-3xl md:text-4xl italic text-hijau-tua mb-4">
                {potensi.nama}
              </h1>

              <div className="flex items-center gap-2 text-sm text-hijau-tua/50 mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c-2 0-8-4-8-9s4-9 8-9 8 4 8 9-6 9-8 9z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{potensi.lokasi}</span>
              </div>

              <div>
                <p className="font-body text-hijau-tua/80 leading-relaxed whitespace-pre-line text-base md:text-lg">
                  {potensi.deskripsiLengkap}
                </p>
              </div>

              {potensi.linkMaps && (
                <div className="mt-8 pt-8 border-t border-hijau-tua/10">
                  <a
                    href={potensi.linkMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emas text-hijau-tua px-6 py-3 rounded-lg font-body text-sm hover:bg-emas-muda transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22c-2 0-8-4-8-9s4-9 8-9 8 4 8 9-6 9-8 9z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Buka di Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Potensi Lainnya - Card seperti di halaman utama */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <CandiMotif className="h-6 w-24 text-emas-tua opacity-40" />
              <h2 className="font-display text-2xl italic text-hijau-tua">
                Potensi Lainnya
              </h2>
              <CandiMotif className="h-6 w-24 text-emas-tua opacity-40 scale-x-[-1]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {potensiData
                .filter((item) => item.id !== potensi.id)
                .slice(0, 3)
                .map((item) => {
                  const cardVariants = [
                    "border-l-4 border-emas",
                    "border-l-4 border-sawah",
                    "border-l-4 border-tanah",
                  ];
                  const index = potensiData.indexOf(item) % 3;
                  
                  return (
                    <Link
                      key={item.id}
                      href={`/potensi/${item.slug}`}
                      className={`${cardVariants[index]} group block overflow-hidden rounded-xl bg-putih shadow-md hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-hijau-muda">
                        <img
                          src={item.gambar}
                          alt={item.nama}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-hijau-tua/60 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          <span className="bg-emas/90 text-hijau-tua text-xs px-3 py-1 rounded-full font-body">
                            {item.kategori}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="font-display text-lg text-hijau-tua group-hover:text-emas-tua transition-colors">
                          {item.nama}
                        </h3>
                        <p className="font-body text-sm text-hijau-tua/60 mt-1 line-clamp-2">
                          {item.deskripsi}
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-hijau-muda py-4">
          <CandiMotif className="h-8 w-32 text-emas-tua opacity-60" />
        </div>
      </main>
      <Footer />
    </>
  );
}