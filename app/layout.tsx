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
  title: "Magnificent Three Music",
  description: `Story. Composition. Magic.
  Alternative Rock, Progressive Metal, Classical.
  Heart of Cygnus
  Burningdown
  Jeffrey Robert Lane
  `,
  icons: {
    icon: "/m3micon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased slide1`}
      >
        {children}
      </body>
    </html>
  );
}
