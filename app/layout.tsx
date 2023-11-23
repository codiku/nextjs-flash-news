import { Nav } from "./components/Nav/Nav";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-8 flex">
        <Nav />
        {children}
      </body>
    </html>
  );
}
