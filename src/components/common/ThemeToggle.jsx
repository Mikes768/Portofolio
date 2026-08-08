import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { isNight, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative
        flex
        h-12
        w-24
        items-center
        rounded-full
        overflow-hidden
        border
        border-white/30
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-700
      "
    >
      {/* Background */}

      <motion.div
        animate={{
          background: isNight
            ? "linear-gradient(135deg,#0f172a,#1e293b,#334155)"
            : "linear-gradient(135deg,#7dd3fc,#38bdf8,#22d3ee)",
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute inset-0"
      />

      {/* Clouds */}

      <motion.div
        animate={{
          opacity: isNight ? 0 : 1,
          x: isNight ? -20 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute left-3 top-2 text-white text-sm"
      >
        ☁️
      </motion.div>

      <motion.div
        animate={{
          opacity: isNight ? 0 : 1,
          x: isNight ? -10 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute right-3 bottom-2 text-xs"
      >
        ☁️
      </motion.div>

      {/* Stars */}

      <motion.div
        animate={{
          opacity: isNight ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <span className="absolute left-4 top-2 text-[10px] text-white">
          ✦
        </span>

        <span className="absolute right-4 top-4 text-[8px] text-white">
          ✦
        </span>

        <span className="absolute left-8 bottom-2 text-[7px] text-white">
          ✦
        </span>
      </motion.div>

      {/* Sliding Circle */}

      <motion.div
        layout
        animate={{
          x: isNight ? 48 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="
          relative
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-xl
        "
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isNight ? 360 : 0,
            scale: isNight ? 0.9 : 1,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {isNight ? (
            <Moon
              size={20}
              className="text-slate-700"
              fill="currentColor"
            />
          ) : (
            <Sun
              size={20}
              className="text-yellow-500"
              fill="currentColor"
            />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
}

export default ThemeToggle;