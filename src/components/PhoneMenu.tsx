import type { ReactNode } from "react";
import {
  ButterflyIcon,
  MapIcon,
  MuseumIcon,
  PassportIcon,
  PostcardIcon,
} from "naive-icons";
import type { Period } from "../timeOfDay";
import { scrollToSection } from "../links";
import "./phone.css";

// Each "app" on the phone either jumps to a section of the page or opens a link.
interface App {
  label: string;
  icon: ReactNode;
  color: string;
  onOpen: () => void;
}

const apps: App[] = [
  { label: "Profile", icon: <PassportIcon size={34} color="#fff" />, color: "#82d5bb", onOpen: () => scrollToSection("about") },
  { label: "Museum", icon: <MuseumIcon size={34} color="#fff" />, color: "#e59266", onOpen: () => scrollToSection("projects") },
  { label: "Journey", icon: <MapIcon size={34} color="#fff" />, color: "#889df0", onOpen: () => scrollToSection("experience") },
  { label: "Collection", icon: <ButterflyIcon size={34} color="#fff" />, color: "#8ac68a", onOpen: () => scrollToSection("skills") },
  { label: "Letters", icon: <PostcardIcon size={34} color="#fff" />, color: "#f8a6b2", onOpen: () => scrollToSection("contact") },
];

const greetings: Record<Period, string> = {
  morning: "Good morning!",
  day: "Good afternoon!",
  evening: "Good evening!",
  night: "Up late tonight?",
};

function PhoneMenu({ now, period }: { now: Date; period: Period }) {
  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div className="phone">
      <div className="phone-top">
        <span className="phone-time">{time}</span>
        <span>{greetings[period]}</span>
      </div>

      <div className="phone-grid">
        {apps.map((app) => (
          <button key={app.label} className="phone-app" onClick={app.onOpen}>
            <span className="phone-app-icon" style={{ background: app.color }}>
              {app.icon}
            </span>
            <span className="phone-app-label">{app.label}</span>
          </button>
        ))}
      </div>

      <p className="phone-hint">Tap an app to explore</p>
    </div>
  );
}

export default PhoneMenu;
