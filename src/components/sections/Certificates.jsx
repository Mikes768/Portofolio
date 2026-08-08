import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FadeIn from "../common/FadeIn";
import CertificateCard from "../common/CertificateCard";

import certificates from "../../data/certificates";
import { useTheme } from "../../context/ThemeContext";

function Certificates() {
  const { colors } = useTheme();

  return (
    <section
      id="certificates"
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
        className="absolute right-0 bottom-10 h-96 w-96 rounded-full blur-[190px]"
        style={{
          background: colors.heroGlowSecondary,
          opacity: 0.3,
        }}
      />

      <Container>

        {/* Section Title */}

        <FadeIn>

          <SectionTitle
            subtitle="CERTIFICATES"
            title="Professional Certifications"
            description="Continuous learning through certifications, bootcamps, workshops, and professional training to strengthen my technical and analytical skills."
          />

        </FadeIn>

        {/* Certificates */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {certificates.map((certificate, index) => (

            <FadeIn
              key={certificate.id}
              delay={index * 0.1}
            >

              <CertificateCard
                certificate={certificate}
              />

            </FadeIn>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Certificates;