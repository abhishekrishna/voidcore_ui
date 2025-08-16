// components/home/startup_sections/StartupPlanSection.tsx

import { GlassCard } from "../ui/glass_card";


export const StartupPlanSection = () => {
  const rows = [
    { stage: "MVP", goal: "Build working product", hire: "FS Dev" },
    { stage: "Launch", goal: "Get first 50 users", hire: "Marketing/Growth" },
    { stage: "Scale", goal: "Expand features", hire: "Backend + Ops" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <GlassCard>
          <table className="w-full text-left">
            <thead>
              <tr className="text-pink-300">
                <th className="py-2">Stage</th>
                <th className="py-2">Goal</th>
                <th className="py-2">Execution</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-t border-white/10">
                  <td className="py-3">{row.stage}</td>
                  <td className="py-3">{row.goal}</td>
                  <td className="py-3">{row.hire}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </div>
    </section>
  );
};