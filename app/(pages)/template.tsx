"use client";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function RootTemplate(p: { children: ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    console.log("User is visiting...", pathname);
    // fetch("anaylitcs",{pathname })
  }, [pathname]);
  return p.children;
}
