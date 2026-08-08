import { useEffect } from "react";

function MouseGlow() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("pointermove", move);

    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
      "
    >
      <div className="mouse-glow" />
    </div>
  );
}

export default MouseGlow;