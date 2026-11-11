"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("tema") === "gelap") {
        document.documentElement.classList.add("dark");
        setGelap(true);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  function gantiTema() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("tema", isDark ? "gelap" : "terang");
    setGelap(isDark);
  }

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}
