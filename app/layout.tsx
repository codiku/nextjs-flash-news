import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="border-red-500 border-2">{children}</div>
      </body>
    </html>
  );
}
