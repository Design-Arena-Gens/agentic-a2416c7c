import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Kishan Kumar Yadav | Digital Marketing Expert",
  description:
    "Full-spectrum digital marketing services by Kishan Kumar Yadav. SEO, social media, paid ads, content strategy, and growth campaigns tailored for ambitious brands."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
