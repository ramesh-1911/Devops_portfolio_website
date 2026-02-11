import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

function Navbar() {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Fix hydration mismatch (important)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">

      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg font-bold text-blue-600">
          DevOps Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>

          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>

          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="border px-3 py-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">

          {/* Theme Toggle Mobile */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="border px-2 py-1 rounded-lg"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl"
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">

          <div className="flex flex-col items-center gap-4 py-6">

            <a onClick={() => setMenuOpen(false)} href="#projects">
              Projects
            </a>

            <a onClick={() => setMenuOpen(false)} href="#skills">
              Skills
            </a>

            <a onClick={() => setMenuOpen(false)} href="#contact">
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar
