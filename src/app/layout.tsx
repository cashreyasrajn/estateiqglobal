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
  title: "EstateIQ Global | Cross-Border Estate Planning",
  description:
    "Precision estate tax planning for Indian residents with overseas assets. US federal tax savings, DTAA optimization, trust structures, and succession planning.",
  openGraph: {
    title: "EstateIQ Global | Cross-Border Estate Planning",
    description:
      "Precision estate tax planning for Indian residents with overseas assets.",
    type: "website",
    locale: "en_IN",
    url: "https://estateiqglobal.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "EstateIQ Global | Cross-Border Estate Planning",
    description:
      "Precision estate tax planning for Indian residents with overseas assets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif4.variable} ${workSans.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
