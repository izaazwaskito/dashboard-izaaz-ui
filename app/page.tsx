'use client'

import * as React from 'react'
import { Code, Search, TestTube2, ArrowUpRight, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { MainNav } from '@/components/navigation/MainNav'
import VerifyBadge from '@/components/ui/verifybadge'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  return (
    <div
      className={`${
        isDark ? 'bg-zinc-950 text-zinc-50' : 'bg-zinc-50 text-zinc-900'
      } w-full font-inter min-h-screen transition-colors duration-300 relative flex flex-col`}
    >
      <Head>
        <title>Izaaz Waskito | Home</title>
      </Head>

      {/* 1. NAVBAR SECTION (Tetap Terkunci & Sinkron) */}
      <div className='w-full border-b border-zinc-200 dark:border-zinc-800 border-dashed relative z-20'>
        <div className='container mx-auto px-4 max-w-5xl relative'>
          <MainNav />
          <div className='absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
        </div>
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className='container mx-auto px-4 max-w-5xl border-x border-zinc-200 dark:border-zinc-800 border-dashed min-h-[calc(100vh-140px)] pb-20 relative z-10 flex-grow'>
        <motion.div
          className='pt-16 space-y-12'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          {/* HERO HEADER SECTION */}
          <motion.div
            className='space-y-6 text-left max-w-3xl'
            variants={itemVariants}
          >
            {/* Active Status Badge */}
            <div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20 bg-blue-500/5 text-gray-500'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
              </span>
              Actively Automating at Bank BNI
            </div>

            <div className='space-y-4'>
              <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight leading-none flex flex-wrap items-center gap-x-3 gap-y-2'>
                <span>Hello, I&apos;m Izaaz</span>
                <span className='inline-flex items-center'>
                  <VerifyBadge />
                </span>
              </h1>
              <p className='text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal'>
                An engineer focused on bridging the gap between{' '}
                <strong>QA Automation infrastructure</strong> and modern{' '}
                <strong>Frontend Development</strong>. Specialized in
                structuring resilient test automation environments for
                scale-critical banking platforms.
              </p>
            </div>
          </motion.div>

          {/* BENTO BOX LAYOUT GRID */}
          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-4 text-left'
            variants={itemVariants}
          >
            {/* Core Card: QA Automation (Porsi Terbesar: 2 Kolom) */}
            <Card
              className={`md:col-span-2 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                isDark
                  ? 'bg-gradient-to-br from-zinc-900/40 via-zinc-900/20 to-transparent border-zinc-800 hover:border-zinc-700'
                  : 'bg-white border-zinc-200 hover:border-zinc-300'
              } shadow-sm`}
            >
              <div className='absolute top-0 right-0 p-6 opacity-[0.03] dark:opacity-[0.02] text-zinc-400 group-hover:scale-105 transition-transform pointer-events-none duration-500'>
                <Terminal size={180} />
              </div>
              <CardHeader className='pb-3'>
                <CardTitle className='text-lg font-bold flex items-center gap-2'>
                  <div className='p-1.5 rounded-lg bg-blue-500/10 text-blue-500'>
                    <TestTube2 size={18} />
                  </div>
                  Core Test Automation
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                  Architecting resilient end-to-end regression suites for
                  high-availability core banking modules. Expert in constructing
                  complex logical loopings, precise UI element bindings, and
                  robust CI/CD integration models.
                </p>
                <div className='flex flex-wrap gap-2 pt-1 text-[11px] font-medium text-zinc-500'>
                  <span className='px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'>
                    Playwright Framework
                  </span>
                  <span className='px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'>
                    UiPath Enterprise
                  </span>
                  <span className='px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'>
                    Katalon Studio
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Side Card: API Contract Reliability */}
            <Card
              className={`rounded-2xl border transition-all duration-300 ${
                isDark
                  ? 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                  : 'bg-white border-zinc-200 hover:border-zinc-300'
              } shadow-sm flex flex-col justify-between`}
            >
              <div>
                <CardHeader className='pb-3'>
                  <CardTitle className='text-base font-bold flex items-center gap-2'>
                    <div className='p-1.5 rounded-lg bg-purple-500/10 text-purple-500'>
                      <Search size={16} />
                    </div>
                    API Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                    Validating strict integration contract thresholds, testing
                    real-time ingestion logic, and crafting backend automated
                    pipeline assertions.
                  </p>
                </CardContent>
              </div>
              <div className='px-6 pb-6 text-[11px] font-medium text-purple-500/80'>
                REST & GraphQL Testing
              </div>
            </Card>

            {/* Full Width Bottom Card: Frontend Side-Stack */}
            <Card
              className={`md:col-span-3 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                isDark
                  ? 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                  : 'bg-white border-zinc-200 hover:border-zinc-300'
              } shadow-sm group`}
            >
              <div className='p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6'>
                <div className='space-y-2 max-w-2xl'>
                  <div className='flex items-center gap-2'>
                    <div className='p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500'>
                      <Code size={16} />
                    </div>
                    <h3 className='text-base font-bold'>
                      Frontend Engineering Ecosystem
                    </h3>
                  </div>
                  <p className='text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                    Developing clean, accessible, and high-performance layout
                    shells using <strong>React.js</strong> and{' '}
                    <strong>Next.js</strong>. My dual engineering background
                    ensures that applications are not only built seamlessly but
                    are also structurally designed for effortless testability.
                  </p>
                </div>

                {/* Micro CTA Button to Project / About */}
                <Link
                  href='/portofolio/about'
                  className='inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl border bg-zinc-950 text-zinc-50 hover:bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors shrink-0 shadow-sm'
                >
                  View Full Profile
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. FOOTER SECTION (Sama Persis dengan About) */}
      <div className='w-full border-t border-zinc-200 dark:border-zinc-800 border-dashed relative z-20 mt-auto'>
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
  )
}

export default Home
