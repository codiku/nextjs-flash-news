import { Nav } from "@/app/components/Nav/Nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-8">
      <Nav />
      <div className="mt-16 pl-8">{children}</div>
    </div>
  );
}
