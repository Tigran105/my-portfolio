import React from "react";
import { Section } from "@/shared/components/ui/Section.tsx";
import { MyPhoto } from "@/features/about/components/MyPhoto.tsx";
import { AboutMe } from "@/features/about/components/AboutMe.tsx";
import WhatIDo from "@/features/about/components/WhatIdo.tsx";
import { Skills } from "@/features/about/components/Skills.tsx";
import { PersonalInfo } from "@/features/about/components/PersonalInfo.tsx";
export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="container mx-auto lg:px-20 pt-20">
        <div className={"flex flex-col lg:flex-row items-center gap-12 mb-16"}>
          <MyPhoto className="order-1" />
          <AboutMe className="order-2 lg:order-3" />
        </div>
        <div className={"xl:px-20"}>
          <WhatIDo />
          <Skills className="order-3 lg:order-2" />
          <PersonalInfo />
        </div>
      </div>
    </Section>
  );
};
