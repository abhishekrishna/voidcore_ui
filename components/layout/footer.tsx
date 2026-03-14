import Link from "next/link";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/#blog" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Careers", href: "/#careers" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/voidcore-technologies" },
  { label: "GitHub", href: "https://github.com/abhishekrishna" },
  { label: "WhatsApp", href: "https://wa.me/919572200808" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* ── Top row ── */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-3 max-w-xs">
            <p className="font-semibold tracking-tight text-black dark:text-white text-sm">
              ○● voidcore
            </p>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
              Autonomous systems, AI infrastructure, and scalable product engineering.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-black/45 dark:text-white/45
                           hover:text-black dark:hover:text-white
                           transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black/45 dark:text-white/45
                           hover:text-black dark:hover:text-white
                           transition-colors"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-black/10 dark:border-white/10 mb-6" />

        {/* ── Bottom row ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3
                        text-xs text-black/35 dark:text-white/35">
          <p>© {new Date().getFullYear()} Void Core Technologies. All rights reserved.</p>
          <p>Global delivery · Remote-first · India</p>
        </div>
      </div>
    </footer>
  );
}
