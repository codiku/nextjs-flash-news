import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Nextjs flash news",
  description: "Get the latest flash news",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
