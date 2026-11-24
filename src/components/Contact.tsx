import { Button, Card } from "animal-island-ui";
import { BriefcaseIcon, CodeIcon, MailIcon, PostcardIcon } from "naive-icons";
import { profile } from "../data/portfolio";
import { openLink } from "../links";
import Section from "./Section";

function Contact() {
  return (
    <Section id="contact" title="Contact" color="app-teal">
      <Card color="app-green" className="contact-card">
        <PostcardIcon size={48} color="#fff" />
        <h3>Let's build something together!</h3>
        <p>
          I'm always happy to chat about opportunities, projects, or anything you're working on.
          My inbox is open.
        </p>
        <div className="contact-buttons">
          <Button
            type="primary"
            icon={<MailIcon size={16} color="currentColor" />}
            onClick={() => openLink(`mailto:${profile.email}`)}
          >
            Email me
          </Button>
          <Button type="primary"icon={<CodeIcon size={16} color="currentColor" />} onClick={() => openLink(profile.github)}>
            GitHub
          </Button>
          <Button type="primary" icon={<BriefcaseIcon size={16} color="currentColor" />} onClick={() => openLink(profile.linkedin)}>
            LinkedIn
          </Button>
        </div>
      </Card>
    </Section>
  );
}

export default Contact;
