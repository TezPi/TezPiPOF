import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skills = [
  { name: "UX Research", level: 92 },
  { name: "Wireframing", level: 95 },
  { name: "Rapid Prototyping", level: 90 },
  { name: "Usability Testing", level: 88 },
  { name: "Game UI / HUD", level: 85 },
  { name: "Design Systems", level: 92 },
  { name: "Information Architecture", level: 87 },
  { name: "Behavioral Psychology", level: 83 },
];

const tools = [
  { name: "Figma", category: "Core", icon: "🎨" },
  { name: "Adobe XD", category: "Design", icon: "⬡" },
  { name: "Sketch", category: "Design", icon: "💎" },
  { name: "Principle", category: "Motion", icon: "▶" },
  { name: "Photoshop", category: "Visual", icon: "🖼" },
  { name: "Illustrator", category: "Visual", icon: "✦" },
  { name: "Framer", category: "Prototype", icon: "⚡" },
  { name: "Dovetail", category: "Research", icon: "🔬" },
  { name: "FigJam", category: "Collab", icon: "🗂" },
  { name: "Confluence", category: "Docs", icon: "📄" },
  { name: "Jira", category: "PM", icon: "📋" },
];

const categoryColors: Record<string, string> = {
  Core: "#5D52FF",
  Design: "#7C73FF",
  Motion: "#FF5C3A",
  Visual: "#FF8B6A",
  Prototype: "#FFB800",
  Research: "#22C55E",
  Collab: "#06B6D4",
  Docs: "#8B5CF6",
  PM: "#EC4899",
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[#12111A] text-sm group-hover:text-[#5D52FF] transition-colors duration-200"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
        >
          {name}
        </span>
        <span
          className="text-[#8B8A99] text-xs"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {level}%
        </span>
      </div>
      <div className="relative h-1.5 bg-[#E8E6F0] rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #5D52FF, #7B72FF)" }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Glow dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#5D52FF] shadow-lg shadow-[#5D52FF]/40"
          style={{ left: `calc(${level}% - 5px)` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: delay + 1.1 }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="bg-[#12111A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] rounded-full bg-[#5D52FF]/8 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] rounded-full bg-[#FF5C3A]/6 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-0.5 bg-[#5D52FF]" />
            <span
              className="text-[#5D52FF] text-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
            >
              LEVEL 03 — SKILLS & TOOLS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            What I bring to the table
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          {/* Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#5D52FF]" />
              <h3
                className="text-white/80 text-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: "0.06em" }}
              >
                COMPETENCIES
              </h3>
            </div>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Tools Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#FF5C3A]" />
              <h3
                className="text-white/80 text-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: "0.06em" }}
              >
                TOOLS & PLATFORMS
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-200 cursor-default"
                >
                  <span style={{ fontSize: "0.9rem" }}>{tool.icon}</span>
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                  >
                    {tool.name}
                  </span>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded-full ml-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      color: categoryColors[tool.category] || "#5D52FF",
                      backgroundColor: `${categoryColors[tool.category] || "#5D52FF"}18`,
                    }}
                  >
                    {tool.category}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Process timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h4
                className="text-white/50 text-xs mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                MY DESIGN PROCESS
              </h4>
              <div className="flex items-center gap-0">
                {["Research", "Define", "Ideate", "Prototype", "Test"].map((step, i, arr) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
                        style={{
                          background: `linear-gradient(135deg, #5D52FF${Math.round(80 + i * 35).toString(16)}, #7B72FF${Math.round(60 + i * 30).toString(16)})`,
                          color: "white",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        {i + 1}
                      </div>
                      <span
                        className="text-white/50 text-[9px] mt-1.5 text-center"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                      >
                        {step}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex-1 h-px bg-gradient-to-r from-[#5D52FF]/40 to-[#5D52FF]/20 mb-4 mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
