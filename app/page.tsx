"use client"; // Pastikan ini ada di bagian atas file

import * as React from "react";
import { Github, Moon, Sun, CalendarIcon } from "lucide-react";

import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Home = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false); // State untuk memastikan komponen sudah di-mount

  // Gunakan useEffect untuk memastikan komponen sudah di-mount di client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Jika komponen belum di-mount, jangan render apa-apa
  if (!mounted) {
    return null;
  }

  // Fungsi untuk toggle tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } w-full font-inter`}
    >
      <div className="container mx-auto px-4 min-h-screen border-l border-r border-stone-800 border-[0.5px] border-dashed border-t-0 border-b-0">
        {/* Garis Horizontal Full Width */}
        <div className="flex items-center justify-between space-x-4 pt-2 pb-2">
          {/* Navigasi */}
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg px-6 py-3 font-medium`}
                  >
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg px-6 py-3 font-medium`}
                  >
                    About Project
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg px-6 py-3 font-medium`}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Tombol di kanan */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com", "_blank")}
              className={`${theme === "dark" ? "bg-grey-900" : "bg-grey-100"}`}
            >
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`${theme === "dark" ? "bg-grey-900" : "bg-grey-100"}`}
            >
              {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        <div className="absolute left-0 w-screen border-t border-stone-800 border-dashed"></div>
        {/* Konten Anda di sini */}
        <div className="pt-32">
          {/* Card Profil */}
          <Card
            className={`${
              theme === "dark"
                ? "bg-stone-900 border-stone-800"
                : "bg-gray-100 border-gray-200"
            }`}
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <Avatar>
                  <AvatarImage src="/path-to-your-image.jpg" alt="Izaaz" />
                  <AvatarFallback>IW</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } text-3xl font-bold`}
                  >
                    Izaaz Waskito Widyarto
                  </CardTitle>
                  <CardDescription
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <HoverCard>
                      <HoverCardTrigger>
                      <div className="hover:underline cursor-pointer">QA Automation Engineer at Bank Mandiri</div>
                      </HoverCardTrigger>
                      <HoverCardContent className={`${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-800"
                    : "bg-gray-100 border-gray-200"
                } w-80  `}>
                        <div className="flex space-x-4">
                          <Avatar>
                            <AvatarImage src="https://github.com/vercel.png" />
                            <AvatarFallback>BM</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">PT Bank Mandiri (Persero) Tbk.</h4>
                            <p className="text-sm">
                              QA Automation Engineer
                            </p>
                            <div className="flex items-center pt-2">
                              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                              <span className="text-xs text-muted-foreground">
                                Joined May 2024
                              </span>
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } text-lg mb-4`}
              > 
                Sebagai QA Automation Engineer di Bank Mandiri, saya
                mengembangkan skrip pengujian otomatis untuk API, UI/Web, dan
                aplikasi desktop menggunakan UiPath dan Playwright. Saya juga
                terlibat dalam proses patch database untuk memastikan keandalan
                sistem.
              </p>
              {/* Badge Keahlian */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-purple-600 hover:bg-purple-700">
                  CI/CD
                </Badge>
                <Badge className="bg-orange-600 hover:bg-orange-700">
                  UiPath
                </Badge>
                <Badge className="bg-green-600 hover:bg-green-700">
                  Playwright
                </Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Jira</Badge>
                <Badge className="bg-red-600 hover:bg-red-700">
                  API Testing
                </Badge>
                <Badge className="bg-yellow-600 hover:bg-yellow-700">
                  UI/Web Testing
                </Badge>
                <Badge className="bg-pink-600 hover:bg-pink-700">
                  Application Testing
                </Badge>
                <Badge className="bg-teal-600 hover:bg-teal-700">
                  Patch DB
                </Badge>
              </div>
              {/* Tombol Aksi */}
              <div className="flex space-x-4">
                <Button
                  className={`${
                    theme === "dark"
                      ? "text-black bg-white hover:bg-stone-600 hover:text-white"
                      : "text-white bg-black hover:bg-gray-800"
                  }`}
                >
                  <a
                    href="/CV Izaaz Waskito.pdf"
                    download="IzaazWaskito_CV.pdf"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Section Proyek yang Pernah Dikerjakan */}
          <div className="mt-16">
            <h2
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } text-2xl font-bold mb-8`}
            >
              Proyek yang Pernah Dikerjakan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Proyek 1 */}
              <Card
                className={`${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-800"
                    : "bg-gray-100 border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } text-xl`}
                  >
                    Kopra Project 2024
                  </CardTitle>
                  <CardDescription
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Bank Mandiri
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
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
                className={`${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-800"
                    : "bg-gray-100 border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } text-xl`}
                  >
                    Pengujian Aplikasi Web E-Commerce
                  </CardTitle>
                  <CardDescription
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Proyek Freelance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Membuat skrip pengujian otomatis untuk aplikasi e-commerce
                    menggunakan Playwright. Fokus pada pengujian fungsionalitas
                    keranjang belanja, pembayaran, dan integrasi API.
                  </p>
                </CardContent>
              </Card>

              {/* Proyek 3 */}
              <Card
                className={`${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-800"
                    : "bg-gray-100 border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } text-xl`}
                  >
                    Optimasi Pipeline CI/CD
                  </CardTitle>
                  <CardDescription
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Bank Mandiri
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Meningkatkan efisiensi pipeline CI/CD dengan
                    mengintegrasikan pengujian otomatis dan memastikan eksekusi
                    pengujian yang cepat dan andal. Menggunakan tools seperti
                    Jenkins dan GitLab CI.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
