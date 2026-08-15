import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-worksans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desa Julah — Bali Aga, Buleleng",
  description:
    "Portofolio Desa Julah, salah satu desa Bali Aga tertua di Buleleng, Bali. Sejarah, tokoh adat, galeri, dan potensi desa.",
  icons: {
    icon: [
      { url: "/julahlogo.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: "/julahlogo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="bg-hijau-muda font-body text-hijau-tua antialiased">
        {children}
      </body>
    </html>
  );
}