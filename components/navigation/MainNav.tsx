"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Github, Moon, Sun, Menu, ChevronDown, ChevronUp, X, ArrowUpRight, Code2, User, ClipboardList, BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavState } from "./useNavState";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const MainNav = () => {
  const { theme, setTheme } = useTheme();
  const { isMenuOpen, toggleMenu } = useNavState();
  const pathname = usePathname();
  const [language, setLanguage] = useState("ID");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/portofolio/about" },
    { name: "Projects", path: "/portofolio/projects" },
    { name: "Roadmap", path: "/portofolio/roadmap" },
    { name: "Contact", path: "/portofolio/contacts" },
  ];

  const isDark = theme === "dark";

  return (
    <div className="w-full relative">
      {/* BAR UTAMA NAVBAR */}
      <div className="flex items-center justify-between py-4 w-full gap-4 relative z-30">
        
        {/* 1. KIRI: Menu Links untuk Desktop / Tombol Hamburger untuk Mobile */}
        <div className="flex items-center justify-start flex-1">
          {/* Desktop Links (Hanya muncul di layar laptop/PC ke atas) */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-xs xl:text-sm px-3 py-2 rounded-xl font-medium transition-colors ${
                  pathname === item.path
                    ? "text-blue-500 font-bold bg-blue-500/5"
                    : isDark
                    ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button (Hanya muncul di HP/Tablet) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="lg:hidden text-zinc-600 dark:text-zinc-400 hover:bg-transparent"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* 2. TENGAH: Logo Utama (Selalu Center Seimbang) */}
        <div className="flex justify-center items-center shrink-0">
          <Link href="/" className="block">
            <img
              src="/logo.png"
              alt="Logo"
              className={`h-6 md:h-7 object-contain ${isDark ? "invert" : ""}`}
            />
          </Link>
        </div>

        {/* 3. KANAN: Utilities Panel (Language, Theme, GitHub) */}
        <div className="flex items-center justify-end gap-1 flex-1">
          {/* Mobile Dropdown Triger (Ikon Chevron di HP) */}
          <div className="md:hidden relative">
            <Button variant="ghost" size="icon" onClick={toggleDropdown} className={isDark ? "text-zinc-400" : "text-zinc-600"}>
              {isDropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </Button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className={`absolute right-0 mt-2 w-36 ${
                    isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                  } border rounded-xl shadow-xl z-50 p-1.5 flex flex-col gap-1`}
                >
                  <div className="flex gap-1 w-full">
                    <Button variant="ghost" size="sm" className="w-2/3 text-[11px] h-8 justify-start gap-1 px-1.5" onClick={toggleTheme}>
                      {isDark ? <Sun size={12} /> : <Moon size={12} />} {isDark ? "Light" : "Dark"}
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full text-[11px] h-8 justify-start gap-1.5 px-1.5" onClick={() => window.open("https://github.com/izaazwaskito", "_blank")}>
                    <Github size={12} /> GitHub
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Utilities Panel */}
          <div className="hidden md:flex items-center gap-0.5">
            <Button variant="ghost" size="icon" className={`h-8 w-8 ${isDark ? "text-zinc-400 hover:text-zinc-100" : "text-zinc-600 hover:text-zinc-900"}`} onClick={() => window.open("https://github.com/izaazwaskito", "_blank")}>
              <Github size={16} />
            </Button>
            <Button variant="ghost" size="icon" className={`h-8 w-8 ${isDark ? "text-zinc-400 hover:text-zinc-100" : "text-zinc-600 hover:text-zinc-900"}`} onClick={toggleTheme}>
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE DROWER OVERLAY (Laci Vertikal Mewah Saat Hamburger Di-klik) */}
      {/* 4. MOBILE DRAWER OVERLAY (Versi Premium & Estetik) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} // Efek easing mewah
            className="lg:hidden w-full overflow-hidden relative z-20 border-t border-zinc-100 dark:border-zinc-900/60"
          >
            {/* Menggunakan stagger animation container */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="flex flex-col py-4 pb-6 gap-1.5"
            >
              {[
                { name: "Home", path: "/", icon: <Code2 size={16} /> },
                { name: "About", path: "/portofolio/about", icon: <User size={16} /> },
                { name: "Projects", path: "/portofolio/projects", icon: <ClipboardList size={16} /> },
                { name: "Roadmap", path: "/portofolio/roadmap", icon: <BookOpen size={16} /> },
                { name: "Contact", path: "/portofolio/contacts", icon: <HelpCircle size={16} /> },
              ].map((item) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <Link
                      href={item.path}
                      onClick={toggleMenu} // Otomatis tutup laci setelah menu di-klik
                      className={`text-sm mx-1 px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between group ${
                        isActive
                          ? "text-blue-500 bg-blue-500/5 dark:bg-blue-500/10 font-semibold"
                          : isDark
                          ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60"
                          : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80"
                      }`}
                    >
                      {/* Sisi Kiri: Icon + Nama Menu */}
                      <div className="flex items-center gap-3">
                        <span className={`transition-colors ${isActive ? "text-blue-500" : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"}`}>
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </div>

                      {/* Sisi Kanan: Tanda panah mikro penunjuk interaksi */}
                      <ArrowUpRight size={14} className={`opacity-0 group-hover:opacity-40 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isActive ? "opacity-40 text-blue-500" : "text-zinc-400"}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};