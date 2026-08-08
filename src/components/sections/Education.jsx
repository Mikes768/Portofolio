import {
  GraduationCap,
  CalendarDays,
  MapPin,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../common/FadeIn";

import { useTheme } from "../../context/ThemeContext";

function Education() {
  const { colors, isNight } = useTheme();

  return (
    <section
      id="education"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div
        className="absolute left-0 top-32 h-72 w-72 rounded-full blur-[150px]"
        style={{
          background: colors.heroGlow,
        }}
      />

      <div
        className="absolute right-0 bottom-10 h-80 w-80 rounded-full blur-[170px]"
        style={{
          background: colors.heroGlowSecondary,
        }}
      />

      <Container>

        <FadeIn>

          <SectionTitle
            subtitle="EDUCATION"
            title="Academic Background"
            description="My academic journey has provided a strong foundation in Information Systems, Business Analysis, Enterprise Systems, and Software Development."
          />

        </FadeIn>

        <FadeIn delay={0.2}>

          <div className="mx-auto mt-20 max-w-5xl">

            <div
              className="rounded-[36px] p-10 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: `0 25px 60px ${colors.shadow}`,
              }}
            >

              <div className="flex flex-col gap-8 md:flex-row">

                {/* Icon */}

                <div
                  className="flex h-24 w-24 items-center justify-center rounded-3xl transition-all duration-500"
                  style={{
                    background: isNight
                      ? "rgba(34,211,238,.15)"
                      : "rgba(34,211,238,.12)",
                    color: colors.primary,
                  }}
                >
                  <GraduationCap size={42} />
                </div>

                {/* Content */}

                <div className="flex-1">

                  <h3
                    className="text-3xl font-bold"
                    style={{
                      color: colors.text,
                    }}
                  >
                    Universitas Multimedia Nusantara
                  </h3>

                  <p
                    className="mt-2 text-xl font-semibold"
                    style={{
                      color: colors.primary,
                    }}
                  >
                    Bachelor of Information Systems
                  </p>

                  {/* Info */}

                  <div
                    className="mt-5 flex flex-wrap gap-6"
                    style={{
                      color: colors.textMuted,
                    }}
                  >

                    <div className="flex items-center gap-2">
                      <CalendarDays size={18} />
                      <span>2022 — 2026</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>South Tangerang, Indonesia</span>
                    </div>

                  </div>

                  {/* Description */}

                  <p
                    className="mt-8 leading-8"
                    style={{
                      color: colors.textSecondary,
                    }}
                  >
                    Studied Information Systems with a focus on Business
                    Analysis, Enterprise Resource Planning (ERP),
                    UI/UX Design, Database Systems, and Web Development.
                  </p>

                  {/* Bottom Cards */}

                  <div className="mt-10 grid gap-5 md:grid-cols-2">

                    {/* Focus */}

                    <div
                      className="rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
                      style={{
                        background: colors.badge,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      <p
                        className="text-sm font-bold uppercase tracking-[0.18em]"
                        style={{
                          color: colors.primary,
                        }}
                      >
                        Focus Areas
                      </p>

                      <p
                        className="mt-4 leading-7"
                        style={{
                          color: colors.textSecondary,
                        }}
                      >
                        Business Analysis, ERP, Front-End Development,
                        UI/UX Design, Database Systems, Software Development,
                        Digital Marketing, and Project Management.
                      </p>
                    </div>

                    {/* Final Project */}

                    <div
                      className="rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
                      style={{
                        background: colors.badge,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      <p
                        className="text-sm font-bold uppercase tracking-[0.18em]"
                        style={{
                          color: colors.primary,
                        }}
                      >
                        Final Project
                      </p>

                      <p
                        className="mt-4 leading-7"
                        style={{
                          color: colors.textSecondary,
                        }}
                      >
                        ERP Readiness Analysis as a Basis for Designing an
                        Enterprise Resource Planning (ERP) Prototype for Sales
                        and Inventory Modules: A Case Study of PT Adi Perkasa
                        Lestari.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}

export default Education;