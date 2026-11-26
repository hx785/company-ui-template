"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    const html = document.documentElement
    const isDark = html.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    const html = document.documentElement
    if (next === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="gap-1.5"
      title={
        theme === "light"
          ? "当前：浅色模式，点击切换为深色模式"
          : "当前：深色模式，点击切换为浅色模式"
      }
    >
      {theme === "light" ? (
        <>
          <Sun className="size-4 text-brand-orange" />
          <span>浅色模式</span>
        </>
      ) : (
        <>
          <Moon className="size-4 text-brand-orange" />
          <span>深色模式</span>
        </>
      )}
    </Button>
  )
}
