// components/home/modules_section.tsx
import { Card } from "@/components/ui/card";

const modules = [
  { name: "Auth & Onboarding", desc: "Secure sign-up, login, and onboarding flow." },
  { name: "Project Dashboard", desc: "Centralized hub for all your workflows." },
  { name: "API Integrations", desc: "Connect with your stack in one click." },
  { name: "Automations", desc: "Set triggers, workflows, and background jobs." },
  { name: "Analytics", desc: "Track usage, metrics, and performance." },
  { name: "Billing & Subscriptions", desc: "Stripe-powered seamless payments." },
  { name: "User Roles", desc: "Granular permissions and access control." },
  { name: "Data Storage", desc: "Secure cloud or local deployment options." },
];

export function ModulesSection() {
  return (
    <section className="relative py-20 px-6 sm:px-12">
      <h2 className="text-4xl font-bold text-center mb-12">Core Modules</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((m, i) => (
          <Card
            key={i}
            className="backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{m.name}</h3>
            <p className="text-sm">{m.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}