import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Techromz Marketplace",
  description: "Selected Trending Products marketplace categories.",
  keywords: ["B2B Marketplace", "Trending Products", "Global Sourcing", "Techromz", "Trade and Logistics"],
  authors: [{ name: "Techromz Software Engineer Trainee" }],
  openGraph: {
    title: "Techromz Marketplace - Selected Trending Products",
    description: "Discover the most popular sourcing categories from global suppliers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
