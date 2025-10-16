import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ManaForge - Bangun dan Bagikan Deck Magic: The Gathering Terbaikmu",
  description: "Website deckbuilder MTG gratis untuk merancang, mengoptimasi, dan berbagi deck Magic: The Gathering. Analisis mana curve, simulasi tangan pembuka, dan temukan inspirasi dari komunitas.",
  keywords: 'magic the gathering, mtg, deckbuilder, deck building, tcg, card game, deck mtg, magic arena, commander deck, standard mtg, modern mtg',
  authors: [
    { name: 'shena', url: 'https://shena-portofolio.vercel.app/' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full fixed top-0 left-0 bg-[#8f23af] z-[999]">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
