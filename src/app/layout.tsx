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
  title: "Ritik Singh | Full Stack Developer | React, Node.js, JavaScript, MongoDB",
  description: "Created by Ritik Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Ritik Singh" />
    <meta name="publisher" content="Ritik Singh" />
    <meta
      name="description"
      content="Explore the portfolio of Ritik Singh, a skilled Full Stack Developer with expertise in React, Node.js, JavaScript, MongoDB, and more. Check out innovative projects, coding skills, and technology stack."
    />
    <meta
      name="keywords"
      content="Full Stack Developer, React Developer, Node.js, MongoDB, JavaScript, ExpressJS, Web Developer Portfolio, Frontend, Backend Developer"
    />
    <meta
      property="og:title"
      content="Ritik Singh | Full Stack Developer Portfolio"
    />
    <meta
      property="og:description"
      content="Explore Ritik Singh's portfolio showcasing full-stack development expertise with React, Node.js, MongoDB, and more."
    />
    <meta property="og:url" content="https://www.iamritikbhardwaj.github.io/" />
    <meta property="og:image" content="URL_to_image_of_your_site_thumbnail" />

    {/* <!-- Twitter Card Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Ritik Singh | Full Stack Developer Portfolio"
    />
    <meta
      name="twitter:description"
      content="Explore Ritik Singh's portfolio showcasing full-stack development expertise with React, Node.js, MongoDB, and more."
    />
    <meta name="twitter:image" content="URL_to_image_of_your_site_thumbnail" />
    
  </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
