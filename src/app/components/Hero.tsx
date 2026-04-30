import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";

const PHOTO_URL =
  "https://res.cloudinary.com/dswidgydc/image/upload/f_auto,q_auto/df0241f7-6a6e-440d-bef4-4b4131d0488d_oheamo";

const roles = [
  "UX/UI Designer",
  "Game UI Designer",
  "Interaction Craftsman",
  "Experience Architect",
];

const RESUME_PDF_URL = "https://drive.google.com/file/d/1AkhhGsxndORe0Ts_mIRUX8me_UHTNFpf/view?usp=drive_link";

function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    } else if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
  }, [displayed, deleting, index]);

  return (
    <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #5D52FF, #FF5C3A)" }}>
      {displayed}
      <span className="animate-pulse opacity-80">|</span>
    </span>
  );
}

const floatingChips = [
  { label: "Figma Expert", x: "5%", y: "18%", delay: 0 },
  { label: "Game UI", x: "82%", y: "12%", delay: 0.3 },
  { label: "Prototyping", x: "78%", y: "72%", delay: 0.6 },
  { label: "Behavioral UX", x: "2%", y: "72%", delay: 0.9 },
];

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToProjects = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#12111A]"
    >
      {/* Layered Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#5D52FF]/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#FF5C3A]/8 blur-[100px]" />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#5D52FF]/6 blur-[80px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#5D52FF 1px, transparent 1px), linear-gradient(90deg, #5D52FF 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-screen"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Floating chips */}
      {floatingChips.map((chip) => (
        <motion.div
          key={chip.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/60 text-xs"
          style={{ left: chip.x, top: chip.y, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 + chip.delay }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#5D52FF]" />
          {chip.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">
        {/* Text side */}
        <div>
          {/* Level badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5D52FF]/30 bg-[#5D52FF]/10 mb-6"
          >
            <div className="flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-sm bg-[#5D52FF]" style={{ opacity: 0.4 + i * 0.3 }} />
              ))}
            </div>
            <span className="text-[#8B83FF] text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}>
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="text-white mb-2"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Ho Phu Thinh
            </h1>
          </motion.div>

          {/* Role typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
              lineHeight: 1.2,
            }}
          >
            <TypewriterRole />
          </motion.div>

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-white/55 max-w-xl mb-10"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
             "I design experiences that people don't just use —{" "}
            <span className="text-white/80 not-italic" style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "normal" }}>they enjoy.</span>"
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#5D52FF] to-[#7B72FF] text-white hover:shadow-xl hover:shadow-[#5D52FF]/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href={"https://drive.google.com/file/d/1AkhhGsxndORe0Ts_mIRUX8me_UHTNFpf/view?usp=drive_link"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/80 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
            >
              <Download size={15} className="opacity-70" />
              View Resume
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-8 mt-12 pt-8 border-t border-white/10"
          >
            {[
              { value: "1+", label: "Years Experience" },
              { value: "5+", label: "Projects Shipped" },
              { value: "2", label: "Specializations" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.8rem", letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/40 text-xs mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: "0.04em" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 rounded-[32px] border border-[#5D52FF]/20" />
          <div className="absolute -inset-8 rounded-[40px] border border-[#5D52FF]/08" />

          {/* Main photo card */}
          <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-[#1A1928]">
            <img
              src={PHOTO_URL}
              alt="Ho Phu Thinh - UX/UI Designer"
              className="w-full h-full object-cover object-top"
              style={{ filter: "saturate(0.85) contrast(1.05)" }}
            />
            {/* Photo overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#12111A] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#5D52FF]/10 to-transparent mix-blend-screen" />

            {/* Photo overlay card */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#12111A]/70 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1">
                  <div
                    className="text-white text-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                  >
                    Ho Phu Thinh
                  </div>
                  <div
                    className="text-white/50 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    UX/UI · Game UI Designer
                  </div>
                </div>
                <div className="ml-auto flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                      Open to roles
                    </span>
                  </div>
                  <div className="text-white/30 text-[10px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Ho Chi Minh City, VN
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent element */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF5C3A] to-[#FF8C6A] flex items-center justify-center shadow-2xl shadow-[#FF5C3A]/40"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <span style={{ fontSize: "2rem" }}>🎮</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <span className="text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <MousePointer2 size={14} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
