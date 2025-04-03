import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { LanguageProvider } from "@/components/LanguageProvider/LanguageProvider";

const lato = Ubuntu({
  weight: "400",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Porcelanosa Bulgaria",
  description: "Porcelanosa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${lato.className} antialiased mx-auto min-h-lvh flex flex-col outline-1 outline bg-slate-100`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
