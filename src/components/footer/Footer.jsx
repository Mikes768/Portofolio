import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { motion } from "framer-motion";

import Container from "../common/Container";
import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

function Footer() {
  const { colors, isNight } = useTheme();

  const socials = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: profile.linkedin,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: profile.github,
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: `mailto:${profile.email}`,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden pt-32">

      {/* Glow */}

      <div
        className="absolute left-0 bottom-40 h-96 w-96 rounded-full blur-[190px]"
        style={{
          background: colors.heroGlow,
          opacity: .3,
        }}
      />

      <div
        className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full blur-[200px]"
        style={{
          background: colors.heroGlowSecondary,
          opacity: .25,
        }}
      />

      <Container>

        <div className="relative z-10 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="text-5xl font-bold"
            style={{
              color: colors.text,
            }}
          >
            Thanks for Visiting
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8"
            style={{
              color: colors.textSecondary,
            }}
          >
            Thank you for taking the time to explore my portfolio.
            I'm always excited to collaborate on meaningful
            projects and create impactful digital experiences.
          </motion.p>

          {/* Social */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            {socials.map((item) => (

              <motion.a
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full px-6 py-4 transition-all duration-300"
                style={{
                  background: colors.surface,
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  boxShadow: `0 15px 40px ${colors.shadow}`,
                }}
              >
                <span
                  style={{
                    color: colors.primary,
                  }}
                >
                  {item.icon}
                </span>

                {item.label}
              </motion.a>

            ))}

          </div>

          {/* Divider */}

          <div
            className="mx-auto mt-20 h-px max-w-4xl"
            style={{
              background: colors.border,
            }}
          />

          {/* Copyright */}

          <div className="mt-10 space-y-2">

            <p
              style={{
                color: colors.textSecondary,
              }}
            >
              Designed & Developed by
              <span
                className="ml-2 font-semibold"
                style={{
                  color: colors.primary,
                }}
              >
                Michael Jovando Halim
              </span>
            </p>

            <p
              style={{
                color: colors.textMuted,
              }}
            >
              © {new Date().getFullYear()} All Rights Reserved.
            </p>

          </div>

        </div>

      </Container>

      {/* Animated Ocean */}

      <div className="relative mt-24 h-36 overflow-hidden">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 flex w-[200%]"
        >

          {[...Array(2)].map((_, i) => (

            <svg
              key={i}
              viewBox="0 0 1440 140"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                fill={isNight ? "#0f4c81" : "#7dd3fc"}
                fillOpacity=".9"
                d="
                  M0,70
                  C120,20
                  240,120
                  360,70

                  C480,20
                  600,120
                  720,70

                  C840,20
                  960,120
                  1080,70

                  C1200,20
                  1320,120
                  1440,70

                  L1440,140
                  L0,140
                  Z
                "
              />
            </svg>

          ))}

        </motion.div>

      </div>

      {/* Scroll Top */}

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-2"
        style={{
          background: `linear-gradient(135deg, ${colors.buttonFrom}, ${colors.buttonTo})`,
          color: "#fff",
          boxShadow: `0 18px 45px ${colors.glow}`,
        }}
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;