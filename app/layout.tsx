import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Apurv Gaikwad | Product Designer & Developer",
  description: "Product Designer / Webflow Developer / Software developer",
    generator: 'Apurv'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <div className="flex min-h-screen bg-[#f5f3ef] text-[#1a1a1a]">
          <div className="fixed left-0 top-0 bottom-0 w-[60px] md:w-[80px] flex flex-col justify-between py-6 px-4 border-r border-[#e0ddd7]">
            <div className="flex flex-col items-center gap-6">
              <Link
                href="/"
                className="rotate-180 text-xs tracking-widest uppercase"
                style={{ writingMode: "vertical-rl" }}
              >
                TL
              </Link>
              <Link
                href="/work"
                className="rotate-180 text-xs tracking-widest uppercase"
                style={{ writingMode: "vertical-rl" }}
              >
                TW
              </Link>
              <Link
                href="/about"
                className="rotate-180 text-xs tracking-widest uppercase"
                style={{ writingMode: "vertical-rl" }}
              >
                DR
              </Link>
            </div>
            <div className="rotate-180 text-xs tracking-widest" style={{ writingMode: "vertical-rl" }}>
              ©/2025
            </div>
          </div>
          <div className="flex-1 ml-[60px] md:ml-[80px]">{children}</div>
        </div>
      </body>
    </html>
  )
}
