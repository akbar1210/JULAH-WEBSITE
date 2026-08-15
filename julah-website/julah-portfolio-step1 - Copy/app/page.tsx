import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SejarahJulah from "@/components/SejarahJulah";
import BudayaSection from "@/components/BudayaSection";
import PetaSection from "@/components/PetaSection";
import Footer from "@/components/Footer";
import CandiMotif from "@/components/CandiMotif";

function PlaceholderSection({
  id,
  eyebrow,
  title,
  note,
  dark = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  note: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 py-24 md:px-10 ${
        dark ? "bg-sawah-deep text-putih" : "bg-hijau-muda text-hijau-tua"
      }`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <span
          className={`font-body text-xs uppercase tracking-[0.3em] ${
            dark ? "text-emas-muda" : "text-emas-tua"
          }`}
        >
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-4xl italic md:text-5xl">{title}</h2>
        <p
          className={`mx-auto mt-5 max-w-xl font-body text-sm ${
            dark ? "text-putih/70" : "text-hijau-tua/60"
          }`}
        >
          {note}
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SejarahJulah />
        <BudayaSection />
        
        <PlaceholderSection
          id="galeri"
          eyebrow="Diambil langsung dari lapangan"
          title="Galeri Desa"
          note="Grid foto ikon desa, kegiatan warga, dan panorama alam Julah — dapat diperbarui kapan saja oleh admin desa."
        />
        
        <PetaSection />
        
        <div className="flex justify-center bg-hijau-muda py-4">
          <CandiMotif className="h-8 w-32 text-emas-tua opacity-60" />
        </div>
      </main>
      <Footer />
    </>
  );
}