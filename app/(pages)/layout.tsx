"use client";
import { Nav } from "@/app/components/Nav/Nav";
import { useEffect, useState } from "react";
export default function PagesLayout({
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
