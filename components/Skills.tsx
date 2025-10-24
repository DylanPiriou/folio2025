import React from 'react'
import { content } from '@/lib/content';

export default function Skills() {
  return (
    <section className="mb-24">
      <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
        {content.skills.title}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {content.skills.technologies.map((tech, index) => (
          <div key={index} className="flex items-start">
            <div>
              <a 
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 dark:text-white font-medium hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                {tech.name} —
              </a>
              <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400 italic ml-1">
                {tech.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
