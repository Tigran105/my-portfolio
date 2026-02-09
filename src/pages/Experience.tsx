import React from "react";
import { Section } from "../components/ui/Section";
import { Experience as Experiences } from "../sections/experience/Experience.tsx";
import { GithubCTA } from "../sections/experience/GithubCTA.tsx";

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-foreground/3">
      <Experiences />
      <GithubCTA username={"Tigran105"} />
    </Section>
  );
};
