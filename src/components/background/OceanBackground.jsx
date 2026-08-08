import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

function OceanBackground() {
  const { colors, isNight } = useTheme();

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* Sky */}

      <motion.div
        className="absolute inset-0"
        animate={{
          background: `linear-gradient(
            180deg,
            ${colors.skyTop} 0%,
            ${colors.skyMiddle} 45%,
            ${colors.skyBottom} 100%
          )`,
        }}
        transition={{
          duration: 0.8,
        }}
      />

      {/* Ocean */}

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        animate={{
          background: `linear-gradient(
            180deg,
            ${colors.oceanTop},
            ${colors.oceanBottom}
          )`,
        }}
        transition={{
          duration: 0.8,
        }}
      />

      {/* Sun */}

      <AnimatePresence>

        {!isNight && (

          <motion.div
            initial={{
              opacity: 0,
              scale: .6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: .5,
            }}
            transition={{
              duration: .8,
            }}
            className="absolute top-20 right-24 h-64 w-64 rounded-full blur-[90px]"
            style={{
              background: "rgba(253,224,71,.65)",
            }}
          />

        )}

      </AnimatePresence>

      {/* Moon */}

      <AnimatePresence>

        {isNight && (

          <motion.div
            initial={{
              opacity: 0,
              scale: .4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: .8,
            }}
            className="absolute top-24 right-28 h-40 w-40 rounded-full blur-[60px]"
            style={{
              background: colors.primaryLight,
            }}
          />

        )}

      </AnimatePresence>

      {/* Blob Left */}

      <motion.div
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{
          background: colors.heroGlow,
        }}
      />

      {/* Blob Right */}

      <motion.div
        animate={{
          x: [0, -80, 20, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "easeInOut",
        }}
        className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full blur-[120px]"
        style={{
          background: colors.heroGlowSecondary,
        }}
      />

      {/* Ocean Reflection */}

      <motion.div
        animate={{
          opacity: isNight ? 0.45 : 0.75,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 h-60 w-[800px] -translate-x-1/2 rounded-full blur-[100px]"
        style={{
          background: colors.primary,
        }}
      />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

    </div>
  );
}

export default OceanBackground;