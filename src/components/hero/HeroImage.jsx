import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

export default function HeroImage() {
  const { colors, isNight } = useTheme();

  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="relative flex h-[540px] w-[540px] items-center justify-center"
    >
      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full blur-[140px]"
        style={{
          width: 440,
          height: 440,
          background: isNight
            ? colors.heroGlow
            : "rgba(253,224,71,.35)",
        }}
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full blur-[180px]"
        style={{
          width: 560,
          height: 560,
          background: colors.heroGlowSecondary,
        }}
      />

      {/* Glass Ring */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.02, 1],
        }}
        transition={{
          rotate: {
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute h-[445px] w-[445px] rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          background: colors.surface,
          backdropFilter: "blur(20px)",
        }}
      />

      {/* Photo */}
      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="relative z-20"
      >
        <div
          className="rounded-full p-3"
          style={{
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            backdropFilter: "blur(24px)",
            boxShadow: `0 30px 80px ${colors.shadow}`,
          }}
        >
          <img
            src={profile.image}
            alt={profile.name}
            draggable={false}
            className="h-[410px] w-[410px] rounded-full border-[8px] object-cover select-none"
            style={{
              borderColor: isNight ? "#0f172a" : "#ffffff",
            }}
          />
        </div>
      </motion.div>

      {/* Highlight */}
      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          y: [-6, 6, -6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-24 top-20 h-28 w-28 rounded-full blur-3xl"
        style={{
          background: "rgba(255,255,255,.6)",
        }}
      />

      {/* Reflection */}
      <motion.div
        animate={{
          scaleX: [1, 1.1, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-6 h-20 w-72 rounded-full blur-[80px]"
        style={{
          background: colors.primary,
        }}
      />
    </motion.div>
  );
}