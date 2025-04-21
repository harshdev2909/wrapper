"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  // GSAP animations on mount
  useEffect(() => {
    // Main content animation (fade in and slide up)
    gsap.fromTo(
      ".contact-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  // Framer Motion variants for text and links
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const linkVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, color: "#93c5fd", transition: { duration: 0.3 } },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            className="contact-section space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-serif leading-[0.85] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Hello.
            </motion.h1>
            <motion.p
              className="text-xl font-light leading-relaxed max-w-lg text-gray-200"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 }}
            >
              Looking to build a scalable, full-stack application or integrate AI into your project? Let’s connect to bring your ideas to life.
            </motion.p>
            <motion.div
              className="space-y-4 pt-8"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              <div>
                <p className="text-lg font-light text-gray-200">Email:</p>
                <motion.div variants={linkVariants} initial="initial" animate="animate" whileHover="hover">
                  <Link
                    href="mailto:legendarywaller@gmail.com"
                    className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
                  >
                    apurvgaikwad03@gmail.com
                  </Link>
                </motion.div>
              </div>
              <div>
                <p className="text-lg font-light text-gray-200">On the Internet:</p>
                <div className="flex flex-wrap gap-x-2 text-lg">
                  {[
                    { href: "https://linkedin.com", text: "LinkedIn" },
                    { href: "https://instagram.com", text: "Instagram" },
                    { href: "https://twitter.com", text: "Twitter" },
                    { href: "https://github.com", text: "GitHub" },
                  ].map((link, index) => (
                    <motion.div
                      key={link.text}
                      variants={linkVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
                      >
                        {link.text}
                      </Link>
                      {index < 3 && " /"}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}