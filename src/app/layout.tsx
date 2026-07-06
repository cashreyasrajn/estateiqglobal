import type { Metadata } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estateiqglobal.com"),
  title: "EstateIQ Global | Cross-Border Estate Planning",
  description:
    "Precision estate tax planning for Indian residents with overseas assets. US federal tax savings, DTAA optimization, trust structures, and succession planning.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "EstateIQ Global | Cross-Border Estate Planning",
    description:
      "Precision estate tax planning for Indian residents with overseas assets.",
    type: "website",
    locale: "en_IN",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EstateIQ Global — Cross-border estate tax planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EstateIQ Global | Cross-Border Estate Planning",
    description:
      "Precision estate tax planning for Indian residents with overseas assets.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif4.variable} ${workSans.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
