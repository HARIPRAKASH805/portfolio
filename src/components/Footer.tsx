export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 md:px-10 py-8 border-t border-primary/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="font-mono-cyber text-ink/50 text-xs sm:text-sm">
          Designed and Developed by Hari Prakash
        </p>
        <p className="font-mono-cyber text-ink/40 text-xs sm:text-sm">
          React &bull; Vite &bull; TypeScript
        </p>
        <p className="font-mono-cyber text-ink/40 text-xs sm:text-sm">
          &copy; 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
