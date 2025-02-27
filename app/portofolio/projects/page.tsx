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
        {/* Your content here */}
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
              {/* Project 1 */}
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
                    Developing and managing automated test scripts for Bank Mandiri's internal applications using UiPath and Playwright. Responsible for integrating automated testing into the CI/CD pipeline.
                  </p>
                </CardContent>
              </Card>

              {/* Project 2 */}
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
                    E-Commerce Web Application Testing
                  </CardTitle>
                  <CardDescription
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Freelance Project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    Created automated test scripts for an e-commerce application using Playwright. Focused on testing shopping cart functionality, payment processes, and API integration.
                  </p>
                </CardContent>
              </Card>

              {/* Project 3 */}
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
                    CI/CD Pipeline Optimization
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
                    Improved CI/CD pipeline efficiency by integrating automated testing and ensuring fast and reliable test execution. Used tools like Jenkins and GitLab CI.
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
