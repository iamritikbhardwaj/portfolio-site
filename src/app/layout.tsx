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
  metadataBase: new URL("https://www.codecraftedlabs.co.in"),
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
  icons: {
    icon: [
      { url: "/icon.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.codecraftedlabs.co.in/#person",
      "name": "Ritik Singh",
      "url": "https://www.codecraftedlabs.co.in",
      "sameAs": [
        "https://github.com/iamritikbhardwaj",
        "https://www.linkedin.com/in/ritik-singh-10b333227/"
      ],
      "jobTitle": "Chief Technology Officer",
      "worksFor": {
        "@type": "Organization",
        "name": "Code Crafted Labs"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.codecraftedlabs.co.in/#website",
      "url": "https://www.codecraftedlabs.co.in",
      "name": "Code Crafted Labs",
      "publisher": {
        "@id": "https://www.codecraftedlabs.co.in/#person"
      }
    }
  ]
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.codecraftedlabs.co.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
