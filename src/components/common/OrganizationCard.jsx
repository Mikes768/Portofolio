import {
  CalendarDays,
  Trophy,
  Users,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

function OrganizationCard({ organization }) {
  const { colors } = useTheme();

  return (
    <div
      className="
        group
        flex
        min-h-[720px]
        flex-col
        overflow-hidden
        rounded-[34px]
        transition-all
        duration-500
        hover:-translate-y-2
      "
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: `0 20px 70px ${colors.shadow}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 35px 90px ${colors.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 70px ${colors.shadow}`;
      }}
    >
      {/* ================= Image ================= */}

      <div className="relative h-60 overflow-hidden">
        <img
          src={organization.image}
          alt={organization.organization}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        {/* Badge */}

        <div className="absolute bottom-6 left-6">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2
              text-sm
              font-semibold
            "
            style={{
              background: colors.surface,
              color: colors.primary,
              border: `1px solid ${colors.border}`,
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <Users size={16} />
            {organization.organization}
          </div>
        </div>
      </div>

      {/* ================= Content ================= */}

      <div className="flex flex-1 flex-col p-8">

        {/* Position */}

        <h3
          className="text-3xl font-bold leading-tight"
          style={{
            color: colors.text,
          }}
        >
          {organization.position}
        </h3>

        {/* Period */}

        <div
          className="mt-3 flex items-center gap-2"
          style={{
            color: colors.textMuted,
          }}
        >
          <CalendarDays size={17} />
          <span>{organization.period}</span>
        </div>

        {/* Description */}

        <p
          className="mt-6 leading-8"
          style={{
            color: colors.textSecondary,
          }}
        >
          {organization.description}
        </p>

        {/* Highlights */}

        {organization.achievements?.length > 0 && (
          <div className="mt-8">

            <div className="mb-4 flex items-center gap-2">

              <Trophy
                size={18}
                style={{
                  color: colors.primary,
                }}
              />

              <span
                className="font-semibold"
                style={{
                  color: colors.text,
                }}
              >
                Highlights
              </span>

            </div>

            <ul className="space-y-3">

              {organization.achievements.map((item, index) => (

                <li
                  key={index}
                  className="flex items-start gap-3"
                  style={{
                    color: colors.textSecondary,
                  }}
                >
                  <span
                    className="mt-2 h-2 w-2 rounded-full flex-shrink-0"
                    style={{
                      background: colors.primary,
                    }}
                  />

                  <span>{item}</span>

                </li>

              ))}

            </ul>

          </div>
        )}

        {/* Skills */}

        <div className="mt-auto pt-8">

          <div className="flex flex-wrap gap-3">

            {(organization.skills ?? []).map((skill, index) => (

              <span
                key={index}
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
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default OrganizationCard;