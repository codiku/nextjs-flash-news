import { Nav } from "@/app/components/Nav/Nav";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";
const ClockNoSSR = dynamic(() => import("@/app/components/Clock/Clock"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-8 space-y-2`}>
        <div className="h-10">
          <ClockNoSSR />
        </div>
        <div className="md:flex">
          <Nav />
          <div className="md:px-8 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}