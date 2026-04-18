import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0C14] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#5D52FF] to-[#FF5C3A] flex items-center justify-center">
              <span className="text-white text-[10px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>H</span>
            </div>
            <span
              className="text-white/40 text-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
            >
              Ho Phu Thinh — UX/UI & Game UI Designer
            </span>
          </div>

          {/* Center */}
          <div className="flex items-center gap-1.5 text-white/25 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span>Designed & built with</span>
            <Heart size={11} className="text-[#FF5C3A] fill-[#FF5C3A]" />
            <span>and way too much coffee</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-1">
            {["01", "02", "03", "04", "05", "06", "07"].map((level) => (
              <div
                key={level}
                className="w-4 h-1 rounded-full bg-[#5D52FF]/30 hover:bg-[#5D52FF] transition-colors duration-300 cursor-default"
                title={`Level ${level}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p
            className="text-white/15 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 Ho Phu Thinh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
