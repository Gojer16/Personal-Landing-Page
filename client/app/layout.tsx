import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"
import ChatWidget from "./components/chat/ChatWidget";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Orlando Ascanio - AI & Product Engineer",
    default: "Orlando Ascanio | AI & Product Engineer - Building Intelligent Systems",
  },
  description: "AI & Product Engineer specializing in LLMs, RAG systems, and full-stack development. Building intelligent applications with Next.js, TypeScript, and Google Gemini API. Expertise in prompt engineering, NLP, and scalable AI solutions.",
  keywords: [
    "AI Engineer",
    "Product Engineer",
    "LLMs",
    "RAG Systems",
    "Prompt Engineering",
    "Next.js Developer",
    "TypeScript",
    "Google Gemini API",
    "DeepSeek API",
    "NLP",
    "Full-Stack Developer",
    "AI Applications",
    "Machine Learning",
    "React Developer",
    "Orlando Ascanio",
    "AI Portfolio",
    "Intelligent Systems",
    "Multi-language NLP"
  ],
  authors: [{ name: "Orlando Ascanio", url: "https://personal-landing-nu.vercel.app" }],
  creator: "Orlando Ascanio",
  publisher: "Orlando Ascanio",
  metadataBase: new URL('https://personal-landing-nu.vercel.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://personal-landing-nu.vercel.app",
    title: "Orlando Ascanio | AI & Product Engineer - Building Intelligent Systems",
    description: "AI & Product Engineer specializing in LLMs, RAG systems, and full-stack development. Building intelligent applications with Next.js, TypeScript, and Google Gemini API.",
    siteName: "Orlando Ascanio - AI Engineer Portfolio",
    images: [
      {
        url: "/Banner.png",
        width: 1200,
        height: 630,
        alt: "Orlando Ascanio - AI & Product Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Ascanio | AI & Product Engineer",
    description: "Building intelligent systems with LLMs, RAG, and modern web technologies. Specializing in AI applications, prompt engineering, and full-stack development.",
    images: ["/Banner.png"],
    creator: "@orlandoascanio",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
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

        {/* Structured Data (JSON-LD) for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Orlando Ascanio",
              url: "https://personal-landing-nu.vercel.app",
              image: "https://personal-landing-nu.vercel.app/Banner.png",
              jobTitle: "AI & Product Engineer",
              description: "AI & Product Engineer specializing in LLMs, RAG systems, and full-stack development",
              sameAs: [
                "https://www.linkedin.com/in/orlando-ascanio-dev",
                "https://github.com/gojer16"
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Large Language Models",
                "RAG Systems",
                "Prompt Engineering",
                "Next.js",
                "TypeScript",
                "Full-Stack Development",
                "NLP",
                "Machine Learning"
              ],
              email: "operation927@gmail.com",
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              }
            })
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />


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
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
