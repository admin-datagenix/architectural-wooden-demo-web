import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sawant & Associates | Architecture • Interiors • Landscape Design",
  description:
    "Sawant & Associates - Thoughtfully designed modern architecture, elegant interiors and premium wooden craftsmanship.",
  icons: {
    icon: [
      {
        url: "/favicon-logo.png",
        type: "image/png",
      },
      {
        url: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
    shortcut: "/favicon-logo.png",
    apple: "/favicon-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
