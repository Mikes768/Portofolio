import skills from "../../data/skills";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../common/FadeIn";

import { useTheme } from "../../context/ThemeContext";

function TechStack() {
  const { colors } = useTheme();

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28"
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
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full blur-[190px]"
        style={{
          background: colors.heroGlowSecondary,
          opacity: 0.28,
        }}
      />

      <Container>

        <FadeIn>
          <SectionTitle
            subtitle="TECH STACK"
            title="Skills & Technologies"
            description="A collection of technologies, tools, and methodologies that I use to design, analyze, and develop digital products."
          />
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skills.map((group, index) => (

            <FadeIn
              key={group.category}
              delay={index * 0.08}
            >
              <div
                className="
                  group
                  h-full
                  rounded-3xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
                style={{
                  background: colors.surface,
                  border: `1px solid ${colors.border}`,
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow: `0 18px 45px ${colors.shadow}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 30px 80px ${colors.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 18px 45px ${colors.shadow}`;
                }}
              >
                {/* Category */}

                <h3
                  className="mb-6 text-2xl font-bold"
                  style={{
                    color: colors.text,
                  }}
                >
                  {group.category}
                </h3>

                {/* Skills */}

                <div className="flex flex-wrap gap-3">

                  {group.items.map((item) => (

                    <span
                      key={item}
                      className="
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        font-semibold
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
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default TechStack;