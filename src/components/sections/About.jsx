import {
  FaLaptopCode,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../common/FadeIn";

import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

const expertise = [
  {
    id: 1,
    title: "Business Analysis",
    icon: <FaChartLine size={28} />,
    description:
      "Experienced in gathering business requirements, creating functional documentation, and bridging communication between stakeholders and development teams.",
  },
  {
    id: 2,
    title: "ERP Implementation",
    icon: <FaDatabase size={28} />,
    description:
      "Hands-on experience with ERP pre-implementation using Odoo, including business process analysis, requirement documentation, gap analysis, and user acceptance testing.",
  },
  {
    id: 3,
    title: "Front-End Development",
    icon: <FaLaptopCode size={28} />,
    description:
      "Passionate about building responsive, modern, and user-friendly web applications using React and Tailwind CSS.",
  },
];

function About() {
  const { colors, isNight } = useTheme();

  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute -left-32 top-24 h-72 w-72 rounded-full blur-[140px]"
        style={{
          background: colors.heroGlow,
        }}
      />

      <div
        className="absolute -right-20 bottom-10 h-80 w-80 rounded-full blur-[160px]"
        style={{
          background: colors.heroGlowSecondary,
        }}
      />

      <Container>

        <FadeIn>

          <SectionTitle
            subtitle="ABOUT ME"
            title="Turning Business Needs Into Digital Solutions"
            description="I enjoy understanding business challenges and transforming them into efficient, user-friendly digital solutions through business analysis, ERP implementation, and modern web development."
          />

        </FadeIn>

        <div className="mt-20 grid items-start gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <FadeIn>

            <div>

              <span
                className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-all duration-500"
                style={{
                  background: colors.badge,
                  color: colors.primary,
                  border: `1px solid ${colors.border}`,
                  backdropFilter: "blur(18px)",
                }}
              >
                🌊 Get To Know Me
              </span>

              <h3
                className="mt-6 text-4xl font-bold"
                style={{
                  color: colors.text,
                }}
              >
                Who am I?
              </h3>

              <p
                className="mt-8 leading-8"
                style={{
                  color: colors.textSecondary,
                }}
              >
                I'm{" "}
                <span
                  style={{
                    color: colors.text,
                    fontWeight: 700,
                  }}
                >
                  {profile.firstName} {profile.lastName}
                </span>
                , an Information Systems graduate with a strong interest in
                Business Analysis, ERP Implementation, and Front-End
                Development.
              </p>

              <p
                className="mt-6 leading-8"
                style={{
                  color: colors.textSecondary,
                }}
              >
                Throughout my academic projects and internships, I have been
                involved in requirement gathering, ERP implementation, UI
                design, documentation, and software development.
              </p>

              <p
                className="mt-6 leading-8"
                style={{
                  color: colors.textSecondary,
                }}
              >
                I enjoy collaborating with multidisciplinary teams and turning
                complex business problems into practical digital solutions that
                provide real value.
              </p>

            </div>

          </FadeIn>

          {/* RIGHT */}

          <FadeIn delay={0.2}>

            <div className="grid gap-6">

              {expertise.map((item) => (

                <div
                  key={item.id}
                  className="rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: colors.surface,
                    border: `1px solid ${colors.border}`,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    boxShadow: `0 20px 50px ${colors.shadow}`,
                  }}
                >

                  {/* Icon */}

                  <div
                    className="inline-flex rounded-2xl p-4 transition-all duration-500"
                    style={{
                      background: isNight
                        ? "rgba(34,211,238,.15)"
                        : "rgba(34,211,238,.12)",
                      color: colors.primary,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}

                  <h3
                    className="mt-6 text-2xl font-bold"
                    style={{
                      color: colors.text,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="mt-4 leading-8"
                    style={{
                      color: colors.textSecondary,
                    }}
                  >
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </FadeIn>

        </div>

      </Container>
    </section>
  );
}

export default About;