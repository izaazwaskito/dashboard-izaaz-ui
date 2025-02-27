"use client";

import * as React from "react";
import { Code, Search, TestTube2, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { MainNav } from "@/components/navigation/MainNav";
import VerifyBadge from "@/components/ui/verifybadge";

const Home = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
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

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } w-full font-inter overflow-hidden`}
    >
      <div className="container mx-auto px-4 min-h-screen border-l border-r border-stone-800 border-[0.5px] border-dashed border-t-0 border-b-0">
        {/* Header Section */}
        <MainNav />

        <div className="absolute left-0 w-full border-t border-stone-800 border-dashed"></div>
        {/* Konten Anda di sini */}
        <div className="flex justify-center items-center min-h-screen">
          <motion.div
            className="my-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl font-bold pb-4 flex items-center justify-center">
              <Code2 className="mr-2" />
              Hello, I&apos;m Izaaz!
              <VerifyBadge/>
            </h1>
            <p className="text-lg mb-8">
              Welcome to my personal space. I&apos;m a Frontend Developer and QA Specialist passionate about creating seamless user experiences and ensuring software quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frontend Development Card */}
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
                    <Code className="mr-2 inline" />
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Crafting beautiful and responsive user interfaces using modern technologies like React and Tailwind CSS.
                  </p>
                </CardContent>
              </Card>

              {/* UI Testing Card */}
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
                    <TestTube2 className="mr-2 inline" />
                    UI Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Ensuring the quality and usability of user interfaces through comprehensive testing strategies.
                  </p>
                </CardContent>
              </Card>

              {/* API Testing Card */}
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
                    <Search className="mr-2 inline" />
                    API Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Verifying the functionality, reliability, and performance of APIs to ensure seamless integration.
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