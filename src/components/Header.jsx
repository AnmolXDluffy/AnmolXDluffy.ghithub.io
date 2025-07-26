import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu if resized above md breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header className="fixed w-full bg-black bg-gradient-to-r from-blue-950 via-gray-900 to-emerald-900 shadow z-20">
      <nav className="container mx-auto px-6 py-4">
        {/* Use flexbox for layout */}
        <div className="flex items-center justify-between">

          {/* Left: Name aligned left */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-300 via-blue-400 to-emerald-300 text-transparent bg-clip-text drop-shadow-md animate-gradient-x">
              Anmol Kumar
            </div>
          </div>

          {/* Right: Navigation + Hamburger with right padding */}
          <div className="flex items-center gap-6 pr-6">

            {/* Desktop nav links, hidden on mobile */}
            <div className="hidden md:flex items-center space-x-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-blue-300 transition font-medium truncate px-2"
                  style={{ maxWidth: "115px" }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Hamburger Menu (mobile) */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-blue-200 hover:text-blue-400 focus:outline-none z-20"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer */}
        {menuOpen && (
          <div className="fixed top-0 right-0 h-full w-[61vw] max-w-xs bg-[#090a13]/95 shadow-2xl z-40 flex flex-col pt-24 px-6 animate-slideInRight transition-all duration-300">
            <button
              className="absolute top-3 right-3 text-3xl font-semibold text-blue-300 hover:text-emerald-400"
              aria-label="Close navigation"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold text-lg text-gray-200 hover:text-blue-300 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
