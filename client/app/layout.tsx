import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Roboto } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Orlando Ascanio - Software Engineer",
    default: "Orlando Ascanio | Software Engineer - Full Stack Developer",
  },
  description: "Software Engineer specializing in JavaScript, Python, and React. Building full-stack applications, secure APIs, and real-world solutions that scale. Check out my portfolio and projects.",
  keywords: "software engineer, javascript, python, react, full-stack, developer, portfolio, Orlando Ascanio, web development, API development, scalable solutions",
  authors: [{ name: "Orlando Ascanio" }],
  creator: "Orlando Ascanio",
  metadataBase: new URL('https://orlandoascanio.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orlandoascanio.com",
    title: "Orlando Ascanio | Software Engineer - Full Stack Developer",
    description: "Software Engineer specializing in JavaScript, Python, and React. Building full-stack applications, secure APIs, and real-world solutions that scale. Check out my portfolio and projects.",
    siteName: "Orlando Ascanio Portfolio",
    images: [
      {
        url: "/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando Ascanio - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Ascanio | Software Engineer - Full Stack Developer",
    description: "Software Engineer specializing in JavaScript, Python, and React. Building full-stack applications, secure APIs, and real-world solutions that scale.",
    images: ["/pfp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#4F46E5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/pfp.jpg" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
      </head>
      <body
        className={`${roboto.className}  antialiased min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white`}
      >
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
