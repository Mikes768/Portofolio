import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function ProjectCard({ project }) {
  const { colors } = useTheme();

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[32px]
        transition-all
        duration-500
        hover:-translate-y-2
      "
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: `0 20px 55px ${colors.shadow}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 35px 85px ${colors.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 55px ${colors.shadow}`;
      }}
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      </div>

      {/* Content */}

      <div className="p-8">

        {/* Category */}

        <span
          className="
            inline-flex
            rounded-full
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
          "
          style={{
            background: colors.badge,
            color: colors.primary,
            border: `1px solid ${colors.border}`,
          }}
        >
          {project.category}
        </span>

        {/* Title */}

        <h3
          className="mt-5 text-2xl font-bold"
          style={{
            color: colors.text,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}

        <p
          className="mt-5 leading-8"
          style={{
            color: colors.textSecondary,
          }}
        >
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                background: colors.badge,
                color: colors.primary,
                border: `1px solid ${colors.border}`,
              }}
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-4">

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                background: `linear-gradient(135deg, ${colors.buttonFrom}, ${colors.buttonTo})`,
                boxShadow: `0 12px 30px ${colors.glow}`,
              }}
            >
              <FaExternalLinkAlt />

              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                background: colors.surface,
                color: colors.text,
                border: `1px solid ${colors.border}`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <FaGithub />

              GitHub
            </a>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;