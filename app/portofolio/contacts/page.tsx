"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MainNav } from "@/components/navigation/MainNav";
import Head from "next/head";

// Variants for Card animation
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Variants for Accordion animation
const accordionVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contacts = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } w-full font-inter overflow-hidden`}
    >
      <Head>
        <title>Izaaz Waskito | Contact</title>
      </Head>
      <div className="container mx-auto px-4 min-h-screen border-x border-stone-800 border-dashed">
        {/* Header */}
        <MainNav />

        {/* Horizontal border line */}
        <div className="absolute left-0 w-full border-t border-stone-800 border-dashed"></div>

        {/* Center content */}
        <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card
              className={`${
                theme === "dark"
                  ? "bg-stone-900 border-stone-800 text-gray-300"
                  : "bg-gray-100 border-gray-200 text-gray-600"
              } w-full lg:w-[500px] md:w-full max-h-[90vh] p-6 md:p-8 shadow-lg overflow-y-auto`}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value="about-me">
                  <AccordionTrigger>Who is Izaaz?</AccordionTrigger>
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <AccordionContent>
                      I am a QA Automation Engineer at Mandiri, focusing on test
                      automation and software quality analysis. I also share my
                      dashboard on LinkedIn.
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
                <AccordionItem value="skills">
                  <AccordionTrigger>
                    What are my skills besides QA Automation?
                  </AccordionTrigger>
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <AccordionContent>
                      I have experience in test automation, test script
                      development, and test result analysis. I am also
                      proficient in Next.js, JavaScript (Node.js), and various
                      testing tools.
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
                <AccordionItem value="contact">
                  <AccordionTrigger>How can you contact me?</AccordionTrigger>
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <AccordionContent>
                      You can reach me via LinkedIn or email.
                      <br />
                      📩 <strong>Email:</strong> [izaaz.waskito@gmail.com] 🔗{" "}
                      <strong>LinkedIn:</strong>{" "}
                      <a
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        className="text-blue-500 underline"
                      >
                        Izaaz Waskito
                      </a>
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
              </Accordion>
            </Card>
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

export default Contacts;
