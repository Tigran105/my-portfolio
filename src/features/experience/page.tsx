import React from "react";
import { Section } from "@/shared/components/ui/Section.tsx";
import { GithubCTA } from "@/features/experience/components/GithubCTA.tsx";
import { Experience as Experiences } from "@/features/experience/components/Experience.tsx";

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-foreground/3">
      <Experiences />
      <GithubCTA username={"Tigran105"} />
    </Section>
  );
};
