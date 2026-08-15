"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  BookOpen, 
  LogOut,
  Menu,
  X
} from "lucide-react";

const MENU_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/galeri", label: "Galeri", icon: ImageIcon },
  { href: "/admin/buku-tamu", label: "Buku Tamu", icon: BookOpen },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("admin-auth");
    if (!isAuth && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  };

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const SidebarContent = () => (
    <>
      <div className="p-4 border-b border-putih/10 flex items-center gap-3">
        <Image
          src="/julahlogo.png"
          alt="Logo"
          width={36}
          height={36}
          className="rounded-full"
        />
        {sidebarOpen && (
          <span className="font-display text-lg">Admin Julah</span>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-body text-sm ${
                isActive
                  ? "bg-emas/20 text-emas"
                  : "hover:bg-putih/10 text-putih/70 hover:text-putih"
              }`}
            >
              <Icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-putih/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-putih/10 transition-colors font-body text-sm text-red-400 w-full"
        >
          <LogOut className="w-5 h-5" />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-hijau-muda">
      {}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-hijau-tua text-putih p-2 rounded-lg"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-hijau-tua text-putih transition-all duration-300 fixed h-full z-20 hidden md:flex flex-col`}
      >
        <SidebarContent />
      </aside>

      {}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="absolute inset-0 bg-hijau-tua/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-72 h-full bg-hijau-tua text-putih flex flex-col">
            <SidebarContent />
          </aside>
        </div>
      )}

      <main className={`${sidebarOpen ? "ml-64" : "ml-20"} flex-1 transition-all duration-300 hidden md:block`}>
        <div className="p-6 md:p-10">{children}</div>
      </main>

      <main className="flex-1 md:hidden p-4 pt-16">
        {children}
      </main>
    </div>
  );
}