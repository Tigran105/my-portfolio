import React from "react";
import { Section } from "@/shared/components/ui/Section.tsx";
import { Socials } from "@/features/contact/components/Socials.tsx";
import { GetInTouch } from "@/features/home/components/GetInTouch.tsx";

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
