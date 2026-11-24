import { Card, Collapse, Tag } from "animal-island-ui";
import { about, funFacts, skillGroups } from "../data/portfolio";
import Section from "./Section";

function About() {
  return (
    <Section id="about" title="About me" color="purple">
      <div className="about-grid">
        {/* Left: paragraphs + fun facts */}
        <div className="about-text">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="fun-facts">
            {funFacts.map((fact) => (
              <Collapse key={fact.question} question={fact.question} answer={fact.answer} />
            ))}
          </div>
        </div>

        {/* Right: skills */}
        <Card type="dashed" className="skills-card" id="skills">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <h3>{group.label}</h3>
              <div className="tag-row">
                {group.skills.map((skill) => (
                  <Tag key={skill} color={group.color}>
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
}

export default About;
