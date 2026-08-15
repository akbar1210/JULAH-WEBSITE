// components/Footer.tsx
import CandiMotif from "./CandiMotif";

export default function Footer() {
  return (
    <footer className="bg-hijau-tua text-putih">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-10">
        <CandiMotif className="mx-auto mb-12 h-10 w-40 text-emas opacity-70" />

        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-display text-xl italic text-putih">Desa Julah</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-putih/70">
              Portofolio promosi Desa Julah — sejarah, budaya, dan potensi
              desa Bali Aga di Buleleng, Bali.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-emas">
              Jelajahi
            </h4>
            <ul className="mt-4 space-y-2 font-body text-sm text-putih/70">
              <li><a href="#sejarah" className="hover:text-emas">Sejarah</a></li>
              <li><a href="#budaya" className="hover:text-emas">Tradisi & Budaya</a></li>
              <li><a href="#galeri" className="hover:text-emas">Galeri</a></li>
              <li><a href="#peta" className="hover:text-emas">Peta & Lokasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-emas">
              Tautan Resmi
            </h4>
            <ul className="mt-4 space-y-2 font-body text-sm text-putih/70">
              <li><a href="https://julah-buleleng.desa.id" className="hover:text-emas">Website Pemerintahan Desa</a></li>
              <li><a href="#peta" className="hover:text-emas">Peta Lokasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-emas">
              Kontak & Sosial
            </h4>
            <div className="mt-4 flex gap-4">
              {["Instagram", "Facebook", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-putih/30 text-xs text-putih/70 hover:border-emas hover:text-emas"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-putih/15 pt-6 font-body text-xs text-putih/50 md:flex-row">
          <span>© {new Date().getFullYear()} Desa Julah. Proyek KKN — dikelola oleh perangkat desa.</span>
          <span>Dibangun untuk promosi & pelestarian budaya Julah.</span>
        </div>
      </div>
    </footer>
  );
}