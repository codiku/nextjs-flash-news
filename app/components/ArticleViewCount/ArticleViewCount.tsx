"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ArticleViewCount(p: {}) {
  const pathname = usePathname();
  const [countArticleConsulted, setCountArticleConsulted] = useState(0);

  useEffect(() => {
    if (pathname.includes("/articles/title/")) {
      setCountArticleConsulted(
        (countArticleConsulted_) => countArticleConsulted_ + 1
      );
    }
  }, [pathname]);
  return (
    <div className="text-xs">{countArticleConsulted} articles consulted</div>
  );
}
