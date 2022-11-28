import Link from "next/link";
import { useTheme } from "../lib/ThemeContext";

export default function Navbar() {
  const themeContext = useTheme();
  return (
    <>
      <nav
        style={themeContext.theme.navbar}
        className="flex items-center justify-between p-6 uppercase"
      >
        <Link href="/">Home</Link>
        <div className="flex items-center justify-end gap-6">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <div>
            <button
              style={{
                backgroundColor: themeContext.theme.colors.primary,
                color: themeContext.theme.colors.secondary,
              }}
              className="rounded p-2"
              onClick={themeContext.toggleTheme}
            >
              Toggle Theme
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
