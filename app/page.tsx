"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeToggle from "./ThemeToggle";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // GSAP animations on mount
  useEffect(() => {
    gsap.fromTo(
      ".left-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".left-section",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".right-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".right-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  // Framer Motion variants for links
  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[hsl(var(--background))] animated-bg p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto relative">
        {/* Theme Toggle Button */}
        <div className=" top-0 right-2">
          <ThemeToggle />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section */}
          <motion.div
            className="left-section space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
              Apurv Gaikwad
            </h1>
            <p className="text-lg md:text-xl font-light text-[hsl(var(--foreground))] leading-relaxed">
            Data Scientist / DevOps / <br />
              Software Developer and Engineer.
            </p>
            <p className="text-lg md:text-xl font-light text-[hsl(var(--foreground))] leading-relaxed">
              Currently working full-time as a software developer at{" "}
              <motion.span
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Link
                  href="#"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:from-[hsl(var(--secondary))] hover:to-[hsl(var(--primary))] transition-all duration-300"
                >
                  IIT Chicago
                </Link>
              </motion.span>
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="right-section space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-4">
              {["WORK", "ABOUT", "CONTACT"].map((item, index) => (
                <motion.div
                  key={item}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/${item.toLowerCase()}`} className="group">
                    <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-serif leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] group-hover:from-[hsl(var(--secondary))] group-hover:to-[hsl(var(--primary))] transition-all duration-300">
                      {item}
                    </h2>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}