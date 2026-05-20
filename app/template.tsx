'use client'

import * as React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useTheme } from 'next-themes'
import { MainNav } from '@/components/navigation/MainNav' // 1. Import MainNav asli agar tingginya sinkron

function NavigationTracker ({ onChange }: { onChange: () => void }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  React.useEffect(() => {
    onChange()
  }, [pathname, searchParams, onChange])

  return null
}

export default function Template ({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = React.useState(false)
  const { theme } = useTheme()

  const handleNavigationChange = React.useCallback(() => {
    setIsNavigating(true)
    const timer = setTimeout(() => {
      setIsNavigating(false)
    }, 1250)

    return () => clearTimeout(timer)
  }, [])

  const isDark = theme === 'dark'

  return (
    <>
      <React.Suspense fallback={null}>
        <NavigationTracker onChange={handleNavigationChange} />
      </React.Suspense>

      {isNavigating ? (
        <div
          className={`${
            isDark ? 'bg-zinc-950 text-zinc-50' : 'bg-zinc-50 text-zinc-900'
          } w-full font-inter min-h-screen transition-colors duration-300 relative flex flex-col overflow-x-hidden`}
        >
          {/* ================= BACKGROUND DECORATION LOADING SCREEN ================= */}
          {/* Menggunakan spesifikasi, tinggi, dan maskImage yang sama persis dengan halaman Home */}
          <div
            className='absolute top-0 left-0 right-0 h-[750px] z-0 opacity-[0.4] dark:opacity-[1] pointer-events-none mix-blend-normal'
            style={{
              backgroundImage: isDark
                ? // Opsi A: Menggunakan warna putih transparan agar kontras di latar belakang gelap
                  `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`
                : // Opsi B: Kalau tetap mau pakai zinc, naikkan opacity-nya (misal: 0.4) dan lepas dark:opacity di className
                  // ? `linear-gradient(to right, rgba(63, 63, 70, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(63, 63, 70, 0.4) 1px, transparent 1px)`
                  `linear-gradient(to right, rgba(228, 228, 231, 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(228, 228, 231, 0.7) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              maskImage:
                'radial-gradient(circle at 50% 30%, black 60%, transparent 95%)',
              WebkitMaskImage:
                'radial-gradient(circle at 50% 30%, black 60%, transparent 95%)'
            }}
          />
          {/* ==================================================================================== */}

          {/* NAVBAR LAYOUT UTK LOADING (Menggunakan MainNav asli agar tingginya presisi) */}
          <div className='w-full border-b border-zinc-200 dark:border-zinc-800 border-dashed relative z-20 backdrop-blur-sm bg-zinc-50/50 dark:bg-zinc-950/50'>
            <div className='container mx-auto px-4 max-w-5xl relative'>
              <MainNav /> {/* Menggantikan kontainer kosong h-[65px] */}
              <div className='absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
              <div className='absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
            </div>
          </div>

          {/* AREA KONTEN LOADING */}
          <div className='container mx-auto px-4 max-w-5xl border-x border-zinc-200 dark:border-zinc-800 border-dashed min-h-[calc(100vh-140px)] flex flex-col justify-center items-center w-full relative z-10 flex-grow bg-transparent pb-20'>
            <div className='flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700 ease-out'>
              {/* AREA BOX 3D CUBE */}
              <div className='relative w-16 h-16 [perspective:300px] flex items-center justify-center'>
                <div className='relative w-16 h-16 [transform-style:preserve-3d] animate-[spin-3d_8s_linear_infinite]'>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className='absolute w-16 h-16 border border-dashed border-zinc-400 dark:border-zinc-700 [backface-visibility:visible] transition-colors duration-300 opacity-80'
                      style={{
                        transform: [
                          'rotateY(0deg) translateZ(32px)',
                          'rotateY(90deg) translateZ(32px)',
                          'rotateY(180deg) translateZ(32px)',
                          'rotateY(-90deg) translateZ(32px)',
                          'rotateX(90deg) translateZ(32px)',
                          'rotateX(-90deg) translateZ(32px)'
                        ][i]
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* TEKS LOADING MINIMALIS SINGLE-LINE */}
              <div className='text-center mt-3 animate-in fade-in slide-in-from-top-1 duration-1000 ease-out'>
                <p className='text-[10px] font-mono text-zinc-400/80 dark:text-zinc-600 animate-pulse tracking-wider'>
                  processing...
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER LAYOUT UTK LOADING */}
          <div className='w-full border-t border-zinc-200 dark:border-zinc-800 border-dashed relative z-20 mt-auto shrink-0 backdrop-blur-sm bg-zinc-50/50 dark:bg-zinc-950/50'>
            <div className='container mx-auto px-4 max-w-5xl relative py-6 text-center text-xs text-zinc-400'>
              <p>
                Made with ❤️ by{' '}
                <span className='font-semibold text-zinc-600 dark:text-zinc-300'>
                  Izaaz
                </span>
              </p>
              <div className='absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
              <div className='absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  )
}
