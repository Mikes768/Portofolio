import { useEffect, useMemo, useRef, useState } from "react";
import "./GlitchText.css";

const GLITCH_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*+-=?<>[]{}";

function randomChar() {
  return GLITCH_CHARS[
    Math.floor(Math.random() * GLITCH_CHARS.length)
  ];
}

function scrambleText(text, progress) {
  return text
    .split("")
    .map((char, index) => {
      if (char === " " || char === "\n") return char;

      return index < progress ? char : randomChar();
    })
    .join("");
}

function splitLines(children) {
  if (Array.isArray(children)) {
    return children.flatMap((item) => {
      if (typeof item === "string") {
        return item.split("\n");
      }

      return item;
    });
  }

  if (typeof children === "string") {
    return children.split("\n");
  }

  return [children];
}

function GlitchText({
  children,
  className = "",
  speed = 35,
  hover = true,
}) {
  const original = useMemo(() => {
    if (typeof children === "string") {
      return children;
    }

    if (Array.isArray(children)) {
      return children.join("");
    }

    return "";
  }, [children]);

  const [displayText, setDisplayText] = useState(original);

  const [glitching, setGlitching] = useState(false);

  const timerRef = useRef(null);

  const animationRef = useRef(null);

  const isAnimating = useRef(false);

  const runAnimation = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    setGlitching(true);

    let frame = 0;

    animationRef.current = setInterval(() => {
      frame++;

      setDisplayText(
        scrambleText(
          original,
          Math.floor(frame / 2)
        )
      );

      if (frame >= original.length * 2) {
        clearInterval(animationRef.current);

        setDisplayText(original);

        setGlitching(false);

        isAnimating.current = false;
      }
    }, speed);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      runAnimation();
    }, 500);

    return () => {
      clearTimeout(timerRef.current);

      clearInterval(animationRef.current);
    };
  }, [original]);

  const handleMouseEnter = () => {
    if (!hover) return;

    runAnimation();
  };
    const lines = splitLines(displayText);

  return (
    <div
      className={`relative inline-block select-none ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {/* Red Layer */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none transition-all duration-150 ${
          glitching
            ? "translate-x-[2px] -translate-y-[1px] opacity-80 text-red-500"
            : "opacity-0"
        }`}
      >
        {lines.map((line, index) => (
          <div key={`red-${index}`} className="leading-tight">
            {line || "\u00A0"}
          </div>
        ))}
      </div>

      {/* Cyan Layer */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none transition-all duration-150 ${
          glitching
            ? "-translate-x-[2px] translate-y-[1px] opacity-80 text-cyan-400"
            : "opacity-0"
        }`}
      >
        {lines.map((line, index) => (
          <div key={`cyan-${index}`} className="leading-tight">
            {line || "\u00A0"}
          </div>
        ))}
      </div>

      {/* Main Text */}
      <div
        className={`relative transition-all duration-100 ${
          glitching ? "tracking-widest" : "tracking-normal"
        }`}
      >
        {lines.map((line, index) => (
          <div key={`main-${index}`} className="leading-tight">
            {line || "\u00A0"}
          </div>
        ))}
      </div>

      {/* Scan Line */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 right-0 h-px bg-white/60 transition-all duration-200 ${
          glitching ? "top-1/2 opacity-100" : "top-0 opacity-0"
        }`}
      />

      {/* Noise Overlay */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none rounded-md transition-opacity duration-150 ${
          glitching ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0px, rgba(255,255,255,.05) 1px, transparent 2px, transparent 4px)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}

export default GlitchText;