"use client";

import * as React from "react";
import {
  CalendarIcon,
  Briefcase,
  User,
  Code2,
  Wrench,
  Workflow,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJira,
  FaDatabase,
} from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandTypescript,
} from "react-icons/tb";
import {
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiPostgresql,
  SiGit,
  SiUipath,
  SiExpress,
  SiJavascript,
  SiApollographql,
  SiWebauthn,
} from "react-icons/si";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
    // Testing & Automation
    { name: "QA Automation", icon: <Workflow size={24} /> },
    { name: "UiPath", icon: <SiUipath size={24} /> },
    { name: "Playwright", icon: <Wrench size={24} /> },

    // DevOps & Orchestration
    { name: "UiPath Orchestrator", icon: <SiUipath size={24} /> },
    { name: "GitHub Actions", icon: <SiGit size={24} /> },
    { name: "Docker", icon: <FaDocker size={24} /> },
    { name: "CI/CD Pipelines", icon: <SiGit size={24} /> },
    { name: "JIRA", icon: <FaJira size={24} /> },

    // Cloud & Misc
    { name: "Testing API", icon: <Wrench size={24} /> },
    { name: "Testing UI", icon: <Wrench size={24} /> },
    { name: "PatchDB", icon: <FaDatabase size={24} /> },
    { name: "GraphQL", icon: <SiApollographql size={24} /> },
    { name: "REST API", icon: <Wrench size={24} /> },
    { name: "WebSockets", icon: <SiWebauthn size={24} /> },
    // Frontend Development
    { name: "React.js", icon: <FaReact size={24} /> },
    { name: "Next.js", icon: <TbBrandNextjs size={24} /> },
    { name: "React Native", icon: <FaReact size={24} /> },
    { name: "Material UI", icon: <FaReact size={24} /> },
    { name: "Framer Motion", icon: <SiFramer size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
    { name: "ShadCN", icon: <SiShadcnui size={24} /> },

    // Backend & Database
    { name: "Node.js", icon: <FaNodeJs size={24} /> },
    { name: "TypeScript", icon: <TbBrandTypescript size={24} /> },
    { name: "JavaScript", icon: <SiJavascript size={24} /> },
    { name: "Express.js", icon: <SiExpress size={24} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
  ];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } w-full font-inter overflow-hidden`}
    >
      {/* Container Utama */}
      <div className="container mx-auto px-4 min-h-screen  border-l border-r border-stone-800 border-[0.5px] border-dashed border-t-0 border-b-0">
        {/* Header Section */}
        <MainNav />

        {/* Garis Atas */}
        <div className="absolute left-0 w-full border-t border-stone-800 border-dashed"></div>

        {/* Konten */}
        <motion.div
          className="pt-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Card Profil */}
          <h1 className="text-xl font-medium pb-2 flex">
            <User className="mr-2" />
            About
          </h1>
          <Card
            className={
              theme === "dark"
                ? "bg-stone-900 border-stone-800"
                : "bg-gray-100 border-gray-200"
            }
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
                    className={theme === "dark" ? "text-white" : "text-black"}
                  >
                    Izaaz Waskito Widyarto
                  </CardTitle>
                  <CardDescription
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    <HoverCard>
                      <HoverCardTrigger>
                        <div className="hover:underline cursor-pointer">
                          QA Automation Engineer at Bank Mandiri
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent
                        className={
                          theme === "dark"
                            ? "bg-stone-900 border-stone-800"
                            : "bg-gray-100 border-gray-300"
                        }
                      >
                        <div className="flex space-x-4">
                          <Avatar>
                            <AvatarImage src="https://github.com/vercel.png" />
                            <AvatarFallback>BM</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">
                              PT Bank Mandiri (Persero) Tbk.
                            </h4>
                            <p className="text-sm">QA Automation Engineer</p>
                            <div className="flex items-center pt-2">
                              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
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
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} block md:hidden`}>
  Sebagai QA Automation Engineer di Bank Mandiri, saya mengembangkan skrip pengujian otomatis untuk API, UI/Web, dan aplikasi desktop menggunakan UiPath dan Playwright. Saya juga terlibat dalam proses patch database untuk memastikan keandalan sistem.
