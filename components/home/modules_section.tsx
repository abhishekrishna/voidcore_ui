// components/home/modules_section.tsx
import { Card } from "@/components/ui/card";
import { useState } from "react";
import TextColorToggle from "@/components/ui/text-color-toggle";
import Image from "next/image";

const modules = [
  { name: "Auth & Onboarding", desc: "Secure sign-up, login, and onboarding flow.", icon: "/auth.png" },
  { name: "Project Dashboard", desc: "Centralized hub for all your workflows.", icon: "/window.svg" },
  { name: "API Integrations", desc: "Connect with your stack in one click.", icon: "/api.png" },
  { name: "Automations", desc: "Set triggers, workflows, and background jobs.", icon: "/infra.png" },
  { name: "Analytics", desc: "Track usage, metrics, and performance.", icon: "/analytics.png" },
  { name: "Billing & Subscriptions", desc: "Stripe-powered seamless payments.", icon: "/file.svg" },
  { name: "User Roles", desc: "Granular permissions and access control.", icon: "/ai.png" },
  { name: "Data Storage", desc: "Secure cloud or local deployment options.", icon: "/cross-platform.png" },
];

export function ModulesSection() {
  const [textColor, setTextColor] = useState("text-black");
  return (
    <section className="relative py-20 px-6 sm:px-12">
      <h2 className="text-4xl font-bold text-center mb-12">Core Modules</h2>
      <div className="flex justify-end mb-4">
        <TextColorToggle onChange={setTextColor} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((m, i) => (
          <Card
            key={i}
            className="backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all min-h-[200px] flex flex-col items-center"
          >
            <Image src={m.icon} alt={m.name + ' icon'} width={48} height={48} className="mb-3" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{m.name}</h3>
            <p className={`text-sm ${textColor}`}>{m.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}