"use client";

import * as React from "react";
import { ClipboardList } from "lucide-react";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MainNav } from "@/components/navigation/MainNav";

const Home = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const skills = [
    "Next.js",
    "React Native",
    "Astro",
    "Material UI",
    "Framer Motion",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "JavaScript",
    "Jest",
    "Vue.js",
  ];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } w-full font-inter overflow-hidden`}
    >
      <div className="container   mx-auto px-4 min-h-screen border-l border-r border-stone-800 border-[0.5px] border-dashed border-t-0 border-b-0">
        {/* Header Section */}
        <MainNav />

        <div className="absolute left-0 w-full border-t border-stone-800 border-dashed"></div>
        {/* Konten Anda di sini */}
        <div className="flex justify-center items-center min-h-screen">
          <motion.div
            className="my-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-xl font-medium pb-2 flex">
              <ClipboardList className="mr-2" />
              Projects/Work
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Proyek 1 */}
              <Card
                className={
                  theme === "dark"
                    ? "bg-stone-900 border-stone-800"
                    : "bg-gray-100 border-gray-200"
                }
              >
                <CardHeader>
                  <CardTitle
                    className={theme === "dark" ? "text-white" : "text-black"}
                  >
                    Kopra Project 2024
                  </CardTitle>
                  <CardDescription
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Bank Mandiri
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Mengembangkan dan mengelola skrip pengujian otomatis untuk
                    aplikasi internal Bank Mandiri menggunakan UiPath dan
                    Playwright. Bertanggung jawab atas integrasi pengujian
                    otomatis ke dalam pipeline CI/CD.
                  </p>
                </CardContent>
              </Card>

              {/* Proyek 2 */}
              <Card
                className={
                  theme === "dark"
                    ? "bg-stone-900 border-stone-800"
                    : "bg-gray-100 border-gray-200"
                }
              >
                <CardHeader>
                  <CardTitle
                    className={theme === "dark" ? "text-white" : "text-black"}
                  >
                    Pengujian Aplikasi Web E-Commerce
                  </CardTitle>
                  <CardDescription
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Proyek Freelance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Membuat skrip pengujian otomatis untuk aplikasi e-commerce
                    menggunakan Playwright. Fokus pada pengujian fungsionalitas
                    keranjang belanja, pembayaran, dan integrasi API.
                  </p>
                </CardContent>
              </Card>

              {/* Proyek 3 */}
              <Card
                className={
                  theme === "dark"
                    ? "bg-stone-900 border-stone-800"
                    : "bg-gray-100 border-gray-200"
                }
              >
                <CardHeader>
                  <CardTitle
                    className={theme === "dark" ? "text-white" : "text-black"}
                  >
                    Optimasi Pipeline CI/CD
                  </CardTitle>
                  <CardDescription
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Bank Mandiri
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Meningkatkan efisiensi pipeline CI/CD dengan
                    mengintegrasikan pengujian otomatis dan memastikan eksekusi
                    pengujian yang cepat dan andal. Menggunakan tools seperti
                    Jenkins dan GitLab CI.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
      <footer className="w-full py-4 text-center border-t border-stone-800 border-dashed overflow-hidden">
        <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
          Made with ❤️ by <span className="font-semibold">Izaaz</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
