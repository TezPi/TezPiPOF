import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Send, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="bg-[#12111A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#5D52FF]/8 blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#FF5C3A]/6 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
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
            LEVEL 07 — CONTACT
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Let's build something{" "}
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: "italic",
                  backgroundImage: "linear-gradient(135deg, #5D52FF, #FF5C3A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                people love
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/55 leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
            >
              Whether you're looking for a UX lead, a Game UI specialist, or a collaborator who
              thinks in systems and feels in stories — I'd love to hear from you. No formalities.
              Just good work and honest conversation.
            </motion.p>

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {[
                {
                  icon: <Mail size={16} />,
                  label: "Email",
                  value: "hophuthinh0609@gmail.com",
                  sub: "Best way to reach me",
                },
                {
                  icon: <MapPin size={16} />,
                  label: "Location",
                  value: "Ho Chi Minh City, Vietnam",
                  sub: "Open to remote worldwide",
                },
                {
                  icon: <Clock size={16} />,
                  label: "Response time",
                  value: "Within 24 hours",
                  sub: "Usually much faster",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#5D52FF]/30 hover:bg-[#5D52FF]/5 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#5D52FF]/15 text-[#5D52FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5D52FF] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-white text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="text-white/35 text-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-white/5 border border-[#5D52FF]/30"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5D52FF] to-[#7B72FF] flex items-center justify-center mb-6 shadow-2xl shadow-[#5D52FF]/30">
                  <span style={{ fontSize: "1.8rem" }}>🎉</span>
                </div>
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.4rem" }}
                >
                  Message sent!
                </h3>
                <p
                  className="text-white/50"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}
                >
                  Thanks for reaching out. I'll get back to you within 24 hours with something worth reading.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", message: "" }); }}
                  className="mt-6 text-[#5D52FF] text-sm hover:text-[#7B72FF] transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      className="block text-white/60 text-xs mb-2"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, letterSpacing: "0.06em" }}
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/8 border text-white placeholder:text-white/25 outline-none transition-all duration-200"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        borderColor: focused === "name" ? "rgba(93,82,255,0.6)" : "rgba(255,255,255,0.1)",
                        boxShadow: focused === "name" ? "0 0 0 3px rgba(93,82,255,0.12)" : "none",
                        background: focused === "name" ? "rgba(93,82,255,0.06)" : "rgba(255,255,255,0.04)",
                      }}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-white/60 text-xs mb-2"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, letterSpacing: "0.06em" }}
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/8 border text-white placeholder:text-white/25 outline-none transition-all duration-200"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        borderColor: focused === "email" ? "rgba(93,82,255,0.6)" : "rgba(255,255,255,0.1)",
                        boxShadow: focused === "email" ? "0 0 0 3px rgba(93,82,255,0.12)" : "none",
                        background: focused === "email" ? "rgba(93,82,255,0.06)" : "rgba(255,255,255,0.04)",
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-white/60 text-xs mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, letterSpacing: "0.06em" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project, timeline, and what you're building..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border text-white placeholder:text-white/25 outline-none transition-all duration-200 resize-none"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      borderColor: focused === "message" ? "rgba(93,82,255,0.6)" : "rgba(255,255,255,0.1)",
                      boxShadow: focused === "message" ? "0 0 0 3px rgba(93,82,255,0.12)" : "none",
                      background: focused === "message" ? "rgba(93,82,255,0.06)" : "rgba(255,255,255,0.04)",
                    }}
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#5D52FF] to-[#7B72FF] text-white hover:shadow-2xl hover:shadow-[#5D52FF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>

                <p
                  className="text-center text-white/25 text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  No spam, ever. Just a real reply from a real person.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}