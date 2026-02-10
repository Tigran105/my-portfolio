import React from "react";
import { Hero } from "@/features/home/components/Hero.tsx";
import { AboutPreview } from "@/features/home/components/AboutPreview.tsx";
import { ExperiencePreview } from "@/features/home/components/ExperiencePreview.tsx";
import { Education } from "@/features/home/components/Education.tsx";
import { GetInTouch } from "@/features/home/components/GetInTouch.tsx";
import { Seo } from "@/shared/components/common/Seo/Seo.tsx";

export const Home: React.FC = () => {
  return (
    <>
      <Seo
        titleKey="seo.home.title"
        descriptionKey="seo.home.description"
        canonicalPath="/"
      />
      <Hero />
      <AboutPreview />
      <ExperiencePreview />
      <Education />
      <GetInTouch />
    </>
  );
};
