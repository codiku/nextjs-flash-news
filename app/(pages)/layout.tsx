import { Nav } from "@/app/components/Nav/Nav";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8">
      <div className="flex ">
        <Nav />
        <div className="mt-16 pl-8 w-full">{children}</div>
      </div>
    </div>
  );
}
