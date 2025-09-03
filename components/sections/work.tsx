import React from "react";

const projects = [
	{
		id: 1,
		title: "Education Analytics Dashboard (Confidential Client) ",
		description:
			"📌 AI tool to extract strategic priorities from U.S. school district plans.",
	},
	{
		id: 2,
		title: "GPT-Powered Document Chatbot",
		description:
			"📌 Built a Retrieval-Augmented AI chatbot to answer user queries using document context.",
	},
	{
		id: 3,
		title: "Apan Theater – Streaming Platform",
		description:
			"📌 Built a subscription-based mobile streaming platform with secure video delivery and scalable backend.",
	},
	{
		id: 4,
		title: "TimeBloc - Focus & Task Manager",
		description:
			"📌 Built a cross-platform app that boosts focus using the Pomodoro Technique with integrated music playback from jiosaavn, YouTube music and smart task tracking.",
	},
    {
        id: 5,
        title: "CareConnect - Student Performance Tracker",
        description:
            "📌 Built a mobile app to track student performance with real-time WhatsApp alerts for parents.",
    },
    {
        id: 6,
        title: "Pay All Day – Payments App",
        description:
            "📌 Developed an end-to-end payments platform supporting mobile recharges, money transfers, and wallet-based transactions.",
    },
];

export default function WorkSection() {
	return (
		<section id="work" className="mx-auto max-w-7xl px-6 py-24">
			<h2 className="text-3xl md:text-5xl font-semibold mb-6">
				Selected Work
			</h2>
			<p className="text-white/70 max-w-2xl mb-12">
				Projects we’ve built with clarity, speed, and reliability for startups
				and teams worldwide.
			</p>
			<div className="grid gap-6 md:grid-cols-2">
				{projects.map((project) => (
					<div
						key={project.id}
						className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition"
					>
						<h3 className="text-xl font-medium mb-2">{project.title}</h3>
						<p className="text-white/70 mb-4">{project.description}</p>
						<a
							href="#"
							className="text-sm text-white/80 underline hover:text-white"
						>
							View case study →
						</a>
					</div>
				))}
			</div>
		</section>
	);
}