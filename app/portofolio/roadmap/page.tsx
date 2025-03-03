"use client";

import * as React from "react";
import { ClipboardList, BookOpen } from "lucide-react";
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
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Head from "next/head";

const Home = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState("qa");

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

  const qaItems = [
    {
      title: "Pengenalan QA",
      description:
        "Memahami dasar-dasar Quality Assurance dan perannya dalam pengembangan software.",
      icon: <ClipboardList className="text-green-500" size={24} />,
    },
    {
      title: "Dasar Pengujian Manual",
      description: "Belajar teknik pengujian manual dan penulisan test case.",
      icon: <ClipboardList className="text-green-500" size={24} />,
    },
    {
      title: "Pengenalan Automation",
      description:
        "Memahami konsep pengujian otomatis dan tools yang digunakan.",
      icon: <ClipboardList className="text-green-500" size={24} />,
    },
    {
      title: "UiPath Basics",
      description: "Belajar dasar-dasar UiPath untuk automation testing.",
      icon: <img src="/icons/uipath.png" alt="UiPath" className="w-15 h-6" />,
    },
    {
      title: "UiPath Advanced",
      description:
        "Menguasai fitur lanjutan UiPath seperti orchestrator dan integrasi CI/CD.",
      icon: <img src="/icons/uipath.png" alt="UiPath" className="w-15 h-6" />,
    },
    {
      title: "Playwright Basics",
      description: "Belajar dasar-dasar Playwright untuk end-to-end testing.",
      icon: (
        <img src="/icons/playwright.png" alt="Playwright" className="w-7 h-6" />
      ),
    },
    {
      title: "Playwright Advanced",
      description:
        "Menguasai fitur lanjutan Playwright seperti parallel testing dan integrasi dengan CI/CD.",
      icon: (
        <img src="/icons/playwright.png" alt="Playwright" className="w-7 h-6" />
      ),
    },
  ];

  const frontendItems = [
    {
      title: "HTML",
      description: "Learn the basics of HTML.",
      icon: <FaHtml5 className="text-orange-500" size={24} />,
    },
    {
      title: "CSS Dasar",
      description: "Understand basic CSS concepts.",
      icon: <FaCss3Alt className="text-blue-500" size={24} />,
    },
    {
      title: "CSS Layouting",
      description: "Master CSS layout techniques.",
      icon: <FaCss3Alt className="text-blue-500" size={24} />,
    },
    {
      title: "CSS 3",
      description: "Explore advanced CSS3 features.",
      icon: <FaCss3Alt className="text-blue-500" size={24} />,
    },
    {
      title: "Bootstrap",
      description: "Learn to use Bootstrap for responsive design.",
      icon: <FaBootstrap className="text-purple-500" size={24} />,
    },
    {
      title: "Flexbox CSS",
      description: "Understand Flexbox for layout management.",
      icon: <FaCss3Alt className="text-blue-500" size={24} />,
    },
    {
      title: "Git & Github",
      description: "Learn version control with Git and GitHub.",
      icon: <FaGitAlt className="text-red-500" size={24} />,
    },
    {
      title: "Tailwind CSS",
      description: "Master utility-first CSS with Tailwind.",
      icon: <SiTailwindcss className="text-teal-500" size={24} />,
    },
    {
      title: "Javascript Dasar",
      description: "Learn the basics of JavaScript.",
      icon: <SiJavascript className="text-yellow-500" size={24} />,
    },
    {
      title: "Javascript DOM",
      description: "Understand DOM manipulation with JavaScript.",
      icon: <SiJavascript className="text-yellow-500" size={24} />,
    },
    {
      title: "Javascript Lanjutan",
      description: "Explore advanced JavaScript concepts.",
      icon: <SiJavascript className="text-yellow-500" size={24} />,
    },
    {
      title: "React JS",
      description: "Master React for building user interfaces.",
      icon: <FaReact className="text-blue-500" size={24} />,
    },
    {
      title: "Typescript",
      description: "Learn TypeScript for type-safe JavaScript.",
      icon: <SiTypescript className="text-blue-500" size={24} />,
    },
  ];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } w-full font-inter overflow-hidden`}
    >
      <Head>
        <title>Izaaz Waskito | Roadmap</title>
      </Head>
      <div
        className={`container mx-auto px-4 min-h-screen border-l border-r ${
          theme === "dark" ? "border-stone-800" : "border-gray-200"
        } border-[0.5px] border-dashed border-t-0 border-b-0`}
      >
        {/* Header Section */}
        <MainNav />

        <div
          className={`absolute left-0 w-full border-t ${
            theme === "dark" ? "border-stone-800" : "border-gray-200"
          } border-dashed`}
        ></div>

        {/* Your content here */}
        <div className="flex pt-16">
          <motion.div
            className="my-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="flex space-x-4 mb-8">
              <Button
                onClick={() => setActiveCategory("qa")}
                className={`px-6 py-2 font-semibold transition-colors duration-300 border-transparent 
    hover:bg-gray-500 hover:text-white 
    dark:hover:bg-gray-700 dark:hover:text-white
    ${
      activeCategory === "qa"
        ? "bg-black text-white dark:bg-white dark:text-black"
        : "bg-white text-black dark:bg-black dark:text-white"
    }`}
              >
                QA Automation
              </Button>

              <Button
                onClick={() => setActiveCategory("frontend")}
                className={`px-6 py-2 font-semibold transition-colors duration-300 border-transparent 
    hover:bg-gray-500 hover:text-white 
    dark:hover:bg-gray-700 dark:hover:text-white
    ${
      activeCategory === "frontend"
        ? "bg-black text-white dark:bg-white dark:text-black"
        : "bg-white text-black dark:bg-black dark:text-white"
    }`}
              >
                Frontend
              </Button>
            </div>
            {/* Roadmap Section */}
            <h1
              className={`text-3xl font-bold pb-4 flex mt-8 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <BookOpen className="mr-2" />
              Learning Roadmap
            </h1>
            <div className="container mx-auto ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {activeCategory === "qa"
                  ? qaItems.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card
                          className={`w-full ${
                            theme === "dark"
                              ? "bg-stone-900 border-stone-800"
                              : "bg-gray-100 border-gray-200"
                          } hover:shadow-lg transition-shadow duration-300 min-h-[250px]`}
                        >
                          <CardHeader>
                            <div className="flex items-center space-x-4">
                              <div className="p-2">{item.icon}</div>
                              <CardTitle
                                className={
                                  theme === "dark" ? "text-white" : "text-black"
                                }
                              >
                                {item.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription
                              className={`min-h-[60px] ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.description}
                            </CardDescription>
                            <button
                              className={`mt-4 px-4 py-2 rounded-md ${
                                theme === "dark"
                                  ? "bg-stone-800 text-white hover:bg-stone-700"
                                  : "bg-gray-200 text-black hover:bg-gray-300"
                              } transition-colors duration-300`}
                            >
                              Learn More
                            </button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  : frontendItems.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card
                          className={`w-full ${
                            theme === "dark"
                              ? "bg-stone-900 border-stone-800"
                              : "bg-gray-100 border-gray-200"
                          } hover:shadow-lg transition-shadow duration-300 min-h-[250px]`}
                        >
                          <CardHeader>
                            <div className="flex items-center space-x-4">
                              <div className="p-2">{item.icon}</div>
                              <CardTitle
                                className={
                                  theme === "dark" ? "text-white" : "text-black"
                                }
                              >
                                {item.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription
                              className={`min-h-[60px] min-w-[350px] ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.description}
                            </CardDescription>
                            <button
                              className={`mt-4 px-4 py-2 rounded-md ${
                                theme === "dark"
                                  ? "bg-stone-800 text-white hover:bg-stone-700"
                                  : "bg-gray-200 text-black hover:bg-gray-300"
                              } transition-colors duration-300`}
                            >
                              Learn More
                            </button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <footer
        className={`w-full py-4 text-center border-t ${
          theme === "dark" ? "border-stone-800" : "border-gray-200"
        } border-dashed overflow-hidden`}
      >
        <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
          Made with ❤️ by <span className="font-semibold">Izaaz</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
