"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Upload, 
  X, 
  Image as ImageIcon, 
  Video, 
  FileText,
  ArrowLeft
} from "lucide-react";

export default function AdminTambahGaleri() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    judul: "",
    deskripsi: "",
    type: "foto",
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selected);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    router.push("/admin/galeri");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 font-body text-sm text-hijau-tua/50 hover:text-hijau-tua transition-colors mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </button>
        <h1 className="font-display text-3xl italic text-hijau-tua">Tambah Postingan</h1>
        <p className="font-body text-sm text-hijau-tua/50">
          Upload foto atau video dengan caption
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-putih rounded-2xl p-6 md:p-8 shadow-sm border border-hijau-tua/5">
        <div
          className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
            preview ? "border-emas bg-emas/5" : "border-hijau-tua/20 hover:border-emas/50"
          }`}
          onDragOver={(e) => e.preventDefault()}
        >
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="max-h-[300px] mx-auto rounded-lg object-contain"
              />
              <button
                type="button"
                onClick={() => {
                  setPreview(null);
                  setFile(null);
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-putih rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div>
              <Upload className="w-12 h-12 mx-auto text-hijau-tua/30 mb-3" />
              <p className="font-body text-hijau-tua/60">Drag & drop atau klik untuk upload</p>
              <p className="font-body text-xs text-hijau-tua/30 mt-1">
                JPG, PNG, MP4 (maks 20MB)
              </p>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          )}
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block font-body text-sm text-hijau-tua/70 mb-1">
              Judul
            </label>
            <input
              type="text"
              value={formData.judul}
              onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-hijau-tua/20 bg-hijau-muda/30 font-body text-hijau-tua focus:outline-none focus:ring-2 focus:ring-emas focus:border-transparent transition-all"
              placeholder="Masukkan judul postingan"
            />
          </div>

          <div>
            <label className="block font-body text-sm text-hijau-tua/70 mb-1">
              Deskripsi / Caption
            </label>
            <textarea
              value={formData.deskripsi}
              onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-hijau-tua/20 bg-hijau-muda/30 font-body text-hijau-tua focus:outline-none focus:ring-2 focus:ring-emas focus:border-transparent transition-all min-h-[120px]"
              placeholder="Tulis caption untuk postingan ini..."
            />
          </div>

          <div>
            <label className="block font-body text-sm text-hijau-tua/70 mb-1">
              Tipe
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 font-body text-sm text-hijau-tua/70 cursor-pointer">
                <input
                  type="radio"
                  value="foto"
                  checked={formData.type === "foto"}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="accent-emas"
                />
                <ImageIcon className="w-4 h-4" />
                Foto
              </label>
              <label className="flex items-center gap-2 font-body text-sm text-hijau-tua/70 cursor-pointer">
                <input
                  type="radio"
                  value="video"
                  checked={formData.type === "video"}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="accent-emas"
                />
                <Video className="w-4 h-4" />
                Video
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-8 pt-6 border-t border-hijau-tua/10">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 rounded-lg border border-hijau-tua/20 font-body text-sm text-hijau-tua/60 hover:bg-hijau-muda transition-colors"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading || !file}
            className="flex-1 bg-emas text-hijau-tua px-6 py-2 rounded-lg font-body text-sm hover:bg-emas-muda transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              "Mengupload..."
            ) : (
              <>
                <Upload className="w-4 h-4" />
                Upload Postingan
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}