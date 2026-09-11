import type { Metadata } from "next";
import "./globals.css";
import "./components/brand-fixes.css";
import ChatWidget from "./components/ChatWidget";
import CleanSectionLinks from "./components/CleanSectionLinks";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = { metadataBase: new URL("https://ceo.sifakalabs.in"), title: "Shwetanshu Bhatt — CEO & Co-Founder, Sifaka Labs", description: "The personal website of Shwetanshu Bhatt, CEO and co-founder of Sifaka Labs.", keywords: ["Shwetanshu Bhatt", "Sifaka Labs", "CEO", "co-founder", "technology products", "artificial intelligence", "automation"], alternates: { canonical: "/" }, openGraph: { type: "website", url: "https://ceo.sifakalabs.in/", title: "Shwetanshu Bhatt — CEO & Co-Founder, Sifaka Labs", description: "The personal website of Shwetanshu Bhatt, CEO and co-founder of Sifaka Labs.", siteName: "Shwetanshu Bhatt", locale: "en_IN", images: [{ url: "/shwetanshu.png", width: 1285, height: 1224, alt: "Shwetanshu Bhatt, CEO and co-founder of Sifaka Labs" }] }, twitter: { card: "summary_large_image", title: "Shwetanshu Bhatt — CEO & Co-Founder, Sifaka Labs", description: "The personal website of Shwetanshu Bhatt, CEO and co-founder of Sifaka Labs.", images: ["/shwetanshu.png"] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body><CleanSectionLinks /><StructuredData />{children}<ChatWidget /></body></html>;
}
