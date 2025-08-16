// components/ui/GlassCard.tsx
import React from "react";

export const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
      {children}
    </div>
  );
};