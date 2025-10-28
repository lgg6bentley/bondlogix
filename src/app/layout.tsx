import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BondLogix | Trust, Audited",
  description: "Audit delivery with mythic clarity and broadcast-grade precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-trust text-signal font-sans antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Optional: Add <Header /> here */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

