"use client";
import { useEffect, useState } from "react";

export default function Clock(p: {}) {
  const [value, setValue] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <>{value}</>;
}
