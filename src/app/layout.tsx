import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import PersonSchema from "./person-schema";
import { Analytics } from "@vercel/analytics/react";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codecraftedlabs.co.in"),

  title: {
    default: "Code Crafted Labs",
    template: "%s | Code Crafted Labs",
  },

  category: "Software Development",

  verification: {
    google:
      "google-site-verification=Q6BbeDnsn-OOvu6JSQHLZ1569q4Wa1JMOfAXNR8jmMw",
  },

  description:
    "Code Crafted Labs builds scalable backend systems, cloud architecture, and full-stack products using Go, Node.js, AWS, and microservices.",

  keywords: [
    "Backend Developer",
    "Golang Developer",
    "Go Developer",
    "Node.js Developer",
    "Cloud Engineer",
    "AWS Developer",
    "Microservices",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "DevOps Engineer",
    "Software Architect",
    "Scalable Systems",
  ],

  authors: [
    {
      name: "Ritik Singh",
      url: "https://codecraftedlabs.co.in",
    },
  ],

  creator: "Ritik Singh",
  publisher: "Code Crafted Labs",

  icons: {
    icon: "/ccl-logo.png",
    apple: "/ccl-logo.png",
  },

  alternates: {
    canonical: "https://codecraftedlabs.co.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Code Crafted Labs",
    description:
      "Code Crafted Labs builds scalable backend systems, cloud architecture, and full-stack products using Go, Node.js, AWS, and microservices.",

    url: "https://codecraftedlabs.co.in",

    siteName: "Code Crafted Labs",
    images: [
      {
        url: "https://www.codecraftedlabs.co.in/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Code Crafted Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Code Crafted Labs",

    images: ["https://codecraftedlabs.co.in/opengraph-image.png"],

    description:
      "Code Crafted Labs builds scalable backend systems, cloud architecture, and full-stack products using Go, Node.js, AWS, and microservices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>

      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-body-md text-primary bg-primary-bg selection:bg-accent-lime selection:text-black overflow-x-hidden`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-bg focus:text-accent-lime focus:outline focus:outline-2 focus:outline-accent-lime">
          Skip to content
        </a>
        <PersonSchema />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
