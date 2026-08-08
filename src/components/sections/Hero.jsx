import Container from "../common/Container";
import FadeIn from "../common/FadeIn";
import GlitchText from "../common/GlitchText";

import HeroImage from "../hero/HeroImage";
import HeroFloatingBadges from "../hero/HeroFloatingBadges";
import HeroButtons from "../hero/HeroButtons";
import HeroStats from "../hero/HeroStats";

import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

function Hero() {
  const { colors, isNight } = useTheme();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 transition-all duration-1000"
    >
      {/* ================= VIDEO ================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`
          absolute inset-0 h-full w-full object-cover
          transition-all duration-1000
          ${isNight ? "brightness-[0.35]" : "brightness-100"}
        `}
      >
        <source src="/videos/ocean.mp4" type="video/mp4" />
      </video>

      {/* ================= OVERLAY ================= */}

      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: isNight
            ? "rgba(2,6,23,.55)"
            : "rgba(255,255,255,.60)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* ================= SKY GRADIENT ================= */}

      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `linear-gradient(
            to bottom,
            ${colors.skyTop}10,
            ${colors.skyMiddle}66,
            ${colors.skyBottom}
          )`,
        }}
      />

      {/* ================= HERO GLOW ================= */}

      <div
        className="hero-glow absolute -left-32 top-24 h-[420px] w-[420px] rounded-full"
      />

      <div
        className="hero-glow-secondary absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 w-full">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <FadeIn>
              <div className="max-w-xl">

                {/* Status */}

                <span
                  className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-xl transition-all duration-700"
                  style={{
                    background: colors.badge,
                    border: `1px solid ${colors.border}`,
                    color: colors.primary,
                  }}
                >
                  {isNight ? "🌙" : "🌊"} {profile.status}
                </span>

                {/* Title */}

                <h1
                  className="mt-8 text-5xl font-black leading-tight tracking-tight lg:text-7xl"
                  style={{
                    color: colors.text,
                  }}
                >
                  Hi, I'm
                  <br />

                  <GlitchText
                    style={{
                      color: colors.text,
                    }}
                  >
                    Michael Jovando Halim
                  </GlitchText>
                </h1>

                {/* Job */}

                <h2
                  className="mt-8 text-2xl font-bold"
                  style={{
                    color: colors.text,
                  }}
                >
                  {profile.title}
                </h2>

                <p
                  className="mt-3 text-lg font-semibold"
                  style={{
                    color: colors.primary,
                  }}
                >
                  {profile.subtitle}
                </p>

                {/* Description */}

                <p
                  className="mt-8 text-lg leading-8"
                  style={{
                    color: colors.textSecondary,
                  }}
                >
                  {profile.description}
                </p>

                {/* Buttons */}

                <div className="mt-10">
                  <HeroButtons />
                </div>

                {/* Stats */}

                <div className="mt-12">
                  <HeroStats />
                </div>

              </div>
            </FadeIn>

            {/* RIGHT */}

            <FadeIn delay={0.2}>
              <div className="relative flex justify-center">

                <HeroFloatingBadges />

                <HeroImage />

              </div>
            </FadeIn>

          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;