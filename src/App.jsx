import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useTheme } from "./context/ThemeContext";

import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import Introduction from "./components/sections/Introduction";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Organization from "./components/sections/Organization";
import TechStack from "./components/sections/TechStack";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";

import Footer from "./components/footer/Footer";

import ScrollProgress from "./components/common/ScrollProgress";
import MouseGlow from "./components/common/MouseGlow";

import OceanBackground from "./components/background/OceanBackground";
import LoadingScreen from "./components/loading/LoadingScreen";

function App() {
  const { colors } = useTheme();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" />
      ) : (
        <div
          key="app"
          className="relative overflow-x-hidden transition-colors duration-700"
          style={{
            background: colors.background,
            color: colors.text,
          }}
        >
          {/* Progress */}
          <ScrollProgress />

          {/* Background */}
          <OceanBackground />

          {/* Mouse Glow */}
          <MouseGlow />

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            <Hero />

            <Introduction />

            <About />

            <Education />

            <Organization />

            <TechStack />

            <Experience />

            <Projects />

            <Certificates />

            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;