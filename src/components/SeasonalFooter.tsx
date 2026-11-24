import type { ReactNode } from "react";
import { Footer } from "animal-island-ui";
import {
  AcornIcon,
  FlowerIcon,
  LeafIcon,
  MushroomIcon,
  PineTreeIcon,
  SnowflakeIcon,
  StarfishIcon,
  SunIcon,
  ButterflyIcon,
} from "naive-icons";
import type { Season } from "../timeOfDay";
import "./seasonal-footer.css";

// The little decorations for each season
const decorations: Record<Season, ReactNode[]> = {
  spring: [
    <FlowerIcon key="1" size={26} fill="#f8a6b2" />,
    <ButterflyIcon key="2" size={26} fill="#f7cd67" />,
    <FlowerIcon key="3" size={26} fill="#fff" />,
  ],
  summer: [
    <SunIcon key="4" size={26} fill="#f7cd67" />,
    <StarfishIcon key="5" size={26} fill="#e59266" />,
    <SunIcon key="6" size={26} fill="#f7cd67" />,
  ],
  autumn: [
    <LeafIcon key="7" size={26} fill="#e59266" />,
    <AcornIcon key="8" size={26} fill="#9a835a" />,
    <MushroomIcon key="9" size={26} fill="#fc736d" />,
  ],
  winter: [
    <SnowflakeIcon key="10" size={26} color="#889df0" />,
    <PineTreeIcon key="11" size={26} fill="#8ac68a" />,
    <SnowflakeIcon key="12" size={26} color="#889df0" />,
  ],
};

const messages: Record<Season, string> = {
  spring: "Cherry blossom season is here!",
  summer: "Perfect weather for the beach.",
  autumn: "The leaves are changing colors.",
  winter: "Stay cozy out there!",
};

function SeasonalFooter({ season, name }: { season: Season; name: string }) {
  // Repeat the 3 decorations a few times to make a row
  const row = [...decorations[season], ...decorations[season], ...decorations[season]];

  return (
    <footer className={`season-footer season-footer--${season}`}>
      <div className="season-row" aria-hidden="true">
        {row.map((icon, i) => (
          <span key={i} className="season-icon" style={{ animationDelay: `${i * 0.2}s` }}>
            {icon}
          </span>
        ))}
      </div>
      <p className="season-message">{messages[season]}</p>
      <Footer className="season-copyright" text={name} />
    </footer>
  );
}

export default SeasonalFooter;
