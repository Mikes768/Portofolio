import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

function HeroStats() {
  const { colors } = useTheme();

  return (
    <div className="mt-14 grid grid-cols-3 gap-5">
      {profile.stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.12,
            duration: 0.5,
          }}
          whileHover={{
            y: -8,
            scale: 1.04,
          }}
          className="relative overflow-hidden rounded-3xl p-6 text-center transition-all duration-500"
          style={{
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: `0 20px 45px ${colors.shadow}`,
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-x-0 top-0 h-1"
            style={{
              background: `linear-gradient(90deg,
                transparent,
                ${colors.primary},
                transparent)`,
            }}
          />

          {/* Number */}
          <motion.h3
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="relative text-4xl font-extrabold"
            style={{
              color: colors.primary,
            }}
          >
            {stat.value}
          </motion.h3>

          {/* Label */}
          <p
            className="relative mt-2 text-sm font-medium tracking-wide"
            style={{
              color: colors.textSecondary,
            }}
          >
            {stat.label}
          </p>

          {/* Background Glow */}
          <div
            className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background: colors.glow,
              opacity: 0.4,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default HeroStats;