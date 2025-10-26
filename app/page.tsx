import { ThemeToggle } from "@/components/theme-toggle";
import Footer from "@/components/Footer";
import Jobs from "@/components/Jobs";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import { content } from "@/lib/content";

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative">
			<div
				className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:40px_40px]"
				style={{
					maskImage: "linear-gradient(to bottom, white, transparent)",
					WebkitMaskImage:
						"linear-gradient(to bottom, white, transparent)",
				}}
			></div>

			<div className="max-w-4xl mx-auto px-6 py-16 sm:px-8 relative">
				<nav className="flex justify-between items-center w-full mb-8">
				<span className="text-sm lg:text-base tracking-tight">{content.hero.name}</span>
					<ThemeToggle />
				</nav>
				<Hero/>
				<Skills/>
				<Work/>
				<Jobs/>
				<Footer/>
			</div>
		</main>
	);
}
