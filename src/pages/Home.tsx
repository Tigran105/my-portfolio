import React from 'react';
import { Hero } from '../sections/home/Hero';
import { AboutPreview } from '../sections/home/AboutPreview';
import { ExperiencePreview } from '../sections/home/ExperiencePreview';
import { Education } from '../sections/home/Education';
import { GetInTouch } from '../sections/home/GetInTouch';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ExperiencePreview />
      <Education />
      <GetInTouch />
    </>
  );
};
