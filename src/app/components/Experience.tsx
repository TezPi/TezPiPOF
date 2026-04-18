import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, TrendingUp, Clock, Target } from "lucide-react";

const MURROR_IMG =
  "https://images.unsplash.com/photo-1642557581366-539b6fed5998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjB3ZWxsbmVzcyUyMG1vYmlsZSUyMGFwcCUyMFVJJTIwZGVzaWdufGVufDF8fHx8MTc3NjM2NTc2OXww&ixlib=rb-4.1.0&q=80&w=1080";

const INKLAB_IMG =
  "https://images.unsplash.com/photo-1663430218780-889edbb73e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhdWdtZW50ZWQlMjByZWFsaXR5JTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3NjM2NTc2OXww&ixlib=rb-4.1.0&q=80&w=1080";

interface MetricProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

function Metric({ value, label, icon, color }: MetricProps) {
  return (
    <div
      className="flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 hover:scale-[1.02]"
      style={{ borderColor: `${color}25`, backgroundColor: `${color}08` }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}18`, color }}
      >
        {icon}
      </div>
      <div>
        <div
          className="text-[#12111A]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}
        >
          {value}
        </div>
        <div
          className="text-[#8B8A99]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem" }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="bg-[#F7F6F3] py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#5D52FF]/4 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FF5C3A]/4 blur-[100px] translate-x-1/3 translate-y-1/3" />

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
              LEVEL 04 — EXPERIENCE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#12111A]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Projects with real impact
          </motion.h2>
        </div>

        {/* Project 1: Murror AI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 group"
        >
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0 overflow-hidden rounded-3xl bg-white border border-[#E8E6F0] hover:border-[#5D52FF]/25 hover:shadow-2xl hover:shadow-[#5D52FF]/8 transition-all duration-400">
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img
                src={MURROR_IMG}
                alt="Murror AI Mental Wellness App"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#12111A]/60 lg:hidden" />

              {/* Overlay tag */}
              <div className="absolute top-5 left-5">
                <div
                  className="px-3 py-1.5 rounded-full text-xs"
                  style={{
                    background: "rgba(93, 82, 255, 0.9)",
                    backdropFilter: "blur(8px)",
                    color: "white",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Mental Wellness · 2024
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div
                    className="text-[#5D52FF] text-xs mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    UI/UX DESIGNER — END-TO-END
                  </div>
                  <h3
                    className="text-[#12111A]"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Murror AI
                  </h3>
                </div>
                <button className="w-9 h-9 rounded-full border border-[#E8E6F0] flex items-center justify-center text-[#8B8A99] hover:border-[#5D52FF] hover:text-[#5D52FF] hover:bg-[#5D52FF]/8 transition-all duration-200 flex-shrink-0 mt-1">
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <p
                className="text-[#4A4760] leading-relaxed mb-6 mt-3"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
              >
                A mental wellness companion that turns daily mental health habits into a game. Using
                behavioral psychology — specifically variable reward schedules and streak mechanics — I
                designed an engagement loop that made check-ins feel like{" "}
                <span className="text-[#12111A]" style={{ fontWeight: 500 }}>
                  progression, not obligation.
                </span>
              </p>

              {/* UX Insight */}
              <div className="relative p-4 rounded-2xl bg-[#5D52FF]/6 border-l-4 border-[#5D52FF] mb-6">
                <p
                  className="text-[#5D52FF] text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span style={{ fontWeight: 600 }}>Behavioral hook:</span> Streak mechanics trigger loss
                  aversion. Reward loops activate dopamine. The result: users checked in not because they
                  had to — but because breaking the streak{" "}
                  <em>felt wrong.</em>
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                <Metric value="+25%" label="Daily Active Users" icon={<TrendingUp size={15} />} color="#5D52FF" />
                <Metric value="+15%" label="Retention Rate" icon={<Target size={15} />} color="#22C55E" />
                <Metric value="-30%" label="Drop-off Rate" icon={<Clock size={15} />} color="#FF5C3A" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2: InkLab */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="group"
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0 overflow-hidden rounded-3xl bg-white border border-[#E8E6F0] hover:border-[#FF5C3A]/25 hover:shadow-2xl hover:shadow-[#FF5C3A]/8 transition-all duration-400">
            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div
                    className="text-[#FF5C3A] text-xs mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    UI/UX DESIGNER — AI + AR
                  </div>
                  <h3
                    className="text-[#12111A]"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    InkLab Tattoo
                  </h3>
                </div>
                <button className="w-9 h-9 rounded-full border border-[#E8E6F0] flex items-center justify-center text-[#8B8A99] hover:border-[#FF5C3A] hover:text-[#FF5C3A] hover:bg-[#FF5C3A]/8 transition-all duration-200 flex-shrink-0 mt-1">
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <p
                className="text-[#4A4760] leading-relaxed mb-6 mt-3"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
              >
                AI-powered tattoo generation with real-time AR preview. The core challenge: AR experiences
                carry heavy cognitive load. Users were dropping off at the "try it on" step. I redesigned
                the discovery-to-preview flow to make{" "}
                <span className="text-[#12111A]" style={{ fontWeight: 500 }}>
                  each step feel like a natural next thought,
                </span>{" "}
                not a separate task.
              </p>

              {/* UX Insight */}
              <div className="relative p-4 rounded-2xl bg-[#FF5C3A]/6 border-l-4 border-[#FF5C3A] mb-6">
                <p
                  className="text-[#FF5C3A] text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span style={{ fontWeight: 600 }}>Friction reduction strategy:</span> Collapsed 5-step
                  flow into 2 progressive steps using contextual defaults and anticipatory design. Users
                  no longer had to "configure" — the app anticipated their intent.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                <Metric value="84/100" label="SUS Score" icon={<Target size={15} />} color="#FF5C3A" />
                <Metric value="-60%" label="Discovery Time" icon={<Clock size={15} />} color="#5D52FF" />
                <Metric value="4.8★" label="Usability Rating" icon={<TrendingUp size={15} />} color="#FFB800" />
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
              <img
                src={INKLAB_IMG}
                alt="InkLab Tattoo AR Platform"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#12111A]/60 lg:hidden" />

              {/* Overlay tag */}
              <div className="absolute top-5 right-5">
                <div
                  className="px-3 py-1.5 rounded-full text-xs"
                  style={{
                    background: "rgba(255, 92, 58, 0.9)",
                    backdropFilter: "blur(8px)",
                    color: "white",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  AI · AR · 2024
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
