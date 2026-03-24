import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ажилдаа — Монголын ажлын платформ",
  description:
    "Монголын хамгийн том ажлын байр болон фриланс платформ. Авъяаслаг мэргэжилтнүүдтэй холбогдоорой.",
  keywords: ["ажил", "фриланс", "Mongolia", "jobs", "freelance", "Монгол"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.variable}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
