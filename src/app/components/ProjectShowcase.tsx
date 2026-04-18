import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Layers, Gamepad2, Smartphone, Monitor } from "lucide-react";

const GAME_UI_IMG =
  "https://images.unsplash.com/photo-1651505942687-efc26cb528ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwVUklMjBIVUQlMjBkZXNpZ24lMjBpbnRlcmZhY2UlMjBkYXJrfGVufDF8fHx8MTc3NjM2NTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080";

const MOBILE_IMG =
  "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBIVUQlMjBkZXNpZ24lMjBwcm90b3R5cGUlMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzc2MzY1Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const ABSTRACT_IMG =
  "https://images.unsplash.com/photo-1591541924200-d1217b346bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBnZW9tZXRyaWMlMjBwYXR0ZXJuJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc3NjM2NTc4OHww&ixlib=rb-4.1.0&q=80&w=1080";

const DESIGNER_IMG =
  "https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMFVJJTIwZGVzaWduZXIlMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjM2NTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080";

const projects = [
  {
    id: "01",
    title: "HaloRealm HUD",
    category: "Game UI Design",
    impact: "Reduced information overload by 40% through progressive disclosure HUD system",
    tags: ["Game UI", "HUD", "Unity"],
    icon: <Gamepad2 size={14} />,
    accent: "#5D52FF",
    image: GAME_UI_IMG,
    size: "large",
  },
  {
    id: "02",
    title: "Murror AI",
    category: "Mobile App UX",
    impact: "+25% DAU, +15% Retention through behavioral engagement design",
    tags: ["iOS", "Mental Health", "Gamification"],
    icon: <Smartphone size={14} />,
    accent: "#22C55E",
    image: MOBILE_IMG,
    size: "normal",
  },
  {
    id: "03",
    title: "InkLab Tattoo",
    category: "AI + AR Platform",
    impact: "84/100 SUS score, -60% discovery time through simplified AR flow",
    tags: ["AR", "AI", "Figma"],
    icon: <Monitor size={14} />,
    accent: "#FF5C3A",
    image: ABSTRACT_IMG,
    size: "normal",
  },
  {
    id: "04",
    title: "DesignSys Framework",
    category: "Design System",
    impact: "Component library covering 200+ UI elements across 3 product lines",
    tags: ["Design System", "Tokens", "Figma"],
    icon: <Layers size={14} />,
    accent: "#FFB800",
    image: DESIGNER_IMG,
    size: "normal",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-[#E8E6F0] hover:border-transparent hover:shadow-2xl cursor-pointer transition-all duration-300"
      style={{
        boxShadow: "0 0 0 0 transparent",
      }}
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 0 1.5px ${project.accent}40, 0 20px 60px ${project.accent}15`,
        }}
      />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700"
          style={{ filter: "saturate(0.8)" }}
        />
        <div
          className="absolute inset-0 group-hover:opacity-80 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to bottom, transparent 30%, ${project.accent}25 100%)`,
          }}
        />

        {/* Project number */}
        <div className="absolute top-4 left-4">
          <span
            className="text-white/30 group-hover:text-white/60 transition-colors duration-300"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.12em" }}
          >
            {project.id}
          </span>
        </div>

        {/* Arrow button */}
        <div className="absolute top-4 right-4">
          <motion.div
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ backgroundColor: project.accent, color: "white" }}
          >
            <ArrowUpRight size={14} />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div
            className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
            style={{
              color: project.accent,
              backgroundColor: `${project.accent}12`,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
            }}
          >
            {project.icon}
            {project.category}
          </div>
        </div>

        <h3
          className="text-[#12111A] mb-2 group-hover:text-[#12111A] transition-colors"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "1.15rem",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>

        <p
          className="text-[#8B8A99] mb-4 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem" }}
        >
          {project.impact}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-[#F7F6F3] text-[#8B8A99] border border-[#E8E6F0]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5 pt-4 border-t border-[#F0EFF4]">
          <button
            className="flex items-center gap-1.5 text-sm transition-all duration-200"
            style={{
              color: project.accent,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
            }}
          >
            View Case Study
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="bg-[#12111A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 w-[800px] h-[400px] rounded-full bg-[#5D52FF]/6 blur-[120px] -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
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
                LEVEL 05 — PROJECT SHOWCASE
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
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Selected work
            </motion.h2>
          </div>

          <motion.a
            href="https://www.behance.net/thnhh26"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm self-end sm:self-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
          >
            View all on Behance
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}