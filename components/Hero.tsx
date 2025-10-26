import { Github, Mail, Sparkles, Linkedin } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { content } from '@/lib/content';

export default function Hero() {
	return (
		<section className="mb-24">
			<div className="flex flex-col gap-6 lg:gap-8">
				<div className="flex max-lg:flex-col gap-6 lg:gap-8">
					<div className="relative w-28 h-28 aspect-square rounded-full overflow-hidden flex-shrink-0">
						<Image
							src="/dylanweb.jpg"
							fill
							alt="Dylan - Fullstack Developer"
							priority
							className="object-cover backdrop-brightness-100"
						></Image>
					</div>
					<div className="space-y-4">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">
							<Sparkles className="w-3.5 h-3.5" />
							<span>{content.hero.status}</span>
						</div>
						<h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400">
								{content.hero.title}
							</span>
						</h1>
					</div>
				</div>
				<div className="space-y-4">
					<p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
						{content.hero.description}
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
						<a
							href={content.hero.links.email}
							className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-sm sm:text-base font-medium"
						>
							<Mail className="w-3.5 h-3.5" />
							{content.hero.buttons.contact}
						</a>
						<a
							href={content.hero.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm sm:text-base font-medium"
						>
							<Github className="w-3.5 h-3.5" />
							{content.hero.buttons.github}
						</a>
						<a
							href={content.hero.links.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm sm:text-base font-medium"
						>
							<Linkedin className="w-3.5 h-3.5" />
							{content.hero.buttons.linkedin}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
