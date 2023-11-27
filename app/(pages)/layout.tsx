import "./globals.css";
import { Nav } from "@/app/components/Nav/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex p-8">
        <Nav />
        <div className="pl-8 mt-16 w-full">{children}</div>
      </body>
    </html>
  );
}
