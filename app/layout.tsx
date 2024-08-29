import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo",
  description: "Learning made fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
      <html>
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
