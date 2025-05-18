"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Set initial state once mounted
  useEffect(() => {
    setIsMounted(true);
    setIsChecked(theme === "dark");
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <SunIcon className="h-4 w-4 text-orange-500" />
      <Switch
        checked={isChecked}
        onCheckedChange={(checked) => {
          setIsChecked(checked);
          setTimeout(() => {
            setTheme(checked ? "dark" : "light");
          }, 150);
        }}
        aria-label="Toggle dark mode"
      />
      <MoonIcon className="h-4 w-4 text-blue-500" />
    </div>
  );
}
