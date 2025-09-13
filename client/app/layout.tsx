import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Orlando Ascanio",
    default: "Orlando Ascanio | Software Engineer",
  },
  description: "Software Engineer specializing in JavaScript, Python, and React. Building full-stack applications and scalable solutions.",
  keywords: "software engineer, javascript, python, react, full-stack, developer, portfolio, Orlando Ascanio",
  authors: [{ name: "Orlando Ascanio" }],
  creator: "Orlando Ascanio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orlandoascanio.com",
    title: "Orlando Ascanio | Software Engineer",
    description: "Software Engineer specializing in JavaScript, Python, and React. Building full-stack applications and scalable solutions.",
    siteName: "Orlando Ascanio Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Ascanio | Software Engineer",
    description: "Software Engineer specializing in JavaScript, Python, and React. Building full-stack applications and scalable solutions.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white`}
      >
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
