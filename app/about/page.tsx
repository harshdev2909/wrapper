"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
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

  // Framer Motion variants for text, quote, and image with enhanced animations
  const textVariants = {
    initial: { opacity: 0, y: 20, skewY: 2 },
    animate: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 20, x: -10 },
    animate: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.9] } }, // Custom ease (back.out-like)
    hover: { x: 5, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95, rotate: -2 },
    animate: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]  text-[hsl(var(--foreground))] p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Section */}
          <motion.div
            className="left-section space-y-8"
            initial={{ opacity: 0, skewX: 3 }}
            animate={{ opacity: 1, skewX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-[5rem] md:text-[8rem] font-serif leading-[0.85] bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0 }}
            >
              About
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-5xl font-serif leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              {/* I'm Apurv. A software developer, innovator, and problem solver. */}
            </motion.h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-[hsl(var(--foreground))]">
              <motion.p
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: 0.4 }}
              >
                Hello, I’m Apurv Gaikwad an engineer at the intersection of cloud technologies, data science, and software quality assurance. My journey into the world of tech started with a fascination for how things work, leading me to explore and master the tools that shape modern applications. Over the years, I’ve evolved from writing basic scripts to architecting scalable systems and building intelligent, data-driven solutions.
              </motion.p>
              <motion.p
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: 0.6 }}
              >
                My focus is on using cloud platforms like AWS to build powerful infrastructures, applying data science to generate meaningful insights, and ensuring the software I create meets the highest quality standards. I’m passionate about harnessing the potential of AI and machine learning to elevate user experiences, and I take pride in building solutions that not only work but thrive in real-world environments.

              </motion.p>
              <motion.p
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: 0.8 }}
              >
                In my career, I’ve had the privilege of working across multiple domains from full-stack development to implementing automated testing and ensuring system reliability at scale. I approach each project with a mindset of continuous learning, always staying ahead of industry trends and applying the latest technologies to solve complex challenges.

              </motion.p>
            </div>
            <motion.div
              className="space-y-4"
              variants={textVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: 1.0 }}
            >
              <p className="text-lg font-light text-[hsl(var(--foreground))]">
                
I believe technology is a tool for making the world a better place, and my goal is to create software that has a lasting, positive impact. When I’m not coding, I’m exploring new advancements in tech, traveling, and embracing diverse perspectives.


              </p>
              <blockquote className="text-3xl md:text-4xl font-serif leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                "If you're looking to collaborate on impactful projects or explore new solutions, let’s connect and create something extraordinary."
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="right-section lg:pt-24"
            initial={{ opacity: 0, skewX: -3 }}
            animate={{ opacity: 1, skewX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-[3/4] w-full"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Developer coding setup"
                fill
                className="object-cover rounded-lg border-[hsl(var(--border))]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}