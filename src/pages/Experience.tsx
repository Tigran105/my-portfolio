import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { EXPERIENCE_DATA } from '../store/appStore';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a glimpse of my professional journey and the projects I've worked on
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{job.position}</h3>
                  <p className="text-blue-600 font-medium mt-1">{job.company}</p>
                </div>
                <span className="text-gray-500 text-sm bg-gray-100 px-4 py-1 rounded-full">
                  {job.period}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
