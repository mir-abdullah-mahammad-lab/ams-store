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

export const metadata = {
  title: "AmS-Store",
  description: "Buy-Summer-Products",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme ='cupcake'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-50">{children}</body>
    </html>
  );
}
