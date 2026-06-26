import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syed Shahid Hassan | FIA Director, Cybercrime Expert & CSS Mentor",
  description:
    "Syed Shahid Hassan, Former Additional Director, Federal Investigation Agency (FIA). Over three decades in cybercrime investigation and anti-corruption. Now mentoring CSS/PPSC aspirants and advising on cybercrime, PECA compliance, and forensic investigation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-charcoal selection:bg-gold/30 selection:text-navy`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
