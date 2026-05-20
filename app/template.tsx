'use client'

import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = React.useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      {isNavigating ? (
        <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col relative animate-in fade-in duration-300">
          
          <div className='w-full border-b border-zinc-200 dark:border-zinc-800 border-dashed relative z-20 h-[65px] flex items-center shrink-0'>
            <div className='container mx-auto px-4 max-w-5xl relative h-full w-full'>
              <div className='absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
              <div className='absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
            </div>
          </div>

          {/* AREA KONTEN LOADING */}
          <div className="container mx-auto px-4 max-w-5xl border-x border-zinc-200 dark:border-zinc-800 border-dashed min-h-[calc(100vh-140px)] flex flex-col justify-center items-center w-full relative z-10 flex-grow">
            
            <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700 ease-out">
              
              {/* AREA BOX 3D CUBE */}
              <div className="relative w-16 h-16 [perspective:300px] flex items-center justify-center">
                <div className="relative w-16 h-16 [transform-style:preserve-3d] animate-[spin-3d_8s_linear_infinite]">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-16 h-16 border border-dashed border-zinc-400 dark:border-zinc-700 [backface-visibility:visible] transition-colors duration-300 opacity-80"
                      style={{
                        transform: [
                          "rotateY(0deg) translateZ(32px)",
                          "rotateY(90deg) translateZ(32px)",
                          "rotateY(180deg) translateZ(32px)",
                          "rotateY(-90deg) translateZ(32px)",
                          "rotateX(90deg) translateZ(32px)",
                          "rotateX(-90deg) translateZ(32px)"
                        ][i]
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* TEKS LOADING MINIMALIS SINGLE-LINE (Dipersempit ke mt-3 biar presisi di bawah kubus) */}
              <div className="text-center mt-3 animate-in fade-in slide-in-from-top-1 duration-1000 ease-out">
                <p className="text-[10px] font-mono text-zinc-400/80 dark:text-zinc-600 animate-pulse tracking-wider">
                  processing...
                </p>
              </div>

            </div>
            
          </div>

          <div className='w-full border-t border-zinc-200 dark:border-zinc-800 border-dashed relative z-20 mt-auto shrink-0'>
            <div className='container mx-auto px-4 max-w-5xl relative py-6 text-center text-xs text-zinc-400'>
              <p>Made with ❤️ by <span className='font-semibold text-zinc-600 dark:text-zinc-300'>Izaaz</span></p>
              <div className='absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
              <div className='absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
            </div>
          </div>

        </div>
      ) : (
        children
      )}
    </>
  );
}