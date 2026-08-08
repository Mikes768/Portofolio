import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaAward,
} from "react-icons/fa";

import {
  CalendarDays,
  Building2,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

function CertificateCard({ certificate }) {
  const { colors } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[30px]"
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        boxShadow: `0 20px 60px ${colors.shadow}`,
        backdropFilter: "blur(20px)",
      }}
    >
      {/* ================= IMAGE ================= */}

      <div className="relative overflow-hidden">

        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category */}

        <div className="absolute left-5 top-5">

          <div
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              background: colors.surface,
              color: colors.primary,
              border: `1px solid ${colors.border}`,
            }}
          >
            <FaAward />

            {certificate.category}

          </div>

        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-8">

        {/* Title */}

        <h3
          className="text-2xl font-bold leading-snug"
          style={{
            color: colors.text,
          }}
        >
          {certificate.title}
        </h3>

        {/* Issuer */}

        <div
          className="mt-6 flex items-center gap-3"
          style={{
            color: colors.textMuted,
          }}
        >
          <Building2 size={18} />

          <span>{certificate.issuer}</span>

        </div>

        {/* Year */}

        <div
          className="mt-3 flex items-center gap-3"
          style={{
            color: colors.textMuted,
          }}
        >
          <CalendarDays size={18} />

          <span>{certificate.year}</span>

        </div>

        {/* Description */}

        <p
          className="mt-6 leading-8"
          style={{
            color: colors.textSecondary,
          }}
        >
          {certificate.description}
        </p>

        {/* Skills */}

        <div className="mt-8 flex flex-wrap gap-3">

          {certificate.skills?.map((skill) => (

            <span
              key={skill}
              className="rounded-full px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-1"
              style={{
                background: colors.badge,
                color: colors.primary,
                border: `1px solid ${colors.border}`,
              }}
            >
              {skill}
            </span>

          ))}

        </div>

        {/* Button */}

        <div className="mt-10">

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-white"
            style={{
              background: `linear-gradient(135deg, ${colors.buttonFrom}, ${colors.buttonTo})`,
              boxShadow: `0 10px 30px ${colors.glow}`,
            }}
          >
            <FaExternalLinkAlt />

            View Certificate

          </motion.a>

        </div>

      </div>
    </motion.div>
  );
}

export default CertificateCard;