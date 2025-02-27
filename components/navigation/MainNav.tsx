"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Github, Moon, Sun, Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavState } from "./useNavState";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
export const MainNav = () => {
  const { theme, setTheme } = useTheme();
  const { isMenuOpen, toggleMenu } = useNavState();
  const pathname = usePathname();
  const [language, setLanguage] = useState("ID");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="relative flex items-center justify-between pt-2 pb-2">
        {/* Menu untuk Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/portofolio/about" },
                { name: "Projects", path: "/portofolio/projects" },
                { name: "Contact", path: "/portofolio/contacts" },
              ].map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link href={item.path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-lg px-6 py-3 font-medium bg-transparent ${
                        pathname === item.path
                          ? "text-blue-500 font-semibold"
                          : ""
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo Tengah (PC & Mobile) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" passHref>
            <img
              src="/logo.png"
              alt="Logo"
              className={`h-8 md:h-10 ${theme === "dark" ? "invert" : ""}`}
            />
          </Link>
        </div>

        {/* Tombol Menu Mobile */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="md:hidden"
        >
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Tombol kanan (Theme & GitHub) */}
        <div className="flex items-center gap-3">
          {/* Dropdown untuk Mobile */}
          <div className="md:hidden relative">
            <Button variant="ghost" size="icon" onClick={toggleDropdown}>
              {isDropdownOpen ? (
                <ChevronUp className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <ChevronDown className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle dropdown</span>
            </Button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute right-0 mt-2 w-48 bg-background border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50"
              >
                <div className="p-2 flex flex-col gap-2">
                  {/* Baris pertama */}
                  <div className="flex w-full gap-2">
                    <Button
                      variant="ghost"
                      className="w-1/4 justify-start"
                      onClick={() =>
                        setLanguage(language === "ID" ? "EN" : "ID")
                      }
                    >
                      {language === "ID" ? "EN" : "ID"}
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-3/4 justify-start"
                      onClick={toggleTheme}
                    >
                      {theme === "dark" ? (
                        <Sun className="h-[1.2rem] w-[1.2rem] mr-2" />
                      ) : (
                        <Moon className="h-[1.2rem] w-[1.2rem] mr-2" />
                      )}
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </Button>
                  </div>

                  {/* Baris kedua */}
                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-center gap-2 text-center"
                    onClick={() =>
                      window.open("https://github.com/izaazwaskito", "_blank")
                    }
                  >
                    <Github className="h-[1.2rem] w-[1.2rem]" />
                    <span className="text-center">GitHub</span>
                  </Button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Tombol untuk Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
            >
              {language === "ID" ? "EN" : "ID"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                window.open("https://github.com/izaazwaskito", "_blank")
              }
            >
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu Mobile dengan Animasi */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="md:hidden mt-4"
        >
          <NavigationMenu>
            <NavigationMenuList className="flex flex-start gap-2 w-screen pb-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/portofolio/about" },
                { name: "Projects", path: "/portofolio/projects" },
                { name: "Contact", path: "/portofolio/contacts" },
              ].map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link href={item.path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-lg px-6 py-3 font-medium w-full text-center bg-transparent ${
                        pathname === item.path
                          ? "text-blue-500 font-semibold"
                          : ""
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
        </motion.div>
        
      )}
    </>
  );
};
