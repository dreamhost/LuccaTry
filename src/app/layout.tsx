import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "WonderBear | Alice in Wonderland Themed Teddy Bear",
  description: "Discover WonderBear, a magical teddy bear inspired by Alice's adventures in Wonderland. Handcrafted with curious details from Lewis Carroll's timeless tale.",
  keywords: "Alice in Wonderland teddy bear, literary teddy bear, collectible teddy bear, WonderBear, handcrafted teddy bear, premium plush toy"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html data-editor-tag="1NTFCfO8jD"  lang="en">
     <body data-editor-tag="HjfMKezArr" 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}