import type { Metadata } from "next";
import "./globals.css";

import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Next.js 14",
  description: "Next.js 14 Crash Course",
};
const vazirFont = localFont({
  src: [
    {
    path: "../../public/font/Vazirmatn-Light.woff2",
    weight: '200',
    style: 'normal'
  },
  {
    path: "../../public/font/Vazirmatn-Regular.woff2",
    weight: '400',
    style: 'normal'
  },
  {
    path: "../../public/font/Vazirmatn-Medium.woff2",
    weight: '500',
    style: 'normal'
  },
  {
    path: "../../public/font/Vazirmatn-Bold.woff2",
    weight: '700',
    style: 'normal'
  },
  {
    path: "../../public/font/Vazirmatn-ExtraBold.woff2",
    weight: '900',
    style: 'normal'
  },
]
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`bg-slate-900 text-slate-200 ${vazirFont.className}`}>
        <main className="p-5">
        {children}
        </main>
      </body>
    </html>
  );
}
