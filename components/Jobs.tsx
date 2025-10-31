import React from 'react'
import { content } from '@/lib/content';

export default function Jobs() {
  return (
    <section className="mb-24">
      <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
        {content.jobs.title}
      </h2>
      <div className="space-y-3 lg:space-y-4">
        {content.jobs.experiences.map((job, index) => (
          <div key={index} className="space-y-3">
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm lg:text-base font-medium text-slate-900 dark:text-white">
                    {job.company}
                  </h3>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {job.title}
                  </p>
                </div>
                <span className="text-xs  font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {job.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

