import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Header from "./components/header";
import SideName from "./components/sidename";
import "./globals.css";
const garamont = Cormorant_Garamond({ subsets: ["latin"], weight: ['300'], });

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Wedding invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={garamont.className}>
        <Header />
        <SideName />
        <div className='paperOverlay'></div>
        <main className='latte'>
          {children}
        </main>

      </body>
    </html>
  );
}
