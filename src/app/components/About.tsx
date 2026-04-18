import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Brain, Gamepad2, Zap, Users } from "lucide-react";

const mindsetCards = [
  {
    icon: <Brain size={18} />,
    title: "Behavior First",
    desc: "Every decision starts with understanding how users think, not what they say.",
  },
  {
    icon: <Zap size={18} />,
    title: "Engagement ≠ Usability",
    desc: "Usability gets people in. Engagement keeps them coming back.",
  },
  {
    icon: <Gamepad2 size={18} />,
    title: "Game-Thinking",
    desc: "Feedback loops, progression, reward — these aren't game mechanics. They're human mechanics.",
  },
  {
    icon: <Users size={18} />,
    title: "Empathy at Scale",
    desc: "Good design serves one person brilliantly. Great design scales that feeling to millions.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative bg-[#F7F6F3] py-24 lg:py-32 overflow-hidden">
      {/* Decorative accent blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5D52FF]/5 blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#FF5C3A]/5 blur-[100px] translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
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
            LEVEL 02 — ABOUT ME
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left: Story */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#12111A] mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Designing for people who{" "}
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: "italic",
                  backgroundImage: "linear-gradient(135deg, #5D52FF, #FF5C3A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                feel things
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-5 text-[#4A4760] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0rem" }}
            >
              <p>
                I didn't fall into design by accident. I fell into it because I've always been fascinated
                by one question:{" "}
                <span className="text-[#12111A]" style={{ fontWeight: 500 }}>
                  why do some products feel alive, and others feel like chores?
                </span>
              </p>
              <p>
                My background blends UX methodology with a deep passion for games — not the graphics,
                but the{" "}
                <em>systems</em>. The feedback loops. The progression. The way a well-designed game can
                make 3 hours feel like 20 minutes. That's the feeling I try to bring to every product I work on.
              </p>
              <p>
                I specialize in Game UI/HUD design and digital product experiences, always anchored
                in behavioral psychology and user research. For me, great design isn't just usable —
                it's{" "}
                <span
                  className="relative inline-block"
                  style={{
                    backgroundImage: "linear-gradient(transparent 70%, rgba(93, 82, 255, 0.2) 70%)",
                  }}
                >
                  rewarding.
                </span>
              </p>
            </motion.div>

            {/* Passion tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {[
                "Action-Adventure Games",
                "Behavioral Psychology",
                "Motion Design",
                "Design Systems",
                "Narrative UX",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#12111A]/8 text-[#12111A]/70 text-xs hover:bg-[#5D52FF]/12 hover:text-[#5D52FF] transition-all duration-200 cursor-default"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Mindset cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h3
                className="text-[#12111A]/40 text-xs mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                MY DESIGN MINDSET
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mindsetCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative p-5 rounded-2xl bg-white border border-[#E8E6F0] hover:border-[#5D52FF]/30 hover:shadow-xl hover:shadow-[#5D52FF]/8 transition-all duration-300 cursor-default"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#5D52FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-9 h-9 rounded-xl bg-[#5D52FF]/10 text-[#5D52FF] flex items-center justify-center mb-3 group-hover:bg-[#5D52FF] group-hover:text-white transition-all duration-300">
                    {card.icon}
                  </div>
                  <h4
                    className="text-[#12111A] mb-1.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-[#8B8A99] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem" }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#5D52FF]/10 to-[#5D52FF]/5 border border-[#5D52FF]/15"
            >
              <p
                className="text-[#5D52FF]"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.0rem",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                "Playing action-adventure games isn't a hobby — it's research. Every quest structure,
                every HUD decision teaches me something about how humans process information under pressure."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-0.5 bg-[#5D52FF]/40" />
                <span
                  className="text-[#5D52FF]/60 text-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                >
                  Ho Phu Thinh
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
