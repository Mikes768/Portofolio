import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const badges = [
  {
    title: "Business Analysis",
    className: "top-10 left-10",
    rotate: -6,
  },
  {
    title: "ERP",
    className: "top-16 right-8",
    rotate: 6,
  },
  {
    title: "React",
    className: "top-1/2 -left-12",
    rotate: -8,
  },
  {
    title: "SQL",
    className: "bottom-24 left-4",
    rotate: -4,
  },
  {
    title: "Odoo",
    className: "bottom-8 left-1/3",
    rotate: 5,
  },
  {
    title: "Figma",
    className: "bottom-16 right-6",
    rotate: 7,
  },
  {
    title: "UI/UX",
    className: "top-1/3 right-0",
    rotate: 5,
  },
  {
    title: "Front-End",
    className: "top-1/2 right-10",
    rotate: -5,
  },
];

function HeroFloatingBadges() {
  const { colors, isNight } = useTheme();

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-30 hidden lg:block"
      animate={{
        y: [-15, 15, -15],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.title}
          className={`absolute ${badge.className}`}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: index * 0.08,
            duration: 0.6,
          }}
        >
          <motion.div
            animate={{
              x: [0, 6, 0, -6, 0],
              y: [0, -10, 0, 10, 0],
              rotate: [
                badge.rotate,
                badge.rotate + 2,
                badge.rotate,
                badge.rotate - 2,
                badge.rotate,
              ],
            }}
            transition={{
              duration: 5 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="rounded-full whitespace-nowrap px-5 py-2.5 text-sm font-semibold"
            style={{
              background: colors.badge,
              color: colors.text,
              border: `1px solid ${colors.border}`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: isNight
                ? `0 0 25px ${colors.glow}`
                : `0 12px 30px ${colors.shadow}`,
            }}
          >
            {badge.title}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HeroFloatingBadges;