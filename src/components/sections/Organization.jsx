import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../common/FadeIn";
import OrganizationCard from "../common/OrganizationCard";

import organizations from "../../data/organizations";
import { useTheme } from "../../context/ThemeContext";

function Organization() {
  const { colors, isNight } = useTheme();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: false,
    skipSnaps: false,
    duration: 28,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="organization"
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
        className="absolute right-0 bottom-20 h-96 w-96 rounded-full blur-[180px]"
        style={{
          background: colors.heroGlowSecondary,
          opacity: 0.3,
        }}
      />

      <Container>
        <FadeIn>
          <SectionTitle
            subtitle="LEADERSHIP & COMMUNITY"
            title="Leadership & Community Experience"
            description="Building leadership, communication, teamwork, and social impact through mentoring, student organizations, and community engagement."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative mt-20">

            {/* Previous */}

            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full p-4 transition-all duration-300 hover:scale-110 lg:flex"
              style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                color: colors.primary,
                backdropFilter: "blur(18px)",
                boxShadow: `0 12px 35px ${colors.shadow}`,
              }}
            >
              <ChevronLeft />
            </button>

            {/* Next */}

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 rounded-full p-4 transition-all duration-300 hover:scale-110 lg:flex"
              style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                color: colors.primary,
                backdropFilter: "blur(18px)",
                boxShadow: `0 12px 35px ${colors.shadow}`,
              }}
            >
              <ChevronRight />
            </button>

            {/* Carousel */}

            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {organizations.map((organization, index) => (
                  <div
                    key={organization.id}
                    className="
                      min-w-0
                      flex-[0_0_100%]
                      px-4
                      md:flex-[0_0_80%]
                      lg:flex-[0_0_65%]
                      xl:flex-[0_0_60%]
                    "
                  >
                    <div
                      className="transition-all duration-500"
                      style={{
                        transform:
                          index === selectedIndex
                            ? "scale(1)"
                            : "scale(.92)",
                        opacity:
                          index === selectedIndex ? 1 : 0.45,
                      }}
                    >
                      <OrganizationCard
                        organization={organization}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}

            <div className="mt-10 flex justify-center gap-3">
              {organizations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className="h-3 rounded-full transition-all duration-300"
                  style={{
                    width:
                      selectedIndex === index
                        ? "42px"
                        : "12px",
                    background:
                      selectedIndex === index
                        ? colors.primary
                        : isNight
                        ? "rgba(255,255,255,.18)"
                        : "rgba(34,211,238,.25)",
                  }}
                />
              ))}
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default Organization;