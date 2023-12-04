import { ReactNode } from "react";

export function MiniCard(p: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="lg:w-80">
      <div className="py-4">
        <div className="text-md ">{p.title}</div>
        <div>{p.description}</div>
      </div>
      <div className="space-y-2 text-sm">{p.children}</div>
    </div>
  );
}
