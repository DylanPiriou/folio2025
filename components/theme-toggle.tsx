"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        // Si le thème est system ou undefined, on détermine le thème actuel via document
        const currentTheme = theme === "dark" || (theme === "system" && document.documentElement.classList.contains("dark")) || (!theme && document.documentElement.classList.contains("dark")) ? "dark" : "light";
        setTheme(currentTheme === "dark" ? "light" : "dark");
      }}
      className="w-10 h-10"
    >
      {theme === "dark" || (theme === "system" && document.documentElement.classList.contains("dark")) || (!theme && document.documentElement.classList.contains("dark")) ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
