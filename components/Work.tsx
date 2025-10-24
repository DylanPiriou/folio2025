import React from 'react'
import { ExternalLink, ArrowRight } from 'lucide-react';
import { content } from '@/lib/content';

export default function Work() {
  return (
    <section className="mb-24">
      <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
        {content.work.title}
      </h2>
      <div className="space-y-8">
        {content.work.projects.map((project, index) => (
          <div key={index} className="group border-b border-slate-200 dark:border-slate-800 pb-8 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <a 
                    href={project.link}
                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
                  >
                    {project.name}
                  </a>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                className="self-start sm:self-auto p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label={`View ${project.name}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
