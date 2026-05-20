'use client'

import * as React from 'react'
import { ClipboardList, Terminal, ShieldCheck, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { MainNav } from '@/components/navigation/MainNav'
import Head from 'next/head'

const Projects = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    document.title = "Projects | Izaaz Waskito";
  }, []);

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  // Daftar Project Riil & High-Impact
  const projectList = [
    {
      title: 'BNI Direct Automation Suites',
      client: 'Bank BNI (via NTT DATA)',
      timeline: '2025 - Present',
      description:
        'Developing automated testing ecosystems for corporate banking transaction modules, including core transfers and clearing workflows. Structured robust locator strategies and conditional looping mechanisms inside virtualized web-terminal and web environments.',
      tech: [
        'UiPath Orchestrator',
        'Katalon Studio',
        'Advanced XPath',
        'API Regressions'
      ],
      icon: <Cpu className='text-blue-500 w-4 h-4' />
    },
    {
      title: 'Automated QA Reporting CLI Kit',
      client: 'Internal Developer Tool',
      timeline: '2026',
      description:
        'Built an independent command-line interface utility to aggregate raw testing execution logs from API and UI suites, automatically generating polished, stakeholder-ready PDF summaries. Greatly reduced post-testing manual documentation overhead.',
      tech: ['Node.js CLI', 'esbuild', 'jsPDF', 'Data Ingestion API'],
      icon: <Terminal className='text-purple-500 w-4 h-4' />
    },
    {
      title: 'Kopra Corporate Banking Platform',
      client: 'Bank Mandiri (via Adidata)',
      timeline: '2024 - 2025',
      description:
        'Architected end-to-end UI regression test scripts for wholesale digital banking features. Integrated test suites with secure staging databases during patch windows and built preliminary CI/CD delivery integrations to ensure build stability.',
      tech: ['Playwright', 'UiPath Studio', 'PostgreSQL', 'GitHub Actions'],
      icon: <ShieldCheck className='text-emerald-500 w-4 h-4' />
    }
  ]

  return (
    <div
      className={`${
        isDark ? 'bg-zinc-950 text-zinc-50' : 'bg-zinc-50 text-zinc-900'
      } w-full font-inter min-h-screen transition-colors duration-300 relative flex flex-col overflow-x-hidden`}
    >
      <Head>
        <title>Izaaz Waskito | Projects</title>
      </Head>

      {/* ================= BACKGROUND DECORATION INTERIOR & EXTERIOR (FLAT GRID SETUP) ================= */}
      {/* 1. Pola Kotak-Kotak (Grid Pattern) di area luar & dalam */}
      <div 
  className="absolute top-0 left-0 right-0 h-[750px] z-0 opacity-[0.4] dark:opacity-[0.25] pointer-events-none mix-blend-normal"
  style={{
    backgroundImage: isDark 
      ? `linear-gradient(to right, rgba(63, 63, 70, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(63, 63, 70, 0.2) 1px, transparent 1px)`
      : `linear-gradient(to right, rgba(228, 228, 231, 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(228, 228, 231, 0.7) 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
    // Kembali menggunakan radial murni seperti Home karena tingginya sudah kita kunci (fix)
    maskImage: 'radial-gradient(circle at 50% 30%, black 60%, transparent 95%)',
    WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 60%, transparent 95%)'
  }}
/>

      {/* 2. Efek Geometris 3D Isometrik Berbentuk V (Sisi Kiri dan Kanan Luar Container) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Sayap V Sebelah Kiri (Hanya terlihat di layar desktop/lebar) */}
        <motion.div 
          initial={{ opacity: 0, x: -50, rotateX: 45, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateX: 55, rotateY: -25 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden xl:block absolute left-[calc(50%-680px)] top-[20%] w-[180px] h-[350px] origin-top-left border-l-4 border-b-4 border-blue-500/20 dark:border-blue-500/10 bg-gradient-to-br from-blue-500/[0.02] to-transparent backdrop-blur-[1px]"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <div className="absolute inset-0 bg-grid-small border-t border-r border-dashed border-zinc-500/10" />
        </motion.div>

        {/* Sayap V Sebelah Kanan (Hanya terlihat di layar desktop/lebar) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotateX: 45, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateX: 55, rotateY: 25 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="hidden xl:block absolute right-[calc(50%-680px)] top-[20%] w-[180px] h-[350px] origin-top-right border-r-4 border-b-4 border-purple-500/20 dark:border-purple-500/10 bg-gradient-to-bl from-purple-500/[0.02] to-transparent backdrop-blur-[1px]"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <div className="absolute inset-0 bg-grid-small border-t border-l border-dashed border-zinc-500/10" />
        </motion.div>

        {/* Tambahan Semburan Cahaya (Glow Ambiance) di tengah atas */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-500/[0.06] to-transparent blur-[120px] rounded-full" />
      </div>
      {/* ============================================================================ */}

      {/* 1. NAVBAR SECTION (Sama Persis & Terkunci) */}
      <div className='w-full border-b border-zinc-200 dark:border-zinc-800 border-dashed relative z-20 backdrop-blur-sm bg-zinc-50/50 dark:bg-zinc-950/50'>
        <div className='container mx-auto px-4 max-w-5xl relative'>
          <MainNav />
          <div className='absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
        </div>
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className='container mx-auto px-4 max-w-5xl border-x border-zinc-200 dark:border-zinc-800 border-dashed min-h-[calc(100vh-140px)] pb-20 relative z-10 flex-grow bg-transparent'>
        <motion.div
          className='pt-16 space-y-10'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className='space-y-2 text-left' variants={itemVariants}>
            <h1 className='text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-2'>
              <ClipboardList size={16} /> Projects & Work
            </h1>
            <p className='text-xs md:text-sm text-zinc-500 max-w-xl'>
              A curated selection of core banking automation suites and
              developer utilities I have architected.
            </p>
          </motion.div>

          {/* PROJECTS TIMELINE/GRID LAYOUT */}
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-4'
            variants={itemVariants}
          >
            {projectList.map((project, idx) => (
              <Card
                key={idx}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm ${
                  isDark
                    ? 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white/80 border-zinc-200 hover:border-zinc-300'
                } shadow-sm ${idx === 0 ? 'md:col-span-2' : ''}`}
              >
                <CardHeader className='pb-3'>
                  <div className='flex justify-between items-start gap-4'>
                    <div className='space-y-1'>
                      <span className='text-[10px] font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-500'>
                        {project.client}
                      </span>
                      <CardTitle className='text-base font-bold flex items-center gap-2 mt-0.5 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors'>
                        {project.icon}
                        {project.title}
                      </CardTitle>
                    </div>
                    <span className='text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border border-zinc-200 dark:border-zinc-700/60 whitespace-nowrap'>
                      {project.timeline}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className='space-y-4 flex-grow flex flex-col justify-between'>
                  <p className='text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className='flex flex-wrap gap-1.5 pt-2'>
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`text-[10px] px-2 py-0.5 rounded border font-medium ${
                          isDark
                            ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 3. FOOTER SECTION */}
      <div className='w-full border-t border-zinc-200 dark:border-zinc-800 border-dashed relative z-20 mt-auto backdrop-blur-sm bg-zinc-50/50 dark:bg-zinc-950/50'>
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

export default Projects