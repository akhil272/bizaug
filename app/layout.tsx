import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const doto = localFont({
  src: "fonts/doto.ttf",
  variable: "--font-doto",
});

export const metadata: Metadata = {
  title: "BizAug | Business Augmented",
  description:
    "Unlock new possibilities with AI-driven digital transformation. BizAug helps businesses streamline operations, enhance digital presence, and drive growth with custom web applications, UI/UX design, mobile solutions, digital marketing, and workflow automation. Discover impactful strategies tailored to empower your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
