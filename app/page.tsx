"use client"
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // GSAP animations on mount
  useEffect(() => {
    // Left section animation (fade in and slide up)
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

    // Right section animation (fade in and slide up)
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
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section */}
          <motion.div
            className="left-section space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Apurv Gaikwad
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200 leading-relaxed">
              Product Designer / Webflow Developer / <br />
              software Developer and engineer.
            </p>
            <p className="text-lg md:text-xl font-light text-gray-200 leading-relaxed">
              Currently working full-time as a software developer 
               at{" "}
              <Link href="#" className="underline text-blue-400 hover:text-blue-300 transition-colors">
                IIT chicago
              </Link>
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
              {["WORK", "ABOUT","CONTACT"].map((item, index) => (
                <motion.div
                  key={item}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/${item.toLowerCase()}`} className="group">
                    <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-serif leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
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