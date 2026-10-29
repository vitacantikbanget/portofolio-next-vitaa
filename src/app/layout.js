import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
title: {
default: "Desvita Putri | Portofolio",
template: "%s | Desvita Putri Wulandari",
},
description: "Portofolio Desvita Putri Wulandari, siswa SMK Negeri 1 Pasuruan calon Junior Web Developer di kelas industri UBIG.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
