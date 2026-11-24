import { Card, Tag } from "animal-island-ui";
import { MapPinIcon } from "naive-icons";
import { experience } from "../data/portfolio";
import Section from "./Section";

// A vertical timeline: a line down the left with a dot for each job
function Experience() {
  return (
    <Section id="experience" title="Experience" color="app-blue">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.role + job.org} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <Card className="job-card">
              <div className="job-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="job-org">{job.org}</p>
                </div>
                <Tag color="app-blue" variant="soft">
                  {job.dates}
                </Tag>
              </div>
              <p className="job-location">
                <MapPinIcon size={14} color="currentColor" /> {job.location}
              </p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
