import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.scss";

const ps_Sans = PT_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ps_Sans.className}>{children}</body>
    </html>
  );
}
