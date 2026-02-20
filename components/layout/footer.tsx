export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-8">
        
        <div className="space-y-2">
          <p className="text-white font-medium">
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