'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projectTypes = [
	{
		key: "web",
		title: "Web Project",
		description: "🧑‍💼 I Just Have an Idea → Describe idea in plain words, we translate to tech plan.", //Start a new web-based project with modern frameworks
		icon: (
			<svg width="40" height="40" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" fill="#38bdf8" opacity="0.2" />
				<path
					d="M4 12h16M12 4a16 16 0 010 16M12 4a16 16 0 000 16"
					stroke="#38bdf8"
					strokeWidth="2"
				/>
			</svg>
		),
	},
	{
		key: "cli",
		title: "CLI Tool",
		description: "👨‍💻 I Know Tech → Pick stack, features, integrations, deployment preferences.", // Create a command-line tool for automation or scripting.",
		icon: (
			<svg width="40" height="40" fill="none" viewBox="0 0 24 24">
				<rect
					x="2"
					y="4"
					width="20"
					height="16"
					rx="4"
					fill="#a78bfa"
					opacity="0.2"
				/>
				<path
					d="M7 9l3 3-3 3M13 15h4"
					stroke="#a78bfa"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
]

export default function ProjectTypeSelector() {
	const [selected, setSelected] = useState<string | null>(null)

	return (
		<div className="w-full flex flex-col items-center justify-center py-5 pb-25">
			<h2 className="text-2xl font-semibold mb-8 text-center dark:invert">
				Choose Project Type
			</h2>
			<div className="flex gap-8">
				{projectTypes.map((type) => (
					<AnimatePresence key={type.key}>
						{selected === null || selected === type.key ? (
							<motion.div
								key={type.key}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{
									opacity: 1,
									scale: selected === type.key ? 1.05 : 1,
									boxShadow:
										selected === type.key
											? "0 8px 32px 0 rgba(0,0,0,0.25), 0 0 32px 4px #38bdf8"
											: "0 8px 32px 0 rgba(0,0,0,0.15)",
								}}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.5, type: "spring" }}
								className={`relative cursor-pointer rounded-3xl p-8 min-w-[260px] max-w-xs bg-white/20 dark:bg-gray-900/40 border border-white/20 dark:border-gray-800/40 shadow-xl transition-all
                  ${selected === type.key ? "ring-4 ring-sky-400/40 dark:ring-violet-400/40 z-10" : ""}
                  hover:scale-105 hover:ring-2 hover:ring-sky-300/30 dark:hover:ring-violet-300/30`}
								onClick={() => setSelected(type.key)}
							>
								<div className="flex flex-col items-center gap-4">
									<div>{type.icon}</div>
									<div className="text-xl font-semibold dark:invert text-center">
										{type.title}
									</div>
									<div className="text-gray-700 dark:invert text-center">
										{type.description}
									</div>
								</div>
								{selected === type.key && (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										className="absolute bottom-4 left-1/2 -translate-x-1/2"
									>
										<span className="px-4 py-1 rounded-full bg-sky-500/80 dark:bg-violet-500/80 text-white text-sm font-medium shadow-lg">
											Selected
										</span>
									</motion.div>
								)}
							</motion.div>
						) : null}
					</AnimatePresence>
				))}
			</div>
			{selected && (
				<button
					className="mt-10 px-6 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-lg transition"
					onClick={() => setSelected(null)}
				>
					Back
				</button>
			)}
		</div>
	)
}