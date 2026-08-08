import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../common/FadeIn";

import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

function Contact() {
  const { colors, isNight } = useTheme();

  const contacts = [
    {
      title: "Email",
      value: profile.email,
      link: `mailto:${profile.email}`,
      icon: <FaEnvelope size={26} />,
    },
    {
      title: "LinkedIn",
      value: "Connect with me",
      link: profile.linkedin,
      icon: <FaLinkedin size={26} />,
    },
    {
      title: "GitHub",
      value: "View my repositories",
      link: profile.github,
      icon: <FaGithub size={26} />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div
        className="absolute left-0 top-0 h-80 w-80 rounded-full blur-[170px]"
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
            subtitle="CONTACT"
            title="Let's Build Something Together"
            description="I'm always open to discussing new opportunities, collaboration, freelance projects, or simply having a conversation about technology."
          />

        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {contacts.map((item, index) => (

            <FadeIn
              key={item.title}
              delay={index * 0.1}
            >

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  block
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

                {/* Icon */}

                <div
                  className="
                    inline-flex
                    rounded-2xl
                    p-4
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                  style={{
                    background: isNight
                      ? "rgba(34,211,238,.12)"
                      : colors.badge,
                    color: colors.primary,
                    border: `1px solid ${colors.border}`,
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

                {/* Value */}

                <p
                  className="mt-3 leading-7"
                  style={{
                    color: colors.textSecondary,
                  }}
                >
                  {item.value}
                </p>

              </a>

            </FadeIn>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Contact;