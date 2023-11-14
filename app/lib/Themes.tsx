"use client";
//component theme dark // ligth
import { useEffect, useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleChangeTheme = (selectedTheme: "light" | "dark") => {
    setTheme(selectedTheme);
  };

  return (
    <div>
      <select value={theme} onChange={(e) => handleChangeTheme(e.target.value as "light" | "dark")}
      className="
      font-serif 
      px-4 
      py-1 
      text-slate-700 
      rounded-lg 
      hover:bg-slate-500 
      hover:text-slate-900
      bg-slate-200

      ">
        <option value="light" >Light ...</option>
        <option value="dark" >Dark ...</option>
      </select>
    </div>
  );
}
