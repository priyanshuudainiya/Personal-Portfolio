import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/80 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-gray-400 to-blue-500 cursor-pointer">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.href)}
                className="relative text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-yellow-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </button>
            </li>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gradient-to-r from-red-500 via-blue-500 to-green-500 hover:from-blue-500 hover:to-yellow-400 transition-all shadow-md"
          >
            {theme === "dark" ? (
              <FaSun className="text-white" />
            ) : (
              <FaMoon className="text-white" />
            )}
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg flex flex-col items-center gap-6 py-8 shadow-lg z-40">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="text-gray-700 dark:text-gray-200 text-lg font-medium hover:text-blue-500 dark:hover:text-yellow-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-yellow-400 hover:from-yellow-400 hover:to-blue-500 transition-all shadow-md"
          >
            {theme === "dark" ? (
              <FaSun className="text-white" />
            ) : (
              <FaMoon className="text-white" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
