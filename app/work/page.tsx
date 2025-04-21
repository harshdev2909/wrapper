"use client"
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
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

  // Framer Motion variants for project links
  const projectVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Section */}
          <motion.div
            className="left-section space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              WORK
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
              This is a showcase of my best work in a variety of fields including A.I and Web Design, full stack
              Development, Product Design and Product Management.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
              The world of digital design and development is constantly evolving and so has my role over the last 3
              years. I'm still learning and gaining new skills every day.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="right-section space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/work/${project.id}`} className="block group">
                  <h2 className="text-[4rem] md:text-[5rem] lg:text-[7rem] font-serif leading-[1.85] bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h2>
                  <div className="flex items-center mt-2">
                    <span className="text-sm uppercase tracking-wider text-gray-400">– {project.type}</span>
                    {project.isNew && (
                      <span className="ml-4 px-2 py-0.5 text-xs uppercase tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

const projects = [
  {
    id: "apurvA.I",
    title: "ApurvA.I",
    type: "Full stack development",
    isNew: false,
  },
  {
    id: "c-garage",
    title: "C-garage",
    type: "Full stack development",
    isNew: true,
  }
];