"use client";
import { useEffect, useState } from "react";

export default function Random(p: {}) {
  const [value, setValue] = useState(Math.random());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(Math.random());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <>{value}</>;
}
