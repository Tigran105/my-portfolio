import React from "react";
import { Section } from "../components/ui/Section";
import { AboutMe } from "../sections/about/AboutMe.tsx";
import { Skills } from "../sections/about/Skills.tsx";
import { MyPhoto } from "../sections/about/MyPhoto.tsx";
import { PersonalInfo } from "../sections/about/PersonalInfo.tsx";
import WhatIDo from "../sections/about/WhatIdo.tsx";
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
