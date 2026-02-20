export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-black/60 dark:text-white/60 flex flex-col md:flex-row justify-between gap-8 transition-colors duration-300">
        
        <div className="space-y-2">
          <p className="text-black dark:text-white font-medium">
            Void Core Technologies
          </p>
          <p>
            Autonomous systems, AI infrastructure, and scalable product engineering.
          </p>
        </div>

        <div className="space-y-1 text-left md:text-right">
          <p>
            © {new Date().getFullYear()} Void Core Technologies. All rights reserved.
          </p>
          <p>
            Global delivery. Remote-first.
          </p>
        </div>

      </div>
    </footer>
  );
}