import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030712]">
      {/* Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 10%, rgba(59,130,246,.18), transparent 35%),
            radial-gradient(circle at 85% 25%, rgba(6,182,212,.12), transparent 35%),
            radial-gradient(circle at 50% 80%, rgba(37,99,235,.12), transparent 40%),
            linear-gradient(
              180deg,
              #030712 0%,
              #020617 35%,
              #08111f 70%,
              #030712 100%
            )
          `,
        }}
      />

      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-40, 40, -40],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-[170px]"
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [60, -60, 60],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-250px] top-[20%] h-[700px] w-[700px] rounded-full bg-cyan-400/10 blur-[180px]"
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[200px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.18) 0.5px, transparent .5px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />
    </div>
  );
}