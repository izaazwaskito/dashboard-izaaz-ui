"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MainNav } from "@/components/navigation/MainNav";
import { Mail, Linkedin, HelpCircle, ArrowUpRight } from "lucide-react";
import Head from "next/head";

const Contacts = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className={`${isDark ? "bg-zinc-950 text-zinc-50" : "bg-zinc-50 text-zinc-900"} w-full font-inter min-h-screen transition-colors duration-300 relative flex flex-col`}>
      <Head>
        <title>Izaaz Waskito | Contact</title>
      </Head>

      {/* 1. NAVBAR SECTION (Sama Persis & Terkunci) */}
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800 border-dashed relative z-20">
        <div className="container mx-auto px-4 max-w-5xl relative">
          <MainNav />
          <div className="absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none"></div>
        </div>
      </div>

      {/* 2. MAIN CONTENT CONTAINER (Sejajar Sempurna, Tanpa Paksaan Flex-Center Vertikal) */}
      <div className="container mx-auto px-4 max-w-5xl border-x border-zinc-200 dark:border-zinc-800 border-dashed min-h-[calc(100vh-140px)] pb-20 relative z-10 flex-grow">
        <motion.div
          className="pt-16 space-y-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="space-y-2 text-left" variants={itemVariants}>
            <h1 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-2">
              <HelpCircle size={16} /> Connect & FAQ
            </h1>
            <p className="text-xs md:text-sm text-zinc-500 max-w-xl">
              Frequently asked questions and professional communication channels.
            </p>
          </motion.div>

          {/* Contact Layout Grid (Bento Style: Akordion Kiri, Akses Kontak Kanan) */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left" variants={itemVariants}>
            
            {/* Accordion Block (2 Kolom) */}
            <Card className={`md:col-span-2 rounded-2xl border p-6 ${isDark ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-zinc-200"} shadow-sm`}>
              <Accordion type="single" collapsible className="w-full">
                
                <AccordionItem value="about-me" className="border-zinc-200 dark:border-zinc-800/60">
                  <AccordionTrigger className="text-sm font-bold hover:no-underline text-zinc-800 dark:text-zinc-200">
                    Who is Izaaz?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
                    Saya adalah seorang **QA Automation Engineer** yang saat ini aktif mengelola infrastruktur automasi pengujian untuk platform *corporate banking* **Bank BNI** (via NTT DATA Indonesia), setelah sebelumnya mendesain arsitektur regresi untuk proyek Kopra di **Bank Mandiri** (via Adidata).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="skills" className="border-zinc-200 dark:border-zinc-800/60">
                  <AccordionTrigger className="text-sm font-bold hover:no-underline text-zinc-800 dark:text-zinc-200 text-left">
                    What are my core technical focus areas?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
                    Fokus utama saya bertumpu pada pembuatan *end-to-end framework automation* menggunakan **UiPath**, **Playwright**, dan **Katalon Studio**. Di luar itu, saya mengembangkan utilitas *backend command-line* (**Node.js CLI Kits** & **esbuild**) serta merancang antarmuka web modern berbasis **Next.js**.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="collaboration" className="border-b-0">
                  <AccordionTrigger className="text-sm font-bold hover:no-underline text-zinc-800 dark:text-zinc-200">
                    What kind of opportunities am I open to?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
                    Saya sangat terbuka untuk berdiskusi seputar standarisasi *automation pipelines* di sektor perbankan/fintech, optimasi efisiensi rilis CI/CD, maupun kolaborasi proyek perkakas internal berbasis JavaScript/TypeScript.
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </Card>

            {/* Quick Contact Links Card (1 Kolom) */}
            <div className="space-y-4 flex flex-col justify-between">
              
              {/* Email Box */}
              <a 
                href="mailto:izaaz.waskito@gmail.com"
                className={`p-5 rounded-2xl border flex items-center justify-between group transition-all duration-300 ${
                  isDark ? "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50" : "bg-white border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Email Direct</h4>
                    <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mt-0.5">izaaz.waskito@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn Box */}
              <a 
                href="https://www.linkedin.com/in/izaaz-waskito-widyarto" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl border flex items-center justify-between group transition-all duration-300 relative flex-grow ${
                  isDark ? "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50" : "bg-white border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Professional Network</h4>
                    <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mt-0.5">Izaaz Waskito Widyarto</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. FOOTER SECTION */}
      <div className="w-full border-t border-zinc-200 dark:border-zinc-800 border-dashed relative z-20 mt-auto">
        <div className="container mx-auto px-4 max-w-5xl relative py-6 text-center text-xs text-zinc-400">
          <p>
            Made with ❤️ by <span className="font-semibold text-zinc-600 dark:text-zinc-300">Izaaz</span>
          </p>
          <div className="absolute left-0 top-0 bottom-0 border-l border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 border-r border-zinc-200 dark:border-zinc-800 border-dashed pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;