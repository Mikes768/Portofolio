import {
  BriefcaseBusiness,
  CalendarDays,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../common/FadeIn";

import experiences from "../../data/experience";
import { useTheme } from "../../context/ThemeContext";

function Experience() {
  const { colors } = useTheme();

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 md:py-28"
    >
      {/* Background Glow */}

      <div
        className="absolute left-0 top-24 h-80 w-80 rounded-full blur-[170px]"
        style={{
          background: colors.heroGlow,
          opacity: 0.35,
        }}
      />

      <div
        className="absolute right-0 bottom-10 h-96 w-96 rounded-full blur-[190px]"
        style={{
          background: colors.heroGlowSecondary,
          opacity: 0.3,
        }}
      />

      <Container>
        <FadeIn>
          <SectionTitle
            subtitle="EXPERIENCE"
            title="Professional Journey"
            description="My professional experiences in business analysis, ERP implementation, frontend development, and customer-oriented solutions."
          />
        </FadeIn>

        <div className="relative mt-16 md:mt-20">

          {/* Timeline */}

          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-[2px]
              md:left-6
              lg:left-1/2
              lg:-translate-x-1/2
            "
            style={{
              background: colors.border,
            }}
          />

          <div className="space-y-10 md:space-y-14 lg:space-y-16">

            {experiences.map((item, index) => (

              <FadeIn
                key={item.id}
                delay={index * 0.12}
              >
                <div
                  className={`relative flex flex-col ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >

                  {/* Timeline Dot */}

                  <div
                    className="
                      absolute
                      left-5
                      top-8
                      z-10
                      h-4
                      w-4
                      -translate-x-1/2
                      rounded-full
                      border-4
                      md:left-6
                      lg:left-1/2
                      lg:h-5
                      lg:w-5
                    "
                    style={{
                      background: colors.primary,
                      borderColor: colors.surface,
                      boxShadow: `0 0 25px ${colors.glow}`,
                    }}
                  />

                  {/* Card */}

                  <div
                    className="
                      ml-10
                      w-[calc(100%-2.5rem)]
                      md:ml-14
                      md:w-[calc(100%-3.5rem)]
                      lg:ml-0
                      lg:w-5/12
                    "
                  >
                    <div
                      className="
                        rounded-3xl
                        p-6
                        sm:p-8
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
                        e.currentTarget.style.boxShadow =
                          `0 35px 85px ${colors.glow}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          `0 20px 55px ${colors.shadow}`;
                      }}
                    >

                      {/* Position */}

                      <h3
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-2
                          text-xl
                          font-bold
                          sm:text-2xl
                        "
                        style={{
                          color: colors.text,
                        }}
                      >
                        <BriefcaseBusiness
                          size={22}
                          style={{
                            color: colors.primary,
                          }}
                        />

                        <span>{item.position}</span>
                      </h3>

                      {/* Company */}

                      <p
                        className="mt-3 text-base font-semibold sm:text-lg"
                        style={{
                          color: colors.primary,
                        }}
                      >
                        {item.company}
                      </p>

                      {/* Period */}

                      <div
                        className="mt-3 flex items-center gap-2 text-sm"
                        style={{
                          color: colors.textMuted,
                        }}
                      >
                        <CalendarDays size={16} />
                        <span>{item.period}</span>
                      </div>

                      {/* Description */}

                      <p
                        className="mt-6 leading-8"
                        style={{
                          color: colors.textSecondary,
                        }}
                      >
                        {item.description}
                      </p>

                      {/* Responsibilities */}

                      <div className="mt-8">
                        <h4
                          className="font-semibold"
                          style={{
                            color: colors.text,
                          }}
                        >
                          Key Responsibilities
                        </h4>

                        <ul className="mt-5 space-y-2 sm:space-y-3">
                          {item.responsibilities.map((responsibility) => (
                            <li
                              key={responsibility}
                              className="flex items-start gap-3"
                              style={{
                                color: colors.textSecondary,
                              }}
                            >
                              <span
                                className="mt-2 h-2.5 w-2.5 rounded-full shrink-0"
                                style={{
                                  background: colors.primary,
                                }}
                              />

                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}

                      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="
                              rounded-full
                              px-3
                              py-2
                              text-xs
                              font-semibold
                              transition-all
                              duration-300
                              hover:-translate-y-1
                              sm:px-4
                              sm:text-sm
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

                    </div>
                  </div>

                  {/* Spacer */}

                  <div className="hidden lg:block lg:w-5/12" />

                </div>
              </FadeIn>

            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Experience;