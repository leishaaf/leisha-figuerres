import type { ReactNode } from "react";
import { Title } from "animal-island-ui";
import type { TitleColor } from "animal-island-ui";

// A page section with a ribbon heading. The `id` is what the nav links jump to.
function Section({
  id,
  title,
  color,
  children,
}: {
  id: string;
  title: string;
  color: TitleColor;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="section-title">
        <Title color={color}>{title}</Title>
      </div>
      {children}
    </section>
  );
}

export default Section;
