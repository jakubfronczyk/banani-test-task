"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsChecked(theme === "dark");
  }, [theme]);

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
    setTimeout(() => {
      setTheme(checked ? "dark" : "light");
    }, 150);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <SunIcon
        className="h-4 w-4 text-amber-500 cursor-pointer"
        onClick={() => handleToggle(false)}
      />
      <Switch
        checked={isChecked}
        onCheckedChange={handleToggle}
        aria-label="Toggle dark mode"
      />
      <MoonIcon
        className="h-4 w-4 text-blue-500 cursor-pointer"
        onClick={() => handleToggle(true)}
      />
    </div>
  );
}
