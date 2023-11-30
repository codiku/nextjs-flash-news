import "./globals.css";
import { Nav } from "@/app/components/Nav/Nav";
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
    <div className="flex p-8">
      <Nav />
      <div className="mt-16 pl-8 w-full">{children}</div>
    </div>
  );
}