</p>
              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} hidden md:block`}>
                Saya Izaaz Waskito Widyarto, biasa disapa Izaaz, lulusan Sarjana
                Teknik jurusan Teknik Komputer dari Universitas Brawijaya, dan
                saat ini berdomisili di Jakarta. Saya adalah seorang QA
                Automation Engineer dengan fokus pada automasi pengujian
                perangkat lunak menggunakan berbagai tools, serta memiliki
                keterampilan sebagai Frontend Developer.
              </p>

              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} hidden md:block`}>
                Saat ini, saya bekerja di Bank Mandiri, di mana saya
                berkontribusi untuk memastikan kualitas perangkat lunak melalui
                pengujian otomatis. Dalam peran ini, saya menggunakan tools
                seperti UiPath dan Playwright untuk merancang, menjalankan, dan
                mengelola skrip pengujian pada aplikasi web dan aplikasi
                berbasis desktop. Selain itu, saya juga terlibat dalam
                pengembangan pipeline CI/CD untuk membuat proses pengujian
                otomatis lebih efisien.
              </p>

              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} hidden md:block`}>
                Sebagai Frontend Developer, saya memiliki pengalaman dalam
                mengembangkan antarmuka pengguna yang responsif dan interaktif
                menggunakan teknologi seperti HTML, CSS, JavaScript, serta
                framework seperti React.js. Saya menggabungkan keahlian ini
                dengan pemahaman mendalam tentang QA Automation untuk memastikan
                bahwa aplikasi tidak hanya berfungsi dengan baik tetapi juga
                memberikan pengalaman pengguna yang optimal.
              </p>

              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} hidden md:block`}>
                Salah satu proyek besar yang saya terlibat adalah Proyek Kopra,
                di mana saya berfokus pada pengujian aplikasi untuk meningkatkan
                keandalan dan kualitas sistem. Saya bekerja sama dengan tim
                pengembangan untuk memastikan aplikasi berjalan sesuai dengan
                ekspektasi dan standar kualitas yang telah ditetapkan, sekaligus
                berkontribusi dalam pengembangan frontend yang user-friendly.
              </p>

              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} hidden md:block`}>
                Dengan kemampuan analisis yang baik, keterampilan pemecahan
                masalah, serta keahlian di bidang QA Automation dan Frontend
                Development, saya sangat bersemangat untuk terus belajar dan
                berkontribusi dalam meningkatkan kualitas perangkat lunak dan
                pengalaman pengguna.
              </p>

              {/* Badge Keahlian */}

              {/* Tombol Aksi */}
              <div className="flex space-x-4 pt-4 ">
                <Button
                  className={
                    theme === "dark"
                      ? "text-black bg-white hover:bg-stone-600 hover:text-white"
                      : "text-white bg-black hover:bg-gray-800"
                  }
                  id="download_cv"
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
          <div id="Career" className="pt-10">
            <h1 className="text-xl font-medium pb-2 flex">
              <Briefcase className="mr-2" />
              Career
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                className={
                  theme === "dark"
                    ? "bg-stone-900 border-stone-800"
                    : "bg-gray-100 border-gray-200"
                }
              >
                <CardHeader className="pb-2">
                  <CardTitle
                    className={theme === "dark" ? "text-white" : "text-black"}
                  >
                    QA Automation Engineer
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
                  <div className="flex flex-col text-sm">
                    <p
                      className={
                        theme === "dark" ? "text-white" : "text-gray-600"
                      }
                    >
                      May 2024 - Present
                    </p>
                    <p
                      className={
                        theme === "dark" ? "text-white" : "text-gray-600"
                      }
                    >
                      ~10 Bulan
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div id="Skill" className="pt-10 pb-10">
            <h1 className="text-xl font-medium pb-2 flex">
              <Code2 className="mr-2" />
              Skill
            </h1>
            <Card
              className={`relative w-full overflow-hidden p-5 rounded-lg shadow-md ${
                theme === "dark"
                  ? "bg-stone-900 border-stone-800"
                  : "bg-gray-100 border-gray-200"
              }`}
            >
              <div className="relative w-full overflow-hidden flex">
                <motion.div
                  className="flex space-x-8 flex-nowrap w-max"
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 40,
                    ease: "linear",
                  }}
                >
                  {[...skills, ...skills].map((skill, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-md font-medium whitespace-nowrap ${
                        theme === "dark"
                          ? "bg-stone-800 border-stone-700 text-gray-300"
                          : "bg-white border-gray-300 text-gray-600"
                      }`}
                    >
                      {skill.icon}
                      {skill.name}
                    </div>
                  ))}
                </motion.div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 text-center border-t border-stone-800 border-dashed">
        <p className={theme === "dark" ? "text-gray-200" : "text-gray-600"}>
          Made with ❤️ by <span className="font-semibold">Izaaz</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
