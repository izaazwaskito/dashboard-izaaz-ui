'use client'

import * as React from 'react'
import {
  Briefcase,
  User,
  Code2,
  Wrench,
  Workflow,
  Layers,
  Terminal,
  Download,
  Cpu
} from 'lucide-react'
import { FaNodeJs, FaDocker } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import {
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiPostgresql,
  SiGit,
  SiUipath,
  SiExpress,
  SiApollographql,
  SiSelenium
} from 'react-icons/si'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { MainNav } from '@/components/navigation/MainNav'
import Head from 'next/head'

const Home = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [bniDuration, setBniDuration] = React.useState('')

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  React.useEffect(() => {
    setMounted(true)

    // Hitung durasi kerja di BNI otomatis dari September 2025 sampai sekarang
    const bniStartDate = new Date(2025, 8) // September = index 8
    const currentDate = new Date()
    const diffTime = Math.abs(currentDate.getTime() - bniStartDate.getTime())
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44))

    const years = Math.floor(diffMonths / 12)
    const months = diffMonths % 12

    let durationStr = ''
    if (years > 0) durationStr += `${years} Yr${years > 1 ? 's' : ''} `
    durationStr += `${months} Mos`
    setBniDuration(durationStr)
  }, [])

  if (!mounted) return null

  const skillCategories = [
    {
      title: 'QA Automation & Testing',
      icon: <Workflow className='w-4 h-4 text-blue-500' />,
      items: [
        { name: 'QA Automation', icon: <Workflow size={18} /> },
        { name: 'UiPath & Orchestrator', icon: <SiUipath size={18} /> },
        { name: 'Katalon Studio', icon: <SiSelenium size={18} /> },
        { name: 'Playwright', icon: <Wrench size={18} /> },
        { name: 'XPath Selection', icon: <Code2 size={18} /> },
        { name: 'API & UI Testing', icon: <Wrench size={18} /> }
      ]
    },
    {
      title: 'Backend & CLI Development',
      icon: <Terminal className='w-4 h-4 text-purple-500' />,
      items: [
        { name: 'Node.js (CLI Kits)', icon: <FaNodeJs size={18} /> },
        { name: 'JavaScript / TS', icon: <TbBrandTypescript size={18} /> },
        { name: 'Express.js', icon: <SiExpress size={18} /> },
        { name: 'REST API Architecture', icon: <Wrench size={18} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={18} /> },
        { name: 'GraphQL & WebSockets', icon: <SiApollographql size={18} /> }
      ]
    },
    {
      title: 'Frontend & DevOps',
      icon: <Layers className='w-4 h-4 text-emerald-500' />,
      items: [
        { name: 'React.js / Next.js', icon: <TbBrandNextjs size={18} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} /> },
        { name: 'ShadCN UI', icon: <SiShadcnui size={18} /> },
        { name: 'Framer Motion', icon: <SiFramer size={18} /> },
        { name: 'Docker', icon: <FaDocker size={18} /> },
        { name: 'GitHub Actions (CI/CD)', icon: <SiGit size={18} /> }
      ]
    }
  ]

  const isDark = theme === 'dark'

  return (
    // FIX: Tambahkan 'flex flex-col' agar mt-auto pada footer berfungsi
    <div
      className={`${
        isDark ? 'bg-zinc-950 text-zinc-50' : 'bg-zinc-50 text-zinc-900'
      } w-full font-inter min-h-screen transition-colors duration-300 relative flex flex-col`}
    >
      <Head>
        <title>Izaaz Waskito | About & Portfolio</title>
      </Head>

      {/* 1. NAVBAR SECTION (Full-Width Screen) */}
      {/* FIX: Posisi w-full dan border-b di tingkat terluar untuk garis melintang penuh */}
      <div className='w-full border-b border-zinc-200 dark:border-zinc-800 border-dashed relative z-20'>
        <div className='container mx-auto px-4 max-w-5xl relative'>
          <MainNav />

          {/* Garis vertikal tiruan agar selaras dengan area konten utama di bawah */}
          <div className='absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
        </div>
      </div>

      {/* 2. MAIN CONTENT CONTAINER (Max-Width 5xl) */}
      <div className='container mx-auto px-4 max-w-5xl border-x border-zinc-200 dark:border-zinc-800 border-dashed min-h-[calc(100vh-140px)] pb-20 relative z-10 flex-grow'>
        <motion.div
          className='pt-12 space-y-14'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
        >
          {/* PROFILE SECTION */}
          <section className='space-y-4'>
            <h1 className='text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-2'>
              <User size={16} /> About Me
            </h1>

            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl border ${
                isDark
                  ? 'bg-zinc-900/50 border-zinc-800'
                  : 'bg-white border-zinc-200'
              } shadow-sm`}
            >
              <div className='flex flex-col items-center text-center md:items-start md:text-left space-y-4 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 pb-6 md:pb-0 md:pr-6'>
                <Avatar className='w-24 h-24 border-2 border-primary/20'>
                  <AvatarImage src='/path-to-your-image.jpg' alt='Izaaz' />
                  <AvatarFallback className='text-xl font-bold'>
                    IW
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className='text-xl font-bold tracking-tight'>
                    Izaaz Waskito Widyarto
                  </h2>
                  <p className='text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1'>
                    QA Automation Engineer
                  </p>
                </div>
                <Button
                  className='w-full md:w-auto text-xs bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90'
                  size='sm'
                  asChild
                >
                  {/* FIX: Menghapus atribut download, menambahkan target="_blank" agar PDF terbuka langsung di halaman tab baru */}
                  <a
                    href='/CV Izaaz Waskito.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Download size={14} className='mr-1.5' /> View & Download CV
                  </a>
                </Button>
              </div>

              <div className='md:col-span-2 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 align-middle my-auto'>
                <p>
                  Hi, I&apos;m <strong>Izaaz</strong>, a Computer Engineering
                  graduate from Brawijaya University. I am a specialized{' '}
                  <strong>QA Automation Engineer</strong> with rich experience
                  handling core banking automation infrastructure, alongside a
                  robust technical side-stack in <strong>Frontend</strong> and{' '}
                  <strong>Node.js CLI Development</strong>.
                </p>
                <p>
                  My day-to-day work centers around structuring mission-critical
                  automation systems for leading banking platforms—handling
                  intricate transactions, regression suites, and custom
                  reporting extensions that enhance developer pipelines.
                </p>
              </div>
            </div>
          </section>

          {/* CAREER TIMELINE SECTION */}
          <section className='space-y-4'>
            <h1 className='text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-2'>
              <Briefcase size={16} /> Career History
            </h1>

            <div className='space-y-4'>
              {/* BNI JOB */}
              <div
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-zinc-900/50 border-zinc-800'
                    : 'bg-white border-zinc-200'
                }`}
              >
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2'>
                  <div>
                    <h3 className='text-base font-bold'>
                      QA Automation Engineer
                    </h3>
                    <p className='text-sm text-zinc-500'>
                      Bank BNI{' '}
                      <span className='text-xs text-zinc-400 dark:text-zinc-500'>
                        (via NTT DATA Indonesia)
                      </span>
                    </p>
                  </div>
                  <div className='text-left sm:text-right'>
                    <span className='text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20'>
                      Sept 2025 - Present
                    </span>
                    <p className='text-xs text-zinc-400 mt-1.5'>
                      {bniDuration}
                    </p>
                  </div>
                </div>
                <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-4 border-t border-zinc-100 dark:border-zinc-800/60 pt-4'>
                  Developing robust testing ecosystems for high-availability
                  banking pipelines. Crafting specialized automation mechanisms
                  utilizing web terminal frameworks, handling precise
                  loop-logics, and validating core transaction safety layers.
                </p>
              </div>

              {/* MANDIRI JOB */}
              <div
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-zinc-900/30 border-zinc-800/60'
                    : 'bg-white border-zinc-200'
                } opacity-95`}
              >
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2'>
                  <div>
                    <h3 className='text-base font-bold text-zinc-700 dark:text-zinc-300'>
                      QA Automation Engineer
                    </h3>
                    <p className='text-sm text-zinc-500'>
                      Bank Mandiri{' '}
                      <span className='text-xs text-zinc-400 dark:text-zinc-500'>
                        (via Adidata)
                      </span>
                    </p>
                  </div>
                  <div className='text-left sm:text-right'>
                    <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-500/10 text-zinc-500 border border-zinc-500/20'>
                      May 2024 - Sept 2025
                    </span>
                    <p className='text-xs text-zinc-400 mt-1.5'>1 Yr 4 Mos</p>
                  </div>
                </div>
                <p className='text-sm text-zinc-500 dark:text-zinc-400 mt-4 border-t border-zinc-100 dark:border-zinc-800/40 pt-4'>
                  Spearheaded core end-to-end regression scripts for web and
                  desktop platforms under the **Kopra Project**. Designed UiPath
                  and Playwright automation architectures, structured secure DB
                  patching tests, and improved deployment efficiency with
                  early-stage CI/CD integrations.
                </p>
              </div>
            </div>
          </section>

          {/* FEATURED PRODUCT SECTION */}
          <section className='space-y-4'>
            <h1 className='text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-2'>
              <Cpu size={16} /> Featured Internal Product
            </h1>

            <div
              className={`p-6 rounded-2xl border ${
                isDark
                  ? 'bg-gradient-to-br from-zinc-900/80 to-zinc-950 border-zinc-800'
                  : 'bg-gradient-to-br from-white to-zinc-50 border-zinc-200'
              } shadow-md relative overflow-hidden group`}
            >
              <div className='absolute top-0 right-0 p-4 opacity-10 dark:opacity-5 text-zinc-400 group-hover:scale-110 transition-transform'>
                <Terminal size={120} />
              </div>

              <div className='relative z-10 space-y-4'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                  <div>
                    <span className='text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20'>
                      Developer Utility
                    </span>
                    <h3 className='text-lg font-bold mt-1.5 flex items-center gap-2'>
                      Automated QA Reporting CLI Kit{' '}
                      <span className='text-xs font-normal text-zinc-400'>
                        (Node.js & esbuild)
                      </span>
                    </h3>
                  </div>

                  {/* Button Download Contoh File */}
                  <Button
                    size='sm'
                    variant='outline'
                    // FIX: Mengatur border, warna teks, dan background hover yang dinamis mengikuti mode tema
                    className='border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900/80 hover:text-zinc-900 dark:hover:text-zinc-50 self-start sm:self-center transition-colors'
                    asChild
                  >
                    {/* FIX: Mengubah href agar langsung membuka berkas PDF di tab baru (target="_blank") */}
                    <a
                      href='/downloads/sample-qa-report.pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Download size={14} className='mr-1.5' /> View Sample
                      Report
                    </a>
                  </Button>
                </div>

                <p className='text-sm text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed'>
                  A custom CLI and API-driven reporting tool developed from
                  scratch using Node.js and esbuild. It automates the
                  transformation of raw API/UI testing logs into
                  stakeholder-ready PDF documents, cutting out 100% of manual
                  post-testing paperwork.
                </p>

                <div className='flex flex-wrap gap-2 pt-2'>
                  <span
                    className={`text-[11px] px-2.5 py-1 rounded-md border font-medium ${
                      isDark
                        ? 'bg-zinc-800/50 border-zinc-800 text-zinc-300'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                    }`}
                  >
                    Node.js (CLI Built)
                  </span>

                  <span
                    className={`text-[11px] px-2.5 py-1 rounded-md border font-medium ${
                      isDark
                        ? 'bg-zinc-800/50 border-zinc-800 text-zinc-300'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                    }`}
                  >
                    esbuild Bundler
                  </span>

                  <span
                    className={`text-[11px] px-2.5 py-1 rounded-md border font-medium ${
                      isDark
                        ? 'bg-zinc-800/50 border-zinc-800 text-zinc-300'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                    }`}
                  >
                    jsPDF Engine
                  </span>

                  <span
                    className={`text-[11px] px-2.5 py-1 rounded-md border font-medium ${
                      isDark
                        ? 'bg-zinc-800/50 border-zinc-800 text-zinc-300'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                    }`}
                  >
                    API Data Ingestion
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* TECH STACK SECTION */}
          <section className='space-y-4'>
            <h1 className='text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-2'>
              <Code2 size={16} /> Technical Skills
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    isDark
                      ? 'bg-zinc-900/30 border-zinc-800'
                      : 'bg-white border-zinc-200'
                  } flex flex-col justify-between`}
                >
                  <div>
                    <div className='flex items-center gap-2 mb-4'>
                      {category.icon}
                      <h3 className='text-sm font-bold tracking-tight'>
                        {category.title}
                      </h3>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {category.items.map((skill, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium ${
                            isDark
                              ? 'bg-zinc-900 border-zinc-800 text-zinc-300'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-600'
                          }`}
                        >
                          <span className='opacity-80'>{skill.icon}</span>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      {/* 3. FOOTER SECTION (Full-Width Screen) */}
      {/* FIX: Posisi w-full dan border-t di tingkat terluar untuk garis melintang penuh (simetris dengan Navbar) */}
      <div className='w-full border-t border-zinc-200 dark:border-zinc-800 border-dashed relative z-20 mt-auto'>
        <div className='container mx-auto px-4 max-w-5xl relative py-6 text-center text-xs text-zinc-400'>
          <p>
            Made with ❤️ by{' '}
            <span className='font-semibold text-zinc-600 dark:text-zinc-300'>
              Izaaz
            </span>
          </p>

          {/* Garis vertikal tiruan agar selaras dengan area konten utama di atas */}
          <div className='absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none'></div>
        </div>
      </div>
    </div>
  )
}

export default Home
