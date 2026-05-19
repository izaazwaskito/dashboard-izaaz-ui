'use client'

import * as React from 'react'
import {
  BookOpen,
  Terminal,
  Code2,
  ShieldCheck,
  Layers,
  Cpu,
  CheckCircle2
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Card } from '@/components/ui/card'
import { MainNav } from '@/components/navigation/MainNav'
import { FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiUipath, SiSelenium } from 'react-icons/si'
import { Button } from '@/components/ui/button'
import Head from 'next/head'

const Roadmap = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [activeCategory, setActiveCategory] = React.useState('qa_core')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  // Kurikulum Silabus: Fokus Murni Pada Otomasi & Backend Tools
  const qaCoreItems = [
    {
      title: 'QA Automation Foundations',
      description:
        'Memahami arsitektur DOM, teknik penentuan lokator tingkat lanjut via XPath element selection, dan strategi sinkronisasi script.',
      icon: <Code2 className='text-blue-500 w-5 h-5' />
    },
    {
      title: 'JavaScript / TS for Testing',
      description:
        'Menguasai struktur pemrograman asinkron (Async/Await), manipulasi variabel bertipe, dan eksekusi skrip logika data.',
      icon: <SiTypescript className='text-blue-600 w-5 h-5' />
    },
    {
      title: 'UiPath Enterprise Testing',
      description:
        'Membangun workflow otomatisasi desktop/web perbankan berskala besar, penanganan arsitektur REFramework, dan integrasi aset.',
      icon: <SiUipath className='text-orange-600 w-5 h-5' />
    },
    {
      title: 'UiPath Orchestrator Control',
      description:
        'Mengelola manajemen antrean data (Queues), trigger otomatis, deployment package pengujian, serta pengawasan log aset.',
      icon: <Cpu className='text-orange-500 w-5 h-5' />
    },
    {
      title: 'Playwright E2E Framework',
      description:
        'Arsitektur pengujian modern berbasis browser. Menyusun Page Object Models (POM), parallel testing execution, dan penanganan autentikasi.',
      icon: <SiSelenium className='text-emerald-500 w-5 h-5' />
    },
    {
      title: 'Katalon Studio Core',
      description:
        'Menyusun skenario pengujian lintas platform menggunakan skrip Groovy/Java, manajemen Test Data, dan integrasi modul.',
      icon: <SiSelenium className='text-green-600 w-5 h-5' />
    },
    {
      title: 'API Regressions & Contract',
      description:
        'Validasi integrasi endpoint RESTful & GraphQL, pengujian skema payload JSON, manajemen token, dan asersi status backend.',
      icon: <Terminal className='text-purple-500 w-5 h-5' />
    }
  ]

  const devOpsToolKitItems = [
    {
      title: 'Node.js (CLI Engineering)',
      description:
        'Membangun utilitas baris perintah internal mandiri untuk pemrosesan raw log testing menggunakan runtime Node.',
      icon: <FaNodeJs className='text-emerald-600 w-5 h-5' />
    },
    {
      title: 'Fast Compiling with esbuild',
      description:
        'Memahami pipeline bundler modern berkecepatan tinggi untuk mengompilasi modul skrip testing terisolasi menjadi file eksekusi.',
      icon: <Layers className='text-yellow-600 w-5 h-5' />
    },
    {
      title: 'CI/CD Pipeline Integration',
      description:
        'Mengotomatisasi peluncuran script QA Automation pada container Docker secara terjadwal melalui runner GitHub Actions.',
      icon: <ShieldCheck className='text-blue-500 w-5 h-5' />
    }
  ]

  const currentItems =
    activeCategory === 'qa_core' ? qaCoreItems : devOpsToolKitItems

  return (
    <div
      className={`${
        isDark ? 'bg-zinc-950 text-zinc-50' : 'bg-zinc-50 text-zinc-900'
      } w-full font-inter min-h-screen transition-colors duration-300 relative flex flex-col`}
    >
      <Head>
        <title>Izaaz Waskito | Roadmap</title>
      </Head>

      {/* 1. NAVBAR SECTION */}
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
          className='pt-16 space-y-10'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          {/* Header Title & Subtitle */}
          <motion.div className='space-y-2 text-left' variants={itemVariants}>
            <h1 className='text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-2'>
              <BookOpen size={16} /> Learning Roadmap
            </h1>
            <p className='text-xs md:text-sm text-zinc-500 max-w-xl'>
              Kurikulum kompetensi internal dan peta keahlian otomasi perangkat
              lunak yang saya dalami secara intensif.
            </p>
          </motion.div>

          {/* Category Toggle Buttons */}
          <motion.div
            className='flex flex-wrap gap-2 border-b border-zinc-100 dark:border-zinc-900 pb-4'
            variants={itemVariants}
          >
            <Button
              onClick={() => setActiveCategory('qa_core')}
              variant='outline'
              className={`text-xs font-semibold rounded-xl px-4 py-2 border transition-all ${
                activeCategory === 'qa_core'
                  ? 'bg-zinc-900 text-zinc-50 border-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:border-zinc-200'
                  : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
            >
              QA Automation Stack
            </Button>

            <Button
              onClick={() => setActiveCategory('frontend')}
              variant='outline'
              className={`text-xs font-semibold rounded-xl px-4 py-2 border transition-all ${
                activeCategory === 'frontend'
                  ? 'bg-zinc-900 text-zinc-50 border-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:border-zinc-200'
                  : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
            >
              Utilities & DevOps Toolkit
            </Button>
          </motion.div>

          {/* Cards Dynamic Grid Layout (Symmetrical & Clean) */}
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
            variants={itemVariants}
            key={activeCategory} // Memicu animasi ulang ketika kategori berganti
          >
            {currentItems.map((item, index) => (
              <Card
                key={index}
                className={`rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between ${
                  isDark
                    ? 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                } shadow-sm`}
              >
                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shrink-0'>
                      {item.icon}
                    </div>
                    <h3 className='text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-200'>
                      {item.title}
                    </h3>
                  </div>
                  <p className='text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed'>
                    {item.description}
                  </p>
                </div>

                {/* Penanda Status Selesai / Checked */}
                <div className='flex items-center gap-1.5 pt-4 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500'>
                  <CheckCircle2
                    size={12}
                    className='text-zinc-400 dark:text-zinc-600'
                  />
                  <span>Mastered</span>
                </div>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 3. FOOTER SECTION */}
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

export default Roadmap
