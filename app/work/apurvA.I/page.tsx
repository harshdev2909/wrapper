"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Project data for AI CourseGen
  const project = {
    id: params.id,
    title: "ApurvA.I",
    category: "Full Stack Development",
    description:
      "ApurvA.I is a full-stack web application that empowers users to master AI through personalized learning roadmaps and free course recommendations. Leveraging Google LLMs and Grok API via LangChain, it generates tailored course content, while PyTorch and TensorFlow power fine-tuned recommendation models. The platform curates free, high-quality AI courses from platforms like Coursera and YouTube, ensuring accessible education for all.",
    liveLink: "https://ai-frontend-flame-two.vercel.app/",
    images: [
      "/a1.png?height=800&width=1200",
      "/a2.png?height=800&width=1200",
      "/a3.png?height=800&width=1200",
    ],
    details: [
      {
        title: "Course Content Generator",
        text: "Using Google LLMs and Grok API integrated via LangChain, the platform generates customized AI course modules based on user skill levels and learning goals, ensuring relevant and engaging content.",
      },
      {
        title: "Learning Roadmap Interface",
        text: "A dynamic interface presents structured learning paths with milestones, powered by PyTorch and TensorFlow models that adapt roadmaps to user progress and preferences.",
      },
      {
        title: "Course Recommendation System",
        text: "The system employs LangChain’s retrieval-augmented generation (RAG) to recommend free AI courses from external platforms, with fine-tuned models ensuring high relevance and quality.",
      },
    ],
  };

  // GSAP animations on mount
  useEffect(() => {
    // Header section animation
    gsap.fromTo(
      ".header-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".header-section",
          start: "top 80%",
        },
      }
    );

    // Description section animation
    gsap.fromTo(
      ".description-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".description-section",
          start: "top 80%",
        },
      }
    );

    // Image and text sections animation
    gsap.fromTo(
      ".image-text-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-text-section",
          start: "top 80%",
        },
      }
    );

    // Live link section animation
    gsap.fromTo(
      ".live-link-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".live-link-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  // Framer Motion variants for links and sections
  const linkVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-8">
        {/* Back Link */}
        <motion.div
          className="header-section mb-12"
          variants={linkVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-light bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="header-section mb-16"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-400">{project.category}</p>
        </motion.div>

        {/* Project Description */}
        <motion.div
          className="description-section mb-16"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
        >
          <p className="text-lg font-light max-w-3xl text-gray-200">{project.description}</p>
        </motion.div>

        {/* Images and Text Sections */}
        <div className="space-y-16">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="image-text-section"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative aspect-[16/9] mb-8">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="max-w-3xl">
                <h3 className="text-xl font-light mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {project.details[index].title}
                </h3>
                <p className="text-base font-light text-gray-200">{project.details[index].text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Project Link */}
        <motion.div
          className="live-link-section mt-16"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
        >
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-sm font-light bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
          >
            View Live Project
          </Link>
        </motion.div>
      </div>
    </main>
  );
}