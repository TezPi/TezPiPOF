import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ["about", "skills", "experience", "work", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #5D52FF, #FF5C3A)",
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#12111A]/90 backdrop-blur-xl shadow-2xl shadow-[#5D52FF]/10 border border-white/10"
            : "bg-[#12111A]/70 backdrop-blur-md"
        } rounded-full px-6 py-3 flex items-center gap-8`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#5D52FF] to-[#FF5C3A] flex items-center justify-center">
            <span className="text-white text-[10px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>H</span>
          </div>
          <span className="text-white/90 text-sm hidden sm:block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
            Thinh
          </span>
        </button>

        <div className="w-px h-4 bg-white/20" />

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white/90"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-white/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-[#5D52FF] to-[#7B72FF] text-white text-sm px-4 py-1.5 rounded-full hover:shadow-lg hover:shadow-[#5D52FF]/30 hover:scale-105 active:scale-95 transition-all duration-200"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
        >
          Hire me
        </button>
      </motion.nav>
    </>
  );
}
