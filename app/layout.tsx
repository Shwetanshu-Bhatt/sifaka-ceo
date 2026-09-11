import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

export const metadata: Metadata = { title: "Shwetanshu Bhatt — CEO, Sifaka Labs", description: "The personal site of Shwetanshu Bhatt, CEO and founder of Sifaka Labs." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<ChatWidget /></body></html>;
}
