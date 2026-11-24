import { LeafIcon } from "naive-icons";
import { profile } from "../data/portfolio";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// Sticky bar at the top. Plain <a href="#id"> links jump to each section.
function NavBar() {
  return (
    <header className="nav">
      <a className="nav-brand" href="#top">
        <LeafIcon size={24} fill="#19c8b9" />
        {profile.name}
      </a>

      <nav aria-label="Sections">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
