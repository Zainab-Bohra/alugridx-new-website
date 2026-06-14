import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SplashLoader from "@/components/SplashLoader";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALUGRIDX Air Conditioning Industry LLC | Premium HVAC Solutions",
  description: "Manufacturing high-quality grilles, diffusers, louvers, and dampers for commercial, industrial, and infrastructure projects across UAE & GCC.",
  keywords: [
    "ALUGRIDX",
    "HVAC",
    "aluminium grilles",
    "louvers",
    "diffusers",
    "dampers",
    "UAE",
    "GCC",
  ],
  metadataBase: new URL("https://www.alugridx.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "ALUGRIDX Air Conditioning Industry LLC | Premium HVAC Solutions",
    description: "Manufacturing high-quality grilles, diffusers, louvers, and dampers for commercial, industrial, and infrastructure projects across UAE & GCC.",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.alugridx.com",
    siteName: "ALUGRIDX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body
  className={`${inter.className} bg-white text-slate-900 antialiased flex flex-col min-h-screen`}
>
  <SplashLoader>
    <Navbar />

    <main className="flex-grow flex flex-col">
      {children}
    </main>

    <Footer />

    <WhatsAppButton />
  </SplashLoader>
</body>
    </html>
  );
}