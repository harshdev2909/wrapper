// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // Import the new client component

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apurv Gaikwad | Software Developer ",
  description: "Product Designer / Webflow Developer / Software developer",
  generator: "Apurv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <div className="flex min-h-screen">
          <div className="fixed left-0 top-0 bottom-0 w-[60px] md:w-[80px] flex flex-col justify-between py-6 px-4 border-r">
            <div className="flex flex-col items-center gap-6">
              <Link
                href="/"
                className="rotate-180 text-xs tracking-widest uppercase"
                style={{ writingMode: "vertical-rl" }}
              >
                HOME
              </Link>
              <Link
                href="/work"
                className="rotate-180 text-xs tracking-widest uppercase"
                style={{ writingMode: "vertical-rl" }}
              >
                WORK
              </Link>
              <Link
                href="/about"
                className="rotate-180 text-xs tracking-widest uppercase"
                style={{ writingMode: "vertical-rl" }}
              >
                ABOUT
              </Link>
            </div>
            <div className="flex flex-col items-center gap-8">
              <ThemeToggle /> {/* Use the client component */}
              <div
                className="rotate-180 text-xs tracking-widest"
                style={{ writingMode: "vertical-rl" }}
              >
                ©/2025
              </div>
            </div>
          </div>
          <div className="flex-1 ml-[60px] md:ml-[80px]">{children}</div>
        </div>
      </body>
    </html>
  );
}