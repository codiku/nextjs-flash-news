import { Nav } from "@/app/components/Nav/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex p-8">
        <Nav />
        <div className="px-8 mt-16">{children}</div>
      </body>
    </html>
  );
}
