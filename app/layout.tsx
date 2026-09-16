import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import "./globals.css"
import { calSans } from "./fonts"
import Footer from "@/components/footer"
import Header from "@/components/header"
import TargetCursorRoot from "@/components/target-cursor-root"

export const metadata: Metadata = {
  title: "Product Design Portfolio",
  description: "A minimalist product design portfolio",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={calSans.variable} suppressHydrationWarning>
      <body
        className={`${calSans.className} min-h-screen bg-white text-slate-900`}
        suppressHydrationWarning
      >
        <TargetCursorRoot />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
