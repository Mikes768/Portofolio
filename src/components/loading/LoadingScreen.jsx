import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

function LoadingScreen() {
  const { colors, isNight } = useTheme();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 2;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }

      setProgress(value);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          background: colors.background,
        }}
      >

        {/* Glow */}

        <div
          className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full blur-[180px]"
          style={{
            background: colors.heroGlow,
            opacity: .35,
          }}
        />

        <div
          className="absolute right-0 bottom-0 h-[460px] w-[460px] rounded-full blur-[200px]"
          style={{
            background: colors.heroGlowSecondary,
            opacity: .25,
          }}
        />

        <div className="relative z-10 flex flex-col items-center">

          {/* Sun / Moon */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mb-8 text-7xl"
          >
            {isNight ? "🌙" : "☀️"}
          </motion.div>

          {/* Name */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .8,
            }}
            className="text-center text-5xl font-bold"
            style={{
              color: colors.text,
            }}
          >
            Michael Jovando Halim
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .2,
            }}
            className="mt-5 text-lg"
            style={{
              color: colors.textSecondary,
            }}
          >
            Building Digital Experiences
          </motion.p>

          {/* Progress */}

          <div className="mt-12 w-80">

            <div
              className="h-2 overflow-hidden rounded-full"
              style={{
                background: colors.border,
              }}
            >

              <motion.div
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  ease: "easeOut",
                }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg,
                    ${colors.buttonFrom},
                    ${colors.buttonTo})`,
                }}
              />

            </div>

            <motion.div
              key={progress}
              initial={{
                opacity: .5,
              }}
              animate={{
                opacity: 1,
              }}
              className="mt-5 text-center"
              style={{
                color: colors.primary,
              }}
            >
              {progress === 100
                ? "Welcome Aboard 🌊"
                : `Loading Portfolio ${progress}%`}
            </motion.div>

          </div>

        </div>

        {/* Wave */}

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">

          <motion.svg
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            viewBox="0 0 2880 140"
            className="w-[200%]"
          >

            <path
              fill={isNight ? "#0F4C81" : "#7DD3FC"}
              d="
                M0,70
                C120,20 240,120 360,70
                C480,20 600,120 720,70
                C840,20 960,120 1080,70
                C1200,20 1320,120 1440,70

                C1560,20 1680,120 1800,70
                C1920,20 2040,120 2160,70
                C2280,20 2400,120 2520,70
                C2640,20 2760,120 2880,70

                L2880,140
                L0,140
                Z
              "
            />

          </motion.svg>

        </div>

      </motion.div>

    </AnimatePresence>
  );
}

export default LoadingScreen;