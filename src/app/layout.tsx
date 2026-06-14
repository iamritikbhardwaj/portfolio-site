import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Crafted Labs | High-Performance Software Engineering",
  description: "We specialize in building robust distributed backends, DevOps pipelines, and AI engineering services.",
  keywords: ["Software Engineering", "Microservices", "DevOps", "Next.js", "React", "Golang", "Node.js"],
  authors: [{ name: "Ritik Singh" }],
  openGraph: {
    title: "Code Crafted Labs",
    description: "High-Performance Software Engineering Agency",
    url: "https://www.codecraftedlabs.co.in",
    siteName: "Code Crafted Labs",
    images: [{ url: "/ccl-logo.png", width: 1400, height: 1400 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Crafted Labs",
    description: "High-Performance Software Engineering Agency",
  },
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
        {children}
        
      </body>
    </html>
  );
}
