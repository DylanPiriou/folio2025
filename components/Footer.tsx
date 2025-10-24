import React from 'react'
import { content } from '@/lib/content';

export default function Footer() {
  return (
		<footer className="pt-12 pb-8 border-t border-slate-200 dark:border-slate-800">
			<div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
				<p>{content.footer.copyright}</p>
				<p>{content.footer.builtWith}</p>
			</div>
		</footer>
  );
}
