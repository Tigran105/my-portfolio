import React from "react";
import { Section } from "../components/ui/Section";
import { GetInTouch } from "../sections/home/GetInTouch.tsx";
import { Socials } from "../sections/contact/Socials.tsx";

export const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <Socials />
        <GetInTouch />
      </div>
    </Section>
  );
};
