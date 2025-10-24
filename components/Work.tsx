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
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
			title={project.name}
            className="group block rounded-lg transition-colors duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                    {project.name}
                  </h3>
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
              <div className="self-start sm:self-auto p-2 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
