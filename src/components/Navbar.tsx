import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 backdrop-blur-xl border border-border shadow-lg" : "bg-card/60 backdrop-blur-md border border-border/50"
      } rounded-full px-2 py-2`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 text-sm"
          >
            <item.icon size={16} />
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full mt-2 left-0 right-0 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-3 flex flex-col gap-1 min-w-[180px]"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-secondary transition-all text-sm"
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
