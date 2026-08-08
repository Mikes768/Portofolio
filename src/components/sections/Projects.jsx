import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import FadeIn from "../common/FadeIn";

import projects from "../../data/projects";

import { useTheme } from "../../context/ThemeContext";

function Projects() {
  const { colors } = useTheme();

  return (
    <section
      id="projects"
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

        <FadeIn>

          <SectionTitle
            subtitle="PROJECTS"
            title="Featured Projects"
            description="A selection of projects that showcase my experience in Business Analysis, ERP Implementation, Front-End Development, UI/UX Design, and Digital Solutions."
          />

        </FadeIn>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {projects.map((project, index) => (

            <FadeIn
              key={project.id}
              delay={index * 0.1}
            >

              <ProjectCard
                project={project}
              />

            </FadeIn>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;