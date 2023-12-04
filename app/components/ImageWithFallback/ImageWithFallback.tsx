"use client";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";

export function ImageWithFallback({
  fallback,
  src,
  ...p
}: ImageProps & { fallback: StaticImageData }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      {...p}
      src={imgSrc}
      onError={(e) => {
        setImgSrc(fallback.src);
      }}
    />
  );
}
