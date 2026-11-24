import { useState } from "react";
import { Button, Card, Modal, Tag } from "animal-island-ui";
import { CodeIcon, ExternalLinkIcon } from "naive-icons";
import { projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import { openLink } from "../links";
import Section from "./Section";

// The Code / Live demo buttons (used on the card AND in the popup)
function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.repoUrl && (
        <Button
          size="small"
          icon={<CodeIcon size={14} color="currentColor" />}
          onClick={(e) => {
            e.stopPropagation(); // don't also open the popup
            openLink(project.repoUrl!);
          }}
        >
          Code
        </Button>
      )}
      {project.liveUrl && (
        <Button
          size="small"
          type="primary"
          icon={<ExternalLinkIcon size={14} color="currentColor" />}
          onClick={(e) => {
            e.stopPropagation();
            openLink(project.liveUrl!);
          }}
        >
          Live demo
        </Button>
      )}
    </div>
  );
}

function Projects() {
  // Which project's popup is open (null = none)
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Projects" color="app-yellow">
      <div className="project-grid">
        {projects.map((project) => (
          <Card
            key={project.title}
            color={project.color}
            hoverable
            className="project-card"
            role="button"
            tabIndex={0}
            onClick={() => setSelected(project)}
            onKeyDown={(e) => e.key === "Enter" && setSelected(project)}
          >
            <span className="project-year">{project.year}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <Tag key={tag} size="small" variant="soft">
                  {tag}
                </Tag>
              ))}
            </div>
            <ProjectLinks project={project} />
          </Card>
        ))}
      </div>

      {/* Popup with the full details */}
      <Modal
        open={selected !== null}
        title={selected?.title}
        typewriter={false}
        onClose={() => setSelected(null)}
        footer={selected && <ProjectLinks project={selected} />}
      >
        {selected && (
          <div className="project-details">
            <ul>
              {selected.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="tag-row">
              {selected.tags.map((tag) => (
                <Tag key={tag} size="small" color={selected.color}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}

export default Projects;
