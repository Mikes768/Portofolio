import FadeIn from "../common/FadeIn";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import { useTheme } from "../../context/ThemeContext";

function Introduction() {
  const { colors } = useTheme();

  return (
    <section
      id="introduction"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div
        className="absolute left-0 top-20 h-80 w-80 rounded-full blur-[170px]"
        style={{
          background: colors.heroGlow,
          opacity: 0.35,
        }}
      />

      <div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full blur-[190px]"
        style={{
          background: colors.heroGlowSecondary,
          opacity: 0.3,
        }}
      />

      <Container>

        {/* Section Title */}

        <FadeIn>

          <SectionTitle
            subtitle="INTRODUCTION"
            title="Meet Michael"
            description="A short cinematic introduction about my background, passion, and journey in Business Analysis, ERP Implementation, Front-End Development, and Digital Solutions."
          />

        </FadeIn>

        {/* Video */}

        <FadeIn delay={0.2}>

          <div className="mx-auto mt-20 max-w-5xl">

            <div
              className="
                overflow-hidden
                rounded-[36px]
                p-4
                transition-all
                duration-500
                hover:-translate-y-2
              "
              style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: `0 25px 70px ${colors.shadow}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  `0 40px 90px ${colors.glow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  `0 25px 70px ${colors.shadow}`;
              }}
            >
              <video
                controls
                preload="metadata"
                className="
                  aspect-video
                  w-full
                  rounded-[28px]
                  object-cover
                "
              >
                <source
                  src="/videos/introduction.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}

export default Introduction;