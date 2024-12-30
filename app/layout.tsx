import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./index.css";
import barber from "@/data";
import ProvidersWrapper from "./(public)/ProviderWrapper";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `WELCOME TO THE ${barber.name} SHOP`,
  description:`WELCOME TO THE ${barber.name} SHOP`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-white ${space.className}`}>
      <link rel="icon" href="/icon.png" sizes="any" />
        <ProvidersWrapper>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
