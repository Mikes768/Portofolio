import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import navigation from "../../data/navigation";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../common/ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { isNight } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-5">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex h-16 items-center justify-between rounded-full border transition-all duration-700 ${
            isNight
              ? scrolled
                ? "border-slate-700/70 bg-slate-900/70 shadow-2xl backdrop-blur-2xl"
                : "border-slate-700/40 bg-slate-900/40 backdrop-blur-xl"
              : scrolled
              ? "border-white/70 bg-white/70 shadow-xl backdrop-blur-2xl"
              : "border-white/40 bg-white/40 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}

          <a
            href="#home"
            className={`pl-7 text-2xl font-black tracking-tight transition-colors duration-500 ${
              isNight ? "text-white" : "text-slate-800"
            }`}
          >
            Michael
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : isNight
                    ? "text-slate-300 hover:text-cyan-400"
                    : "text-slate-600 hover:text-cyan-600"
                }`}
              >
                {item.label}

                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-cyan-400"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Side */}

          <div className="mr-3 hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-300/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/50"
            >
              Contact
            </a>
          </div>

          {/* Mobile Right */}

          <div className="mr-5 flex items-center gap-3 lg:hidden">
            <ThemeToggle />

            <button
              className={`transition-colors ${
                isNight ? "text-white" : "text-slate-700"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div
            className={`mt-4 rounded-3xl border p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 lg:hidden ${
              isNight
                ? "border-slate-700 bg-slate-900/80"
                : "border-white/60 bg-white/80"
            }`}
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 transition ${
                    activeSection === item.id
                      ? "bg-cyan-500/20 text-cyan-400"
                      : isNight
                      ? "text-slate-300 hover:bg-slate-800"
                      : "text-slate-700 hover:bg-cyan-50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;