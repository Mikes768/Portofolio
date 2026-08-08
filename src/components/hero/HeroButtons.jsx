import { FaDownload, FaEnvelope } from "react-icons/fa";
import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

function HeroButtons() {
  const { colors } = useTheme();

  return (
    <div className="mt-10 flex flex-wrap gap-4">

      {/* Contact */}

      <a
        href={`mailto:${profile.email}`}
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-[1.03]
        "
        style={{
          background: `linear-gradient(135deg, ${colors.buttonFrom}, ${colors.buttonTo})`,
          boxShadow: `0 15px 40px ${colors.glow}`,
        }}
      >
        <FaEnvelope />

        Contact Me
      </a>

      {/* Download */}

      <a
        href={profile.resume}
        download
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          px-8
          py-4
          font-semibold
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-[1.03]
        "
        style={{
          background: colors.surface,
          color: colors.text,
          border: `1px solid ${colors.border}`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: `0 12px 35px ${colors.shadow}`,
        }}
      >
        <FaDownload />

        Download CV
      </a>

    </div>
  );
}

export default HeroButtons;