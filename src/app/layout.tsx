import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forge Studio — Precision in Every Pixel",
  description:
    "Creative digital agency offering UI/UX Design, Website Development, Branding, and Product Design for startups, visionaries, and high-growth businesses.",
  keywords: [
    "digital agency",
    "UI/UX design",
    "web development",
    "branding",
    "product design",
    "Forge Studio",
  ],
  authors: [{ name: "Forge Studio" }],
  openGraph: {
    title: "Forge Studio — Precision in Every Pixel",
    description:
      "Crafting high-end, uncompromising digital products with industrial-strength logic and fluid, modern aesthetics.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b3390c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
