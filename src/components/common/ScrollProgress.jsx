import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 z-[9999] origin-left w-full h-5 overflow-hidden"
    >
      {/* Sand Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8E8C4] via-[#EFD8A2] to-[#DFC07A]" />

      {/* Animated Wave */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute left-0 top-0 h-full w-[200%]"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        <path
          fill="rgba(255,255,255,0.55)"
          d="
            M0,35
            C60,20 120,50 180,35
            C240,20 300,50 360,35
            C420,20 480,50 540,35
            C600,20 660,50 720,35
            C780,20 840,50 900,35
            C960,20 1020,50 1080,35
            C1140,20 1200,50 1260,35
            C1320,20 1380,50 1440,35
            L1440,80
            L0,80
            Z
          "
        />
      </motion.svg>

      {/* Foam */}
      <motion.div
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.9) 1.8px, transparent 2px)",
          backgroundSize: "18px 18px",
        }}
      />
    </motion.div>
  );
}

export default ScrollProgress;