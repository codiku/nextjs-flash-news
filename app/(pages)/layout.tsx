import "./globals.css";
import { Nav } from "@/app/components/Nav/Nav";
// import { Inter } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next flash news",
  description: "Get the last news and live news",
};

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex p-8`}>
        <Nav />
        <div className="pl-8 mt-16 w-full">{children}</div>
      </body>
    </html>
  );
}
