import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Experiences", href: "#experiences" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-earth/95 backdrop-blur-sm shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-sm tracking-[0.2em] uppercase text-primary-foreground">
          Stories in Stone
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs tracking-[0.15em] uppercase text-stone-light hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#experiences"
            className="px-5 py-2 bg-gold text-earth font-display text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300 rounded-sm"
          >
            Book
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-earth/95 backdrop-blur-sm px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-display text-xs tracking-[0.15em] uppercase text-stone-light hover:text-gold transition-colors border-b border-stone-dark/30"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#experiences"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 text-center px-5 py-3 bg-gold text-earth font-display text-xs tracking-[0.15em] uppercase rounded-sm"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
