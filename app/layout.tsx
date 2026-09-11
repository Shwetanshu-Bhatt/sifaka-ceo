import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";
import CleanSectionLinks from "./components/CleanSectionLinks";

export const metadata: Metadata = { title: "Shwetanshu Bhatt — CEO, Sifaka Labs", description: "The personal site of Shwetanshu Bhatt, CEO and founder of Sifaka Labs." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CleanSectionLinks />{children}<ChatWidget /></body></html>;
}
