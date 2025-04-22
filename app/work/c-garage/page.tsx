"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeToggle from "../../ThemeToggle";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Updated project data for C-Garage as a car rental website
  const project = {
    id: params.id,
    title: "C-Garage",
    category: "Full Stack Development",
    description:
      "C-Garage is a full-stack car rental web application designed to simplify the process of renting vehicles. Built with a modern tech stack, it offers a seamless user experience with features like car selection, real-time booking, secure payment integration, and comprehensive admin and user dashboards for managing rentals and operations.",
    liveLink: "https://c-garge.vercel.app/register",
    images: [
      "/c1.png?height=800&width=1200",
      "/c2.png?height=800&width=1200",
      "/c3.png?height=800&width=1200",
    ],
    details: [
      {
        title: "Car Selection Interface",
        text: "The intuitive interface allows users to browse and select from a wide range of vehicles, with filters for price, type, and availability, ensuring a smooth rental experience across devices.",
      },
      {
        title: "Booking & Dashboards",
        text: "A real-time booking system enables users to reserve cars effortlessly, while dedicated admin and user dashboards provide tools for managing bookings, tracking rentals, and viewing analytics.",
      },
      {
        title: "Payment Gateway",
        text: "Secure payment gateways support multiple payment methods, ensuring safe and convenient transactions for users, with real-time payment confirmation and invoicing.",
      },
    ],
  };

  // GSAP animations on mount
  useEffect(() => {
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
    <main className="flex min-h-screen flex-col project-page-light text-[hsl(var(--foreground))] pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-8 relative">
        {/* Theme Toggle Button */}
        <div className="absolute top-0 right-0">
          <ThemeToggle />
        </div>

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
            className="inline-flex items-center text-sm font-light bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:from-[hsl(var(--secondary))] hover:to-[hsl(var(--primary))] transition-all duration-300"
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
          <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
            {project.title}
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">{project.category}</p>
        </motion.div>

        {/* Project Description */}
        <motion.div
          className="description-section mb-16"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
        >
          <p className="text-lg font-light max-w-3xl text-[hsl(var(--foreground))]">{project.description}</p>
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
                  className="object-cover rounded-lg border-[hsl(var(--border))]"
                />
              </div>
              <div className="max-w-3xl">
                <h3 className="text-xl font-light mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                  {project.details[index].title}
                </h3>
                <p className="text-base font-light text-[hsl(var(--foreground))]">{project.details[index].text}</p>
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
            className="inline-block px-6 py-3 text-sm font-light bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-[hsl(var(--primary-foreground))] rounded-lg hover:from-[hsl(var(--secondary))] hover:to-[hsl(var(--primary))] transition-all duration-300"
          >
            View Live Project
          </Link>
        </motion.div>
      </div>
    </main>
  );
}