import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Download, ExternalLink, Linkedin, Dribbble, ArrowRight } from "lucide-react";

const links = [
  {
    label: "LinkedIn",
    desc: "Professional network",
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/in/phuthing069/",
    color: "#0A66C2",
  },
  {
    label: "Behance",
    desc: "Design portfolio",
    icon: <Dribbble size={18} />,
    href: "https://www.behance.net/thnhh26",
    color: "#1769FF",
  },
  {
    label: "Portfolio",
    desc: "Full case studies",
    icon: <ExternalLink size={18} />,
    href: "#",
    color: "#FF5C3A",
  },
];

export function ResumeLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F7F6F3] py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#5D52FF]/5 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-0.5 bg-[#5D52FF]" />
          <span
            className="text-[#5D52FF] text-xs"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
          >
            LEVEL 06 — RESUME & LINKS
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 items-center">
          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="text-[#12111A] mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              Get my resume
            </h2>
            <p
              className="text-[#8B8A99] mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
            >
              3+ years of UX/UI and Game UI experience, from early-stage startups to shipped products.
              Available for full-time roles and freelance projects.
            </p>

            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#12111A] text-white hover:bg-gradient-to-r hover:from-[#5D52FF] hover:to-[#7B72FF] hover:shadow-xl hover:shadow-[#5D52FF]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            >
              <Download size={18} className="group-hover:animate-bounce" />
              Download Resume (PDF)
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Fun stat */}
            <div className="flex items-center gap-4 mt-8 p-4 rounded-2xl bg-white border border-[#E8E6F0]">
              <div className="w-10 h-10 rounded-xl bg-[#5D52FF]/10 flex items-center justify-center flex-shrink-0">
                <span style={{ fontSize: "1.2rem" }}>🎯</span>
              </div>
              <div>
                <div
                  className="text-[#12111A] text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  Currently open to new opportunities
                </div>
                <div
                  className="text-[#8B8A99] text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Response time: within 24 hours
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-48 bg-gradient-to-b from-transparent via-[#E8E6F0] to-transparent self-center" />

          {/* External Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              className="text-[#12111A] mb-2"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              Find me online
            </h3>
            <p
              className="text-[#8B8A99] text-sm mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              More work, thoughts, and professional updates.
            </p>

            <div className="space-y-3">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8E6F0] hover:border-transparent hover:shadow-lg transition-all duration-300 group"
                  style={{
                    boxShadow: "0 0 0 0 transparent",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: `${link.color}12`,
                      color: link.color,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div
                      className="text-[#12111A] text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                    >
                      {link.label}
                    </div>
                    <div
                      className="text-[#8B8A99] text-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.desc}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-[#8B8A99] group-hover:text-[#12111A] opacity-0 group-hover:opacity-100 transition-all duration-200"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}