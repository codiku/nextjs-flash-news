"use client";
import Image, { ImageProps, StaticImageData } from "next/image";

export function ImageWithFallback({
  fallback,
  src,
  ...p
}: ImageProps & { fallback: StaticImageData }) {
  return (
    <Image
      {...p}
      src={src}
      onError={(err) => {
        console.log("*** ERROR", err);
      }}
      onLoadedData={(e) => {
        console.log("***", e.currentTarget.dataset);
      }}
    />
  );
}
