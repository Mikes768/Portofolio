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
      className="relative flex h-[220px] w-[220px] items-center justify-center sm:h-[320px] sm:w-[320px] md:h-[400px] md:w-[400px] lg:h-[420px] lg:w-[420px] xl:h-[540px] xl:w-[540px]"
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
        className="absolute h-[81%] w-[81%] rounded-full blur-[60px] sm:blur-[90px] xl:blur-[140px]"
        style={{
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
        className="absolute h-[104%] w-[104%] rounded-full blur-[70px] sm:blur-[110px] xl:blur-[180px]"
        style={{
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
        className="absolute h-[82%] w-[82%] rounded-full"
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
          className="rounded-full p-1.5 sm:p-2 xl:p-3"
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
            className="h-[166px] w-[166px] rounded-full border-[4px] object-cover select-none sm:h-[244px] sm:w-[244px] sm:border-[6px] md:h-[304px] md:w-[304px] lg:h-[320px] lg:w-[320px] xl:h-[410px] xl:w-[410px] xl:border-[8px]"
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
        className="absolute left-8 top-6 h-10 w-10 rounded-full blur-2xl sm:left-16 sm:top-14 sm:h-16 sm:w-16 sm:blur-3xl xl:left-24 xl:top-20 xl:h-28 xl:w-28"
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
        className="absolute bottom-3 h-8 w-28 rounded-full blur-[40px] sm:bottom-4 sm:h-12 sm:w-40 sm:blur-[60px] xl:bottom-6 xl:h-20 xl:w-72 xl:blur-[80px]"
        style={{
          background: colors.primary,
        }}
      />
    </motion.div>
  );
}