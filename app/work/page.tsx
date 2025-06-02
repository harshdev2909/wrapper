"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeToggle from "../ThemeToggle";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
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

  // Framer Motion variants for project links
  const projectVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto relative">
        {/* Theme Toggle Button */}
        <div className="top-0 right-0">
          <ThemeToggle />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Section */}
          <motion.div
            className="left-section space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
              WORK
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-[hsl(var(--foreground))]">
              This is a showcase of my best work in a variety of fields including A.I and Web Design, full stack
              Development, Product Design and Product Management.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-[hsl(var(--foreground))]">
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
                  <h2 className="text-[4rem] md:text-[5rem] lg:text-[5rem] font-serif leading-[1.85] bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] group-hover:from-[hsl(var(--secondary))] group-hover:to-[hsl(var(--primary))] transition-all duration-300">
                    {project.title}
                  </h2>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="text-sm uppercase tracking-wider text-[hsl(var(--muted-foreground))]">– {project.type}</span>
                    <span className="text-sm uppercase tracking-wider text-[hsl(var(--muted-foreground))]">– {project.disc}</span>
                    {project.isNew && (
                      <span className="ml-4 px-2 py-0.5 text-xs uppercase tracking-wider bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-[hsl(var(--primary-foreground))] rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  {/* Tech Stack Section */}
                  <div className="mt-4 flex flex-wrap space-x-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold uppercase tracking-wide border border-gray-300 dark:border-gray-600 bg-gray-200/50 dark:bg-gray-800/50 rounded-full text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
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

const projects =[
  {
    id: "apurvA.I",
    title: "ApurvA.I",
    type: "Full stack development",
    isNew: false,
    disc: "ApurvA.I is a full-stack AI powered web application",
    techStack: ["Python", "Langchain", "NextJs", "Gemini", "Transforms", "FastAPI", "TailwindCSS", "PostgreSQL", "GitHub"]
  },
  {
    id: "c-garage",
    title: "C-garage",
    type: "Full stack development",
    isNew: true,
    disc: "C-Garage is a full-stack car rental web application",
    techStack: ["Next.js", "TypeScript", "Express", "MongoDB", "TailwindCSS", "Node.js", "Razorpay", "GitHub"]
  },
  {
    id: "vehicle",
    title: "Vehicle Explorer",
    type: "Full stack App development",
    isNew: true,
    disc: "A Flutter mobile application that retrieves and displays vehicle manufacturers",
    techStack: ["Flutter", "Dart", "NHTSA vPIC REST API", "HTTP (Flutter package)", "Provider", "SharedPreferences", "Hive", "Git", "GitHub"]
  },
  {
    id: "bplus-tree",
    title: "B+ Tree Manager",
    type: "Systems Programming",
    isNew: false,
    disc: "Simplified B⁺ tree index manager with support for creation, insertion, deletion, search, and sorted key scanning",
    techStack: ["C", "Data Structures", "File I/O", "GitHub"]
  },
  {
    id: "growbud",
    title: "Grow Bud",
    type: "AI Mobile App",
    isNew: false,
    disc: "AI-driven plant care app with photo analysis, climate-based recommendations, and eco-friendly gardening metrics",
    techStack: ["Flutter", "Dart", "TensorFlow Lite", "Firebase", "REST API", "GitHub"]
  },
  {
    id: "ecosound",
    title: "EcoSound Festival Travel Analysis",
    type: "Data Science",
    isNew: false,
    disc: "Recognized by UK Government, uses Power BI and R/XGBoost for low-carbon travel recommendations based on emissions data",
    techStack: ["R", "Power BI", "XGBoost", "Pandas", "GitHub"]
  },
  {
    id: "record-manager",
    title: "Record Manager",
    type: "Systems Programming",
    isNew: false,
    disc: "Manages fixed-schema tables with support for insert, delete, update, and scanning using a tombstone mechanism",
    techStack: ["C", "File Systems", "Custom Storage Engine", "GitHub"]
  },
  {
    id: "buffer-manager",
    title: "Buffer Manager",
    type: "Systems Programming",
    isNew: false,
    disc: "Handles multiple buffer pools with FIFO and LRU page replacement strategies",
    techStack: ["C", "Memory Management", "LRU/FIFO Algorithms", "GitHub"]
  },
  {
    id: "storage-manager",
    title: "Storage Manager",
    type: "Systems Programming",
    isNew: false,
    disc: "Manages page files with fixed-size pages, including creation, reading, writing, and deletion operations",
    techStack: ["C", "File I/O", "Page Management", "GitHub"]
  },
  {
    id: "stock-predictor",
    title: "Stock Market Prediction",
    type: "ML + Web App",
    isNew: false,
    disc: "LSTM-based stock market prediction with real-time analysis and interactive web UI",
    techStack: ["Python", "LSTM", "Flask", "React", "Pandas", "Matplotlib", "GitHub"]
  },
  {
    id: "nonprofit-network",
    title: "NonprofitNetwork Platform",
    type: "Full stack development",
    isNew: false,
    disc: "Connects nonprofits with donors and volunteers, featuring event management, fundraising, and AI support",
    techStack: ["Node.js", "Express", "MongoDB", "React", "TailwindCSS", "OpenAI API", "GitHub"]
  }
]
