'use client'

import * as React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import {
  Github,
  Moon,
  Sun,
  Menu,
  X,
  ArrowUpRight,
  Code2,
  User,
  ClipboardList,
  BookOpen,
  HelpCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavState } from './useNavState'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const MainNav = () => {
  const { theme, setTheme } = useTheme()
  const { isMenuOpen, toggleMenu } = useNavState()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const navItems = [
    { name: 'Home', path: '/', icon: <Code2 size={16} /> },
    { name: 'About', path: '/portofolio/about', icon: <User size={16} /> },
    { name: 'Projects', path: '/portofolio/projects', icon: <ClipboardList size={16} /> },
    { name: 'Roadmap', path: '/portofolio/roadmap', icon: <BookOpen size={16} /> },
    { name: 'Contact', path: '/portofolio/contacts', icon: <HelpCircle size={16} /> }
  ]

  const isDark = theme === 'dark'

  return (
    <div className="w-full sticky top-4 z-50 px-4 py-2 max-w-7xl mx-auto">
      {/* KONTEN UTAMA NAVBAR (FLOATING GLASSMORPHISM) */}
      <div 
        className={`flex items-center justify-between px-6 py-3 w-full gap-4 transition-all duration-300 border backdrop-blur-md rounded-2xl shadow-lg ${
          isDark 
            ? 'bg-zinc-900/70 border-zinc-800/80 shadow-black/20' 
            : 'bg-zinc-50/80 border-zinc-200/60 shadow-zinc-200/50'
        }`}
      >
        {/* KIRI: Logo Utama */}
        <div className="flex justify-start items-center shrink-0">
          <Link href="/" className="block transition-transform hover:scale-102 active:scale-98">
            <img
              src="/logo.png"
              alt="Logo"
              className={`h-6 md:h-7 object-contain transition-all ${isDark ? 'invert brightness-90' : 'brightness-95'}`}
            />
          </Link>
        </div>

        {/* TENGAH: Menu Navigasi untuk Desktop */}
        <div className="hidden lg:flex items-center gap-1.5 bg-zinc-200/30 dark:bg-zinc-800/40 p-1 rounded-xl border border-zinc-200/20 dark:border-zinc-700/10">
          {navItems.map(item => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-xs xl:text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-blue-500 bg-white dark:bg-zinc-900 shadow-sm font-semibold'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* KANAN: Panel Utilitas (Tema & Sosial) */}
        <div className="flex items-center justify-end gap-1.5">
          {/* Desktop Utilities */}
          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-xl transition-all ${
                isDark ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
              onClick={() => window.open('https://github.com/izaazwaskito', '_blank')}
            >
              <Github size={17} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-xl transition-all ${
                isDark ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
              onClick={toggleTheme}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </Button>
          </div>

          {/* Mobile Menu & Theme Toggle Combo */}
          <div className="flex items-center gap-1 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
              onClick={toggleTheme}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={`h-9 w-9 rounded-xl ${
                isDark ? 'text-zinc-400 hover:bg-zinc-800/60' : 'text-zinc-600 hover:bg-zinc-200/50'
              }`}
            >
              {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`absolute top-full left-4 right-4 mt-2 overflow-hidden z-40 border backdrop-blur-xl rounded-2xl shadow-xl ${
              isDark 
                ? 'border-zinc-800/80 bg-zinc-950/90 shadow-black/40' 
                : 'border-zinc-200/80 bg-zinc-50/95 shadow-zinc-200/60'
            }`}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.04 } }
              }}
              className="flex flex-col py-3 p-2 gap-1"
            >
              {navItems.map(item => {
                const isActive = pathname === item.path
                return (
                  <motion.div
                    key={item.path}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <Link
                      href={item.path}
                      onClick={toggleMenu}
                      className={`text-sm px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between group ${
                        isActive
                          ? 'text-blue-500 bg-blue-500/5 dark:bg-blue-500/10 font-semibold'
                          : isDark
                          ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
                          : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`transition-colors ${
                            isActive
                              ? 'text-blue-500'
                              : 'text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300'
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </div>

                      <ArrowUpRight
                        size={14}
                        className={`opacity-0 group-hover:opacity-50 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isActive ? 'opacity-50 text-blue-500' : 'text-zinc-400'
                        }`}
                      />
                    </Link>
                  </motion.div>
                )
              })}

              {/* Mobile Footer Area inside Drawer */}
              <div className="mt-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full h-9 text-xs rounded-xl gap-2 justify-center ${
                    isDark ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                  onClick={() => window.open('https://github.com/izaazwaskito', '_blank')}
                >
                  <Github size={14} /> Tinjau GitHub Profil
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}