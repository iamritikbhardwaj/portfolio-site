import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import PersonSchema from "./person-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codecraftedlabs.co.in"),

  title: {
    default: "Code Crafted Labs",
    template: "%s | Code Crafted Labs",
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
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "../../public/ccl-logo.png",
        href: "/ccl-logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "../../public/ccl-logo-dark.png",
        href: "/ccl-logo-dark.png",
      },
    ],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PersonSchema />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
