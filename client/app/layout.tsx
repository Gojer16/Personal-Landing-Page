import type { Metadata } from "next";
import {Roboto } from "next/font/google"
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Orlando Ascanio - AI Product Engineer",
    default: "Orlando Ascanio | AI Product Engineer - Full-Stack Developer",
  },
  description: "AI Product Engineer specializing in building AI-powered applications and full-stack solutions. Expertise in Python, Langchain, and system design. Check out my portfolio and projects.",
  keywords: "ai product engineer, python, langchain, full-stack, developer, portfolio, Orlando Ascanio, web development, API development, scalable solutions",
  authors: [{ name: "Orlando Ascanio" }],
  creator: "Orlando Ascanio",
  metadataBase: new URL('https://orlandoascanio.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orlandoascanio.com",
    title: "Orlando Ascanio | AI Product Engineer - Full-Stack Developer",
    description: "AI Product Engineer specializing in building AI-powered applications and full-stack solutions. Expertise in Python, Langchain, and system design. Check out my portfolio and projects.",
    siteName: "Orlando Ascanio Portfolio",
    images: [
      {
        url: "/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando Ascanio - AI Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Ascanio | AI Product Engineer - Full-Stack Developer",
    description: "AI Product Engineer specializing in building AI-powered applications and full-stack solutions. Expertise in Python, Langchain, and system design. Check out my portfolio and projects.",
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NLQ7D3LQ');
            `,
          }}
        />
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLQ7D3LQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
