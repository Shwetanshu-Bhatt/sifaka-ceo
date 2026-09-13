import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./components/brand-fixes.css";
import "./products.css";
import "./motion.css";
import ChatWidget from "./components/ChatWidget";
import CleanSectionLinks from "./components/CleanSectionLinks";
import StructuredData from "./components/StructuredData";

const title = "Shwetanshu Bhatt | CEO & Co-Founder of Sifaka Labs";
const description =
  "Shwetanshu Bhatt is CEO and Co-Founder of Sifaka Labs, building technology products across artificial intelligence, software, automation, and future systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ceo.sifakalabs.in"),
  title: { default: title, template: "%s | Shwetanshu Bhatt" },
  description,
  applicationName: "Shwetanshu Bhatt",
  authors: [{ name: "Shwetanshu Bhatt", url: "https://ceo.sifakalabs.in/" }],
  creator: "Shwetanshu Bhatt",
  publisher: "Shwetanshu Bhatt",
  category: "Technology Leadership",
  keywords: [
    "Shwetanshu Bhatt",
    "Sifaka Labs CEO",
    "Sifaka Labs co-founder",
    "technology entrepreneur",
    "technology leadership",
    "AI product development",
    "software products",
    "automation",
    "venture studio",
  ],
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description,
    siteName: "Shwetanshu Bhatt",
    locale: "en_IN",
    firstName: "Shwetanshu",
    lastName: "Bhatt",
    images: [
      {
        url: "/shwetanshu.png",
        width: 1122,
        height: 1402,
        alt: "Shwetanshu Bhatt, CEO and Co-Founder of Sifaka Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/shwetanshu.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <CleanSectionLinks />
        <StructuredData />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
