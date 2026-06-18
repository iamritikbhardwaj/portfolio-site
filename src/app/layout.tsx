import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import PersonSchema from "./person-schema";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
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
    "Backend, Cloud and Full-Stack Development Services. Specialized in Golang, Node.js, Microservices, AWS, DevOps and scalable web applications.",

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
      "Backend, Cloud and Full-Stack Development Services. Specialized in Golang, Node.js, Microservices, AWS and DevOps.",

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
      "Backend, Cloud and Full-Stack Development Services. Specialized in Golang, Node.js, Microservices, AWS and DevOps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased font-body-md text-body-md text-on-surface bg-background overflow-x-hidden selection:bg-primary selection:text-on-primary`}
      >
        <PersonSchema />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
