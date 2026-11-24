import type { Period } from "../timeOfDay";
import NightSky from "./NightSky";
import "./sky.css";

// The decorations in the sky. The sky COLOR comes from the
// `enter-page--{period}` class on the page (see sky.css).
function Sky({ period }: { period: Period }) {
  // At night: your stars and shooting stars
  if (period === "night") return <NightSky />;

  return (
    <div className="sky" aria-hidden="true">
      <div className={`sun sun--${period}`} />
      <div className="cloud cloud--1" />
      <div className="cloud cloud--2" />
      <div className="cloud cloud--3" />
    </div>
  );
}

export default Sky;
