import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

function SectionTitle({
  subtitle,
  title,
  description,
}) {
  const { colors } = useTheme();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mx-auto max-w-3xl text-center"
    >
      {/* Subtitle */}

      <span
        className="inline-flex rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em]"
        style={{
          background: colors.badge,
          color: colors.primary,
          border: `1px solid ${colors.border}`,
          backdropFilter: "blur(16px)",
        }}
      >
        {subtitle}
      </span>

      {/* Title */}

      <h2
        className="mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl"
        style={{
          color: colors.text,
        }}
      >
        {title}
      </h2>

      {/* Description */}

      <p
        className="mx-auto mt-6 max-w-2xl text-lg leading-8"
        style={{
          color: colors.textSecondary,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default SectionTitle;