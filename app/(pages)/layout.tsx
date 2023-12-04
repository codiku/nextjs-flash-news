import { Nav } from "@/app/components/Nav/Nav";
import dynamic from "next/dynamic";
const ClockNoSSR = dynamic(() => import("@/app/components/Clock/Clock"), {
  ssr: false,
});
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8">
      <div className="h-12">
        <ClockNoSSR />
      </div>
      <div className="flex ">
        <Nav />
        <div className="mt-16 pl-8 w-full">{children}</div>
      </div>
    </div>
  );
}
