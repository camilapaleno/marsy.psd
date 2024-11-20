import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/app/components/nav"


export const metadata: Metadata = {
  title: "marsy.psd",
  description: "zines + more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {Nav()}
        {children}
      </body>
    </html>
  );
}
