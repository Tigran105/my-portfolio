import React from "react";
import { Section } from "@/shared/components/ui/Section.tsx";
import { GithubCTA } from "@/features/experience/components/GithubCTA.tsx";
import { Experience as Experiences } from "@/features/experience/components/Experience.tsx";
import { Seo } from "@/shared/components/common/Seo/Seo.tsx";

export const Experience: React.FC = () => {
  return (
    <>
      <Seo
        titleKey="seo.experience.title"
        descriptionKey="seo.experience.description"
        canonicalPath="/experience"
      />
      <Section id="experience" className="bg-foreground/3">
        <Experiences />
        <GithubCTA username={"Tigran105"} />
      </Section>
    </>
  );
};
