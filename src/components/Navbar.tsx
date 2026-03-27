import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/30 backdrop-blur-xl border-b border-border/20" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 flex items-center h-16">
        <a href="#home" className="text-foreground font-bold text-xl mr-auto">
          PK<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center justify-center flex-1 gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-foreground font-bold text-sm hover:text-primary transition-colors duration-200 py-1 group"
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[rgb(0,185,130)] transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>
        <div className="hidden md:block w-[40px]" />

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-foreground font-bold text-sm hover:text-primary transition-colors ${
                  activeSection === item.href.slice(1) ? "text-primary" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
