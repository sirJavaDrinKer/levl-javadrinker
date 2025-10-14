import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEVL GENESIS",
  description: "By JavaDrinker",
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

        <Header />

        {children}
        
        <div className="fixed bottom-0 left-0 w-full h-10 bg-white z-40" />
        <div className="fixed bottom-10 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-30" />
        <Footer />
        
      </body>
    </html>
  );
}
