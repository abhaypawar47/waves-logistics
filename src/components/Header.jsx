import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "Services",
    "Coverage",
    "Sustainability",
    "Insights",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="text-primary">WAVES</span>
            <span
              className={`${scrolled ? "text-primary" : "text-white"} transition-colors`}
            >
              {" "}
              LOGISTICS
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-primary/30 rounded-full ml-2"></div>
          <div
            className={`hidden md:block text-xs font-medium ${scrolled ? "text-gray-600" : "text-white/90"}`}
          >
            global reach • precise delivery
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-semibold tracking-wide transition ${
                scrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-accent"
              }`}
            >
              {link}
            </a>
          ))}
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-md">
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          <i
            className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} ${scrolled ? "text-primary" : "text-white"}`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col gap-4 border-t border-gray-100 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-800 font-semibold py-2 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="bg-primary text-white font-semibold py-3 rounded-full transition text-center">
            Get a Quote →
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
